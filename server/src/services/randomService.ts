import { Inject, Service } from 'typedi';
import { Logger } from 'winston';
import { RandomListCreation, IRandomList } from '../interfaces/IRandomList';
import { shuffle } from 'seededshuffle';
import { IManga } from '../interfaces/IManga';
import { Document } from 'mongoose';
import NotFound from '../errors/NotFound';
import ServerError from '../errors/ServerError';

@Service()
export default class RandomService {
  constructor(
    @Inject('mangaModel') private mangaModel: Models.MangaModel,
    @Inject('logger') private logger: Logger,
    @Inject('randomListModel') private randomModel: Models.RandomModel,
  ) {}
  private allTags = [
    '4-koma',
    'Achromatic',
    'Achronological Order',
    'Acting',
    'Advertisement',
    'Afterlife',
    'Age Gap',
    'Age Regression',
    'Agender',
    'Ahegao',
    'Airsoft',
    'Aliens',
    'Alternate Universe',
    'American Football',
    'Amnesia',
    'Amputation',
    'Anachronism',
    'Anal Sex',
    'Animals',
    'Anthology',
    'Anti-Hero',
    'Archery',
    'Armpits',
    'Artificial Intelligence',
    'Asexual',
    'Ashikoki',
    'Asphyxiation',
    'Assassins',
    'Astronomy',
    'Athletics',
    'Augmented Reality',
    'Autobiographical',
    'Aviation',
    'Badminton',
    'Band',
    'Bar',
    'Baseball',
    'Basketball',
    'Battle Royale',
    'Biographical',
    'Bisexual',
    'Blackmail',
    'Body Horror',
    'Body Swapping',
    'Bondage',
    'Boobjob',
    'Boxing',
    "Boys' Love",
    'Bullying',
    'Butler',
    'Calligraphy',
    'Cannibalism',
    'Card Battle',
    'Cars',
    'Centaur',
    'CGI',
    'Cheerleading',
    'Chibi',
    'Chimera',
    'Chuunibyou',
    'Circus',
    'Classic Literature',
    'College',
    'Coming of Age',
    'Conspiracy',
    'Cosmic Horror',
    'Cosplay',
    'Crime',
    'Crossdressing',
    'Crossover',
    'Cult',
    'Cultivation',
    'Cunnilingus',
    'Cute Girls Doing Cute Things',
    'Cyberpunk',
    'Cycling',
    'Dancing',
    'Death Game',
    'Defloration',
    'Delinquents',
    'Demons',
    'Denpa',
    'Detective',
    'Dinosaurs',
    'Dissociative Identities',
    'Dragons',
    'Drawing',
    'Drugs',
    'Dullahan',
    'Dungeon',
    'Dystopian',
    'Economics',
    'Educational',
    'Elf',
    'Ensemble Cast',
    'Environmental',
    'Episodic',
    'Ero Guro',
    'Espionage',
    'Exhibitionism',
    'Facial',
    'Fairy Tale',
    'Family Life',
    'Fashion',
    'Feet',
    'Fellatio',
    'Female Protagonist',
    'Firefighters',
    'Fishing',
    'Fitness',
    'Flash',
    'Flat Chest',
    'Food',
    'Football',
    'Foreign',
    'Fugitive',
    'Full CGI',
    'Full Color',
    'Futanari',
    'Gambling',
    'Gangs',
    'Gender Bending',
    'Ghost',
    'Go',
    'Goblin',
    'Gods',
    'Golf',
    'Gore',
    'Group Sex',
    'Guns',
    'Gyaru',
    'Handjob',
    'Harem',
    'Henshin',
    'Hikikomori',
    'Historical',
    'Human Pet',
    'Ice Skating',
    'Idol',
    'Incest',
    'Irrumatio',
    'Isekai',
    'Iyashikei',
    'Josei',
    'Kaiju',
    'Karuta',
    'Kemonomimi',
    'Kids',
    'Kuudere',
    'Lacrosse',
    'Lactation',
    'Language Barrier',
    'Large Breasts',
    'LGBTQ+ Themes',
    'Lost Civilization',
    'Love Triangle',
    'Mafia',
    'Magic',
    'Mahjong',
    'Maids',
    'Male Protagonist',
    'Martial Arts',
    'Masturbation',
    'Medicine',
    'Memory Manipulation',
    'Mermaid',
    'Meta',
    'MILF',
    'Military',
    'Monster Girl',
    'Mopeds',
    'Motorcycles',
    'Musical',
    'Mythology',
    'Nakadashi',
    'Nekomimi',
    'Netorare',
    'Netorase',
    'Netori',
    'Ninja',
    'No Dialogue',
    'Noir',
    'Nudity',
    'Nun',
    'Office Lady',
    'Oiran',
    'Ojou-sama',
    'Omegaverse',
    'Otaku Culture',
    'Outdoor',
    'Pandemic',
    'Parody',
    'Philosophy',
    'Photography',
    'Pirates',
    'Poker',
    'Police',
    'Politics',
    'Post-Apocalyptic',
    'POV',
    'Pregnant',
    'Primarily Adult Cast',
    'Primarily Child Cast',
    'Primarily Female Cast',
    'Primarily Male Cast',
    'Prostitution',
    'Public Sex',
    'Puppetry',
    'Rakugo',
    'Rape',
    'Real Robot',
    'Rehabilitation',
    'Reincarnation',
    'Revenge',
    'Reverse Harem',
    'Rimjob',
    'Robots',
    'Rotoscoping',
    'Rugby',
    'Rural',
    'Sadism',
    'Samurai',
    'Satire',
    'Scat',
    'School',
    'School Club',
    'Scuba Diving',
    'Seinen',
    'Sex Toys',
    'Shapeshifting',
    'Ships',
    'Shogi',
    'Shoujo',
    'Shounen',
    'Shrine Maiden',
    'Skateboarding',
    'Skeleton',
    'Slapstick',
    'Slavery',
    'Software Development',
    'Space',
    'Space Opera',
    'Steampunk',
    'Stop Motion',
    'Succubus',
    'Sumata',
    'Super Power',
    'Super Robot',
    'Superhero',
    'Surfing',
    'Surreal Comedy',
    'Survival',
    'Sweat',
    'Swimming',
    'Swordplay',
    'Table Tennis',
    'Tanks',
    'Tanned Skin',
    'Teacher',
    "Teens' Love",
    'Tennis',
    'Tentacles',
    'Terrorism',
    'Threesome',
    'Time Manipulation',
    'Time Skip',
    'Tokusatsu',
    'Tragedy',
    'Trains',
    'Triads',
    'Tsundere',
    'Twins',
    'Urban',
    'Urban Fantasy',
    'Urination',
    'Vampire',
    'Video Games',
    'Vikings',
    'Villainess',
    'Virginity',
    'Virtual World',
    'Volleyball',
    'Vore',
    'Voyeur',
    'War',
    'Werewolf',
    'Witch',
    'Work',
    'Wrestling',
    'Writing',
    'Wuxia',
    'Yakuza',
    'Yandere',
    'Youkai',
    'Yuri',
    'Zombie',
  ];
  private allGenres = [
    'Action',
    'Adventure',
    'Comedy',
    'Drama',
    'Ecchi',
    'Fantasy',
    'Hentai',
    'Horror',
    'Mahou Shoujo',
    'Mecha',
    'Music',
    'Mystery',
    'Psychological',
    'Romance',
    'Sci-Fi',
    'Slice of Life',
    'Sports',
    'Supernatural',
    'Thriller',
  ];

