const optionsList = [
      { value: 'Action', label: 'Action' },
      { value: 'Adventure', label: 'Adventure' },
      { value: 'Comedy', label: 'Comedy' },
      { value: 'Drama', label: 'Drama' },
      { value: 'Ecchi', label: 'Ecchi' },
      { value: 'Fantasy', label: 'Fantasy' },
      { value: 'Hentai', label: 'Hentai' },
      { value: 'Horror', label: 'Horror' },
      { value: 'Mahou Shoujo', label: 'Mahou Shoujo' },
      { value: 'Mecha', label: 'Mecha' },
      { value: 'Music', label: 'Music' },
      { value: 'Mystery', label: 'Mystery' },
      { value: 'Psychological', label: 'Psychological' },
      { value: 'Romance', label: 'Romance' },
      { value: 'Sci-Fi', label: 'Sci-Fi' },
      { value: 'Slice of Life', label: 'Slice of Life' },
      { value: 'Sports', label: 'Sports' },
      { value: 'Supernatural', label: 'Supernatural' },
      { value: 'Thriller', label: 'Thriller' },
    
      {
        label: '4-koma',
        value: 206,
      },
      {
        label: 'Achromatic',
        value: 710,
      },
      {
        label: 'Advertisement',
        value: 505,
      },
      {
        label: 'Anthology',
        value: 471,
      },
      {
        label: 'CGI',
        value: 90,
      },
      {
        label: 'Episodic',
        value: 193,
      },
      {
        label: 'Flash',
        value: 242,
      },
      {
        label: 'Full CGI',
        value: 89,
      },
      {
        label: 'Full Color',
        value: 207,
      },
      {
        label: 'No Dialogue',
        value: 341,
      },
      {
        label: 'POV',
        value: 215,
      },
      {
        label: 'Puppetry',
        value: 325,
      },
      {
        label: 'Rotoscoping',
        value: 683,
      },
      {
        label: 'Stop Motion',
        value: 323,
      },
      {
        label: 'Achronological Order',
        value: 156,
      },
      {
        label: 'Anachronism',
        value: 490,
      },
      {
        label: 'Dystopian',
        value: 217,
      },
      {
        label: 'Historical',
        value: 25,
      },
      {
        label: 'Time Skip',
        value: 153,
      },
      {
        label: 'Acting',
        value: 548,
      },
      {
        label: 'Calligraphy',
        value: 204,
      },
      {
        label: 'Classic Literature',
        value: 227,
      },
      {
        label: 'Drawing',
        value: 118,
      },
      {
        label: 'Fashion',
        value: 410,
      },
      {
        label: 'Food',
        value: 142,
      },
      {
        label: 'Photography',
        value: 195,
      },
      {
        label: 'Rakugo',
        value: 481,
      },
      {
        label: 'Writing',
        value: 394,
      },
      {
        label: 'Afterlife',
        value: 147,
      },
      {
        label: 'Alternate Universe',
        value: 146,
      },
      {
        label: 'Augmented Reality',
        value: 364,
      },
      {
        label: 'Omegaverse',
        value: 533,
      },
      {
        label: 'Post-Apocalyptic',
        value: 93,
      },
      {
        label: 'Space',
        value: 63,
      },
      {
        label: 'Urban Fantasy',
        value: 321,
      },
      {
        label: 'Virtual World',
        value: 112,
      },
      {
        label: 'Age Gap',
        value: 138,
      },
      {
        label: 'Bisexual',
        value: 294,
      },
      {
        label: "Boys' Love",
        value: 75,
      },
      {
        label: 'Harem',
        value: 23,
      },
      {
        label: 'Love Triangle',
        value: 139,
      },
      {
        label: 'Reverse Harem',
        value: 123,
      },
      {
        label: "Teens' Love",
        value: 649,
      },
      {
        label: 'Yuri',
        value: 76,
      },
      {
        label: 'Age Regression',
        value: 488,
      },
      {
        label: 'Agender',
        value: 334,
      },
      {
        label: 'Aliens',
        value: 191,
      },
      {
        label: 'Amnesia',
        value: 240,
      },
      {
        label: 'Artificial Intelligence',
        value: 517,
      },
      {
        label: 'Asexual',
        value: 622,
      },
      {
        label: 'Butler',
        value: 812,
      },
      {
        label: 'Centaur',
        value: 632,
      },
      {
        label: 'Chimera',
        value: 774,
      },
      {
        label: 'Chuunibyou',
        value: 267,
      },
      {
        label: 'Cosplay',
        value: 328,
      },
      {
        label: 'Crossdressing',
        value: 186,
      },
      {
        label: 'Delinquents',
        value: 395,
      },
      {
        label: 'Demons',
        value: 15,
      },
      {
        label: 'Detective',
        value: 694,
      },
      {
        label: 'Dinosaurs',
        value: 704,
      },
      {
        label: 'Dissociative valueentities',
        value: 536,
      },
      {
        label: 'Dragons',
        value: 224,
      },
      {
        label: 'Dullahan',
        value: 658,
      },
      {
        label: 'Elf',
        value: 598,
      },
      {
        label: 'Ghost',
        value: 220,
      },
      {
        label: 'Goblin',
        value: 480,
      },
      {
        label: 'Gods',
        value: 253,
      },
      {
        label: 'Gyaru',
        value: 356,
      },
      {
        label: 'Hikikomori',
        value: 282,
      },
      {
        label: 'valueol',
        value: 115,
      },
      {
        label: 'Kemonomimi',
        value: 254,
      },
      {
        label: 'Kuudere',
        value: 779,
      },
      {
        label: 'Mavalues',
        value: 249,
      },
      {
        label: 'Mermavalue',
        value: 558,
      },
      {
        label: 'Monster Girl',
        value: 259,
      },
      {
        label: 'Nekomimi',
        value: 113,
      },
      {
        label: 'Ninja',
        value: 255,
      },
      {
        label: 'Nudity',
        value: 100,
      },
      {
        label: 'Nun',
        value: 614,
      },
      {
        label: 'Oiran',
        value: 593,
      },
      {
        label: 'Ojou-sama',
        value: 780,
      },
      {
        label: 'Pirates',
        value: 201,
      },
      {
        label: 'Robots',
        value: 175,
      },
      {
        label: 'Samurai',
        value: 291,
      },
      {
        label: 'Shrine Mavalueen',
        value: 468,
      },
      {
        label: 'Skeleton',
        value: 499,
      },
      {
        label: 'Succubus',
        value: 665,
      },
      {
        label: 'Tanned Skin',
        value: 335,
      },
      {
        label: 'Teacher',
        value: 165,
      },
      {
        label: 'Tsundere',
        value: 164,
      },
      {
        label: 'Twins',
        value: 494,
      },
      {
        label: 'Vampire',
        value: 74,
      },
      {
        label: 'Vikings',
        value: 618,
      },
      {
        label: 'Werewolf',
        value: 534,
      },
      {
        label: 'Witch',
        value: 179,
      },
      {
        label: 'Yandere',
        value: 163,
      },
      {
        label: 'Zombie',
        value: 152,
      },
      {
        label: 'Ahegao',
        value: 279,
      },
      {
        label: 'Amputation',
        value: 652,
      },
      {
        label: 'Anal Sex',
        value: 185,
      },
      {
        label: 'Armpits',
        value: 629,
      },
      {
        label: 'Ashikoki',
        value: 315,
      },
      {
        label: 'Asphyxiation',
        value: 651,
      },
      {
        label: 'Blackmail',
        value: 309,
      },
      {
        label: 'Bondage',
        value: 246,
      },
      {
        label: 'Boobjob',
        value: 126,
      },
      {
        label: 'Cunnilingus',
        value: 135,
      },
      {
        label: 'Defloration',
        value: 129,
      },
      {
        label: 'Exhibitionism',
        value: 901,
      },
      {
        label: 'Facial',
        value: 130,
      },
      {
        label: 'Feet',
        value: 631,
      },
      {
        label: 'Fellatio',
        value: 134,
      },
      {
        label: 'Flat Chest',
        value: 136,
      },
      {
        label: 'Futanari',
        value: 188,
      },
      {
        label: 'Group Sex',
        value: 830,
      },
      {
        label: 'Handjob',
        value: 317,
      },
      {
        label: 'Human Pet',
        value: 181,
      },
      {
        label: 'Incest',
        value: 128,
      },
      {
        label: 'Irrumatio',
        value: 359,
      },
      {
        label: 'Lactation',
        value: 650,
      },
      {
        label: 'Large Breasts',
        value: 137,
      },
      {
        label: 'Masturbation',
        value: 131,
      },
      {
        label: 'MILF',
        value: 187,
      },
      {
        label: 'Nakadashi',
        value: 125,
      },
      {
        label: 'Netorare',
        value: 124,
      },
      {
        label: 'Netorase',
        value: 280,
      },
      {
        label: 'Netori',
        value: 316,
      },
      {
        label: 'Pregnant',
        value: 397,
      },
      {
        label: 'Prostitution',
        value: 190,
      },
      {
        label: 'Public Sex',
        value: 127,
      },
      {
        label: 'Rape',
        value: 155,
      },
      {
        label: 'Rimjob',
        value: 845,
      },
      {
        label: 'Sadism',
        value: 723,
      },
      {
        label: 'Scat',
        value: 387,
      },
      {
        label: 'Sex Toys',
        value: 133,
      },
      {
        label: 'Sumata',
        value: 360,
      },
      {
        label: 'Sweat',
        value: 630,
      },
      {
        label: 'Tentacles',
        value: 189,
      },
      {
        label: 'Threesome',
        value: 132,
      },
      {
        label: 'Urination',
        value: 180,
      },
      {
        label: 'Virginity',
        value: 380,
      },
      {
        label: 'Vore',
        value: 624,
      },
      {
        label: 'Voyeur',
        value: 318,
      },
      {
        label: 'Airsoft',
        value: 167,
      },
      {
        label: 'American Football',
        value: 314,
      },
      {
        label: 'Athletics',
        value: 264,
      },
      {
        label: 'Badminton',
        value: 235,
      },
      {
        label: 'Baseball',
        value: 149,
      },
      {
        label: 'Basketball',
        value: 192,
      },
      {
        label: 'Boxing',
        value: 169,
      },
      {
        label: 'Cheerleading',
        value: 646,
      },
      {
        label: 'Cycling',
        value: 151,
      },
      {
        label: 'Fishing',
        value: 212,
      },
      {
        label: 'Fitness',
        value: 170,
      },
      {
        label: 'Football',
        value: 148,
      },
      {
        label: 'Golf',
        value: 532,
      },
      {
        label: 'Ice Skating',
        value: 228,
      },
      {
        label: 'Lacrosse',
        value: 437,
      },
      {
        label: 'Rugby',
        value: 221,
      },
      {
        label: 'Scuba Diving',
        value: 811,
      },
      {
        label: 'Skateboarding',
        value: 809,
      },
      {
        label: 'Surfing',
        value: 678,
      },
      {
        label: 'Swimming',
        value: 150,
      },
      {
        label: 'Table Tennis',
        value: 120,
      },
      {
        label: 'Tennis',
        value: 194,
      },
      {
        label: 'Volleyball',
        value: 116,
      },
      {
        label: 'Wrestling',
        value: 231,
      },
      {
        label: 'Animals',
        value: 433,
      },
      {
        label: 'Astronomy',
        value: 623,
      },
      {
        label: 'Autobiographical',
        value: 519,
      },
      {
        label: 'Biographical',
        value: 239,
      },
      {
        label: 'Body Horror',
        value: 639,
      },
      {
        label: 'Cannibalism',
        value: 870,
      },
      {
        label: 'Chibi',
        value: 324,
      },
      {
        label: 'Cosmic Horror',
        value: 636,
      },
      {
        label: 'Crime',
        value: 648,
      },
      {
        label: 'Crossover',
        value: 158,
      },
      {
        label: 'Death Game',
        value: 615,
      },
      {
        label: 'Denpa',
        value: 654,
      },
      {
        label: 'Drugs',
        value: 489,
      },
      {
        label: 'Economics',
        value: 248,
      },
      {
        label: 'Educational',
        value: 140,
      },
      {
        label: 'Environmental',
        value: 342,
      },
      {
        label: 'Ero Guro',
        value: 482,
      },
      {
        label: 'Gambling',
        value: 91,
      },
      {
        label: 'Gender Bending',
        value: 77,
      },
      {
        label: 'Gore',
        value: 94,
      },
      {
        label: 'LGBTQ+ Themes',
        value: 483,
      },
      {
        label: 'Lost Civilization',
        value: 466,
      },
      {
        label: 'Medicine',
        value: 659,
      },
      {
        label: 'Memory Manipulation',
        value: 365,
      },
      {
        label: 'Meta',
        value: 144,
      },
      {
        label: 'Noir',
        value: 327,
      },
      {
        label: 'Otaku Culture',
        value: 97,
      },
      {
        label: 'Pandemic',
        value: 874,
      },
      {
        label: 'Philosophy',
        value: 391,
      },
      {
        label: 'Politics',
        value: 103,
      },
      {
        label: 'Reincarnation',
        value: 243,
      },
      {
        label: 'Slavery',
        value: 247,
      },
      {
        label: 'Software Development',
        value: 386,
      },
      {
        label: 'Survival',
        value: 143,
      },
      {
        label: 'Terrorism',
        value: 285,
      },
      {
        label: 'War',
        value: 111,
      },
      {
        label: 'Anti-Hero',
        value: 104,
      },
      {
        label: 'Ensemble Cast',
        value: 105,
      },
      {
        label: 'Female Protagonist',
        value: 98,
      },
      {
        label: 'Male Protagonist',
        value: 82,
      },
      {
        label: 'Office Lady',
        value: 653,
      },
      {
        label: 'Primarily Adult Cast',
        value: 109,
      },
      {
        label: 'Primarily Child Cast',
        value: 446,
      },
      {
        label: 'Primarily Female Cast',
        value: 86,
      },
      {
        label: 'Primarily Male Cast',
        value: 88,
      },
      {
        label: 'Villainess',
        value: 857,
      },
      {
        label: 'Archery',
        value: 251,
      },
      {
        label: 'Battle Royale',
        value: 101,
      },
      {
        label: 'Espionage',
        value: 310,
      },
      {
        label: 'Fugitive',
        value: 226,
      },
      {
        label: 'Guns',
        value: 157,
      },
      {
        label: 'Martial Arts',
        value: 30,
      },
      {
        label: 'Swordplay',
        value: 43,
      },
      {
        label: 'Assassins',
        value: 322,
      },
      {
        label: 'Cult',
        value: 586,
      },
      {
        label: 'Firefighters',
        value: 613,
      },
      {
        label: 'Gangs',
        value: 106,
      },
      {
        label: 'Mafia',
        value: 107,
      },
      {
        label: 'Military',
        value: 34,
      },
      {
        label: 'Police',
        value: 40,
      },
      {
        label: 'Triads',
        value: 214,
      },
      {
        label: 'Yakuza',
        value: 199,
      },
      {
        label: 'Aviation',
        value: 355,
      },
      {
        label: 'Cars',
        value: 10,
      },
      {
        label: 'Mopeds',
        value: 176,
      },
      {
        label: 'Motorcycles',
        value: 173,
      },
      {
        label: 'Ships',
        value: 305,
      },
      {
        label: 'Tanks',
        value: 174,
      },
      {
        label: 'Trains',
        value: 122,
      },
      {
        label: 'Band',
        value: 110,
      },
      {
        label: 'Dancing',
        value: 209,
      },
      {
        label: 'Musical',
        value: 265,
      },
      {
        label: 'Bar',
        value: 161,
      },
      {
        label: 'Circus',
        value: 476,
      },
      {
        label: 'College',
        value: 404,
      },
      {
        label: 'Dungeon',
        value: 604,
      },
      {
        label: 'Foreign',
        value: 198,
      },
      {
        label: 'Language Barrier',
        value: 516,
      },
      {
        label: 'Outdoor',
        value: 262,
      },
      {
        label: 'Rural',
        value: 250,
      },
      {
        label: 'School',
        value: 46,
      },
      {
        label: 'School Club',
        value: 84,
      },
      {
        label: 'Urban',
        value: 595,
      },
      {
        label: 'Work',
        value: 145,
      },
      {
        label: 'Body Swapping',
        value: 154,
      },
      {
        label: 'Cultivation',
        value: 326,
      },
      {
        label: 'Fairy Tale',
        value: 400,
      },
      {
        label: 'Henshin',
        value: 99,
      },
      {
        label: 'Isekai',
        value: 244,
      },
      {
        label: 'Kaiju',
        value: 276,
      },
      {
        label: 'Magic',
        value: 29,
      },
      {
        label: 'Mythology',
        value: 208,
      },
      {
        label: 'Shapeshifting',
        value: 772,
      },
      {
        label: 'Steampunk',
        value: 95,
      },
      {
        label: 'Super Power',
        value: 66,
      },
      {
        label: 'Superhero',
        value: 172,
      },
      {
        label: 'Wuxia',
        value: 303,
      },
      {
        label: 'Youkai',
        value: 233,
      },
      {
        label: 'Bullying',
        value: 171,
      },
      {
        label: 'Coming of Age',
        value: 102,
      },
      {
        label: 'Conspiracy',
        value: 456,
      },
      {
        label: 'Rehabilitation',
        value: 311,
      },
      {
        label: 'Revenge',
        value: 252,
      },
      {
        label: 'Tragedy',
        value: 85,
      },
      {
        label: 'Card Battle',
        value: 178,
      },
      {
        label: 'Go',
        value: 443,
      },
      {
        label: 'Karuta',
        value: 182,
      },
      {
        label: 'Mahjong',
        value: 117,
      },
      {
        label: 'Poker',
        value: 183,
      },
      {
        label: 'Shogi',
        value: 121,
      },
      {
        label: 'Cute Girls Doing Cute Things',
        value: 92,
      },
      {
        label: 'Family Life',
        value: 87,
      },
      {
        label: 'Iyashikei',
        value: 81,
      },
      {
        label: 'Cyberpunk',
        value: 108,
      },
      {
        label: 'Space Opera',
        value: 162,
      },
      {
        label: 'Time Manipulation',
        value: 96,
      },
      {
        label: 'Tokusatsu',
        value: 513,
      },
      {
        label: 'Josei',
        value: 27,
      },
      {
        label: 'Kvalues',
        value: 28,
      },
      {
        label: 'Seinen',
        value: 50,
      },
      {
        label: 'Shoujo',
        value: 53,
      },
      {
        label: 'Shounen',
        value: 56,
      },
      {
        label: 'Parody',
        value: 39,
      },
      {
        label: 'Satire',
        value: 80,
      },
      {
        label: 'Slapstick',
        value: 83,
      },
      {
        label: 'Surreal Comedy',
        value: 281,
      },
      {
        label: 'Real Robot',
        value: 160,
      },
      {
        label: 'Super Robot',
        value: 159,
      },
      {
        label: 'Vvalueeo Games',
        value: 308,
      },
]
export default optionsList
