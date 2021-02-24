import { sortBy } from 'lodash';
import { Inject, Service } from 'typedi';
import { RandomListCreation, RandomList } from '../interfaces/RandomList';
import { IManga } from '../interfaces/IManga';
const SeededShuffle = require('seededshuffle');

const { performance, PerformanceObserver } = require('perf_hooks');

const perfObserver = new PerformanceObserver(items => {
  items.getEntries().forEach(entry => {
    console.log(entry);
  });
});

perfObserver.observe({ entryTypes: ['measure'], buffer: true });

@Service()
export default class RandomService {
  constructor(
    @Inject('mangaModel') private mangaModel: Models.MangaModel,
    @Inject('logger') private logger,
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
  private async shuffle(array, seed) {
    let currentIndex = array.length,
      temporaryValue,
      randomIndex;
    seed = seed || 1;
    let random = function () {
      var x = Math.sin(seed++) * 10000;
      return x - Math.floor(x);
    };
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(random() * currentIndex);
      currentIndex -= 1;
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

  public async createList(data: RandomListCreation) {
    let { includedGenres, includedTags, excludedGenres, excludedTags } = data;
    if (includedGenres.length === 0) includedGenres = [...this.allGenres];
    if (includedTags.length === 0) includedTags = [...this.allTags];

    try {
      const listCount = await this.mangaModel.countDocuments({
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
      });

      /**
       * Add expiration index
       */

      const list = await this.randomModel.create({
        count: listCount,
        includedGenres,
        includedTags,
        excludedGenres,
        excludedTags,
        seed: await this.makeSeed(),
      });
      return list._id;
    } catch (err) {
      this.logger.error(err);
      throw err;
    }
  }
  public async getList(page: number, listID: String) {
    const listData: RandomList = await this.randomModel.findOne({
      _id: listID,
    });

    /**
     * Check if current page * 50 is less or equal to the length of generated
     * If it is then retrieve it, if not:
     * Gen 50 numbers, sort them. Use $gt _id and get each manga for given number
     * Unsort numbers, push manga id's into generated
     * Return the 50 manga
     */

    const arr = [...Array(listData.count - 1).keys()];
    SeededShuffle.shuffle(arr, listData.seed);
    let current = arr.slice(Math.max(1, page * 50 - 50), page * 50);
    if (listData.generated.length === page * 50) {
      /**
       * populate and return
       */
    }
    current.sort((a, b) => a - b);
    let manga: IManga[] = [];
    performance.mark('skip-start');

    const first = await this.mangaModel
      .find(
        {
          tags: {
            $elemMatch: {
              $in: listData.includedTags,
              $nin: listData.excludedTags,
            },
          },
          genre: {
            $elemMatch: {
              $in: listData.includedGenres,
              $nin: listData.excludedGenres,
            },
          },
        },
        { al_id: 1 },
      )
      .skip(current[0])
      .limit(1);
    manga.push(first);
    this.logger.debug(first.al_id);

    let previous = first._id;
    for (let i = 1; i < 50; i++) {
      const found = await this.mangaModel
        .find(
          {
            tags: {
              $elemMatch: {
                $in: listData.includedTags,
                $nin: listData.excludedTags,
              },
            },
            genre: {
              $elemMatch: {
                $in: listData.includedGenres,
                $nin: listData.excludedGenres,
              },
            },
            id: {
              $gte: previous,
            },
          },
          { al_id: 1 },
        )
        .skip(current[i])
        .limit(1);
      previous = found._id;
      this.logger.debug(previous);
      manga.push(found);
    }
    performance.mark('skip-end');
    performance.measure('skip', 'skip-start', 'skip-end');
    this.logger.debug('%o', manga);
    return manga;
  }
}