  private async makeSeed() {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < 8; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  public async createList(data: RandomListCreation) {
    let { includedGenres, includedTags, excludedGenres, excludedTags } = data;
    if (includedGenres.length === 0) includedGenres = [...this.allGenres];
    if (includedTags.length === 0) includedTags = [...this.allTags];

    try {
      const filtered = await this.mangaModel
        .find(
          {
            tags: {
              $elemMatch: {
                $in: [...includedTags],
                $nin: [...excludedTags],
              },
            },
            genre: {
              $elemMatch: {
                $in: [...includedGenres],
                $nin: [...excludedGenres],
              },
            },
          },
          {
            al_id: 1,
          },
        )
        .lean();

      if (!filtered) {
        throw new ServerError('An error occured while creating your list. Please try again later');
      }
      if (filtered.length === 0) {
        throw new NotFound('No manga found with your filters. Remove some filters and try again');
      }

      const seed = await this.makeSeed();

      const al_ids = filtered.map((manga: IManga & Document) => manga.al_id);
      const generated = shuffle(al_ids, seed, true);

      const list = await this.randomModel.create({
        count: filtered.length,
        includedGenres,
        includedTags,
        excludedGenres,
        excludedTags,
        seed: seed,
        generated: generated,
      });

      return list._id;
    } catch (err) {
      this.logger.error(err);
      throw err;
    }
  }

  private async findList(listID: string) {
    const list = await this.randomModel.findOne({ _id: listID }, { seed: 1, generated: 1 });
    if (list) {
      return { data: list.generated } as const;
    }
    return null;
  }

  public async getList(page: number, listID: string) {
    const list = await this.findList(listID);
    if (!list) {
      throw new NotFound('List not found');
    }

    const mangaCount = Number(list.data.length);
    const hasNextPage = page * 50 < mangaCount ? true : false;
    const totalPages = Math.ceil(mangaCount / 50);
    if (page > totalPages) {
    }
    return { list: list.data.slice(Math.max(1, page * 50 - 50), page * 50), hasNextPage, totalPages };
  }
}
