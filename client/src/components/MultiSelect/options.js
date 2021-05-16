const safeTags = [
  {
    label: 'Genres',
    options: [
      {
        label: 'Action',
        value: 'Action',
        category: 'Genres',
      },
      {
        label: 'Adventure',
        value: 'Adventure',
        category: 'Genres',
      },
      {
        label: 'Comedy',
        value: 'Comedy',
        category: 'Genres',
      },
      {
        label: 'Drama',
        value: 'Drama',
        category: 'Genres',
      },
      {
        label: 'Ecchi',
        value: 'Ecchi',
        category: 'Genres',
      },
      {
        label: 'Fantasy',
        value: 'Fantasy',
        category: 'Genres',
      },
      {
        label: 'Horror',
        value: 'Horror',
        category: 'Genres',
      },
      {
        label: 'Mahou Shoujo',
        value: 'Mahou Shoujo',
        category: 'Genres',
      },
      {
        label: 'Mecha',
        value: 'Mecha',
        category: 'Genres',
      },
      {
        label: 'Music',
        value: 'Music',
        category: 'Genres',
      },
      {
        label: 'Mystery',
        value: 'Mystery',
        category: 'Genres',
      },
      {
        label: 'Psychological',
        value: 'Psychological',
        category: 'Genres',
      },
      {
        label: 'Romance',
        value: 'Romance',
        category: 'Genres',
      },
      {
        label: 'Sci-Fi',
        value: 'Sci-Fi',
        category: 'Genres',
      },
      {
        label: 'Slice of Life',
        value: 'Slice of Life',
        category: 'Genres',
      },
      {
        label: 'Sports',
        value: 'Sports',
        category: 'Genres',
      },
      {
        label: 'Supernatural',
        value: 'Supernatural',
        category: 'Genres',
      },
      {
        label: 'Thriller',
        value: 'Thriller',
        category: 'Genres',
      },
    ],
  },
  {
    label: 'Technical',
    options: [
      {
        label: '4-koma',
        value: 206,
        category: 'Technical',
      },
      {
        label: 'Achromatic',
        value: 710,
        category: 'Technical',
      },
      {
        label: 'Advertisement',
        value: 505,
        category: 'Technical',
      },
      {
        label: 'Anthology',
        value: 471,
        category: 'Technical',
      },
      {
        label: 'CGI',
        value: 90,
        category: 'Technical',
      },
      {
        label: 'Episodic',
        value: 193,
        category: 'Technical',
      },
      {
        label: 'Flash',
        value: 242,
        category: 'Technical',
      },
      {
        label: 'Full CGI',
        value: 89,
        category: 'Technical',
      },
      {
        label: 'Full Color',
        value: 207,
        category: 'Technical',
      },
      {
        label: 'No Dialogue',
        value: 341,
        category: 'Technical',
      },
      {
        label: 'POV',
        value: 215,
        category: 'Technical',
      },
      {
        label: 'Puppetry',
        value: 325,
        category: 'Technical',
      },
      {
        label: 'Rotoscoping',
        value: 683,
        category: 'Technical',
      },
      {
        label: 'Stop Motion',
        value: 323,
        category: 'Technical',
      },
    ],
  },
  {
    label: 'Setting-Time',
    options: [
      {
        label: 'Achronological Order',
        value: 156,
        category: 'Setting-Time',
      },
      {
        label: 'Anachronism',
        value: 490,
        category: 'Setting-Time',
      },
      {
        label: 'Dystopian',
        value: 217,
        category: 'Setting-Time',
      },
      {
        label: 'Historical',
        value: 25,
        category: 'Setting-Time',
      },
      {
        label: 'Time Skip',
        value: 153,
        category: 'Setting-Time',
      },
    ],
  },
  {
    label: 'Theme-Arts',
    options: [
      {
        label: 'Acting',
        value: 548,
        category: 'Theme-Arts',
      },
      {
        label: 'Calligraphy',
        value: 204,
        category: 'Theme-Arts',
      },
      {
        label: 'Classic Literature',
        value: 227,
        category: 'Theme-Arts',
      },
      {
        label: 'Drawing',
        value: 118,
        category: 'Theme-Arts',
      },
      {
        label: 'Fashion',
        value: 410,
        category: 'Theme-Arts',
      },
      {
        label: 'Food',
        value: 142,
        category: 'Theme-Arts',
      },
      {
        label: 'Photography',
        value: 195,
        category: 'Theme-Arts',
      },
      {
        label: 'Rakugo',
        value: 481,
        category: 'Theme-Arts',
      },
      {
        label: 'Writing',
        value: 394,
        category: 'Theme-Arts',
      },
    ],
  },
  {
    label: 'Setting-Universe',
    options: [
      {
        label: 'Afterlife',
        value: 147,
        category: 'Setting-Universe',
      },
      {
        label: 'Alternate Universe',
        value: 146,
        category: 'Setting-Universe',
      },
      {
        label: 'Augmented Reality',
        value: 364,
        category: 'Setting-Universe',
      },
      {
        label: 'Omegaverse',
        value: 533,
        category: 'Setting-Universe',
      },
      {
        label: 'Post-Apocalyptic',
        value: 93,
        category: 'Setting-Universe',
      },
      {
        label: 'Space',
        value: 63,
        category: 'Setting-Universe',
      },
      {
        label: 'Urban Fantasy',
        value: 321,
        category: 'Setting-Universe',
      },
      {
        label: 'Virtual World',
        value: 112,
        category: 'Setting-Universe',
      },
    ],
  },
  {
    label: 'Theme-Romance',
    options: [
      {
        label: 'Age Gap',
        value: 138,
        category: 'Theme-Romance',
      },
      {
        label: 'Bisexual',
        value: 294,
        category: 'Theme-Romance',
      },
      {
        label: "Boys' Love",
        value: 75,
        category: 'Theme-Romance',
      },
      {
        label: 'Harem',
        value: 23,
        category: 'Theme-Romance',
      },
      {
        label: 'Love Triangle',
        value: 139,
        category: 'Theme-Romance',
      },
      {
        label: 'Reverse Harem',
        value: 123,
        category: 'Theme-Romance',
      },
      {
        label: "Teens' Love",
        value: 649,
        category: 'Theme-Romance',
      },
      {
        label: 'Yuri',
        value: 76,
        category: 'Theme-Romance',
      },
    ],
  },
  {
    label: 'Cast-Traits',
    options: [
      {
        label: 'Age Regression',
        value: 488,
        category: 'Cast-Traits',
      },
      {
        label: 'Agender',
        value: 334,
        category: 'Cast-Traits',
      },
      {
        label: 'Aliens',
        value: 191,
        category: 'Cast-Traits',
      },
      {
        label: 'Amnesia',
        value: 240,
        category: 'Cast-Traits',
      },
      {
        label: 'Artificial Intelligence',
        value: 517,
        category: 'Cast-Traits',
      },
      {
        label: 'Asexual',
        value: 622,
        category: 'Cast-Traits',
      },
      {
        label: 'Butler',
        value: 812,
        category: 'Cast-Traits',
      },
      {
        label: 'Centaur',
        value: 632,
        category: 'Cast-Traits',
      },
      {
        label: 'Chimera',
        value: 774,
        category: 'Cast-Traits',
      },
      {
        label: 'Chuunibyou',
        value: 267,
        category: 'Cast-Traits',
      },
      {
        label: 'Cosplay',
        value: 328,
        category: 'Cast-Traits',
      },
      {
        label: 'Crossdressing',
        value: 186,
        category: 'Cast-Traits',
      },
      {
        label: 'Delinquents',
        value: 395,
        category: 'Cast-Traits',
      },
      {
        label: 'Demons',
        value: 15,
        category: 'Cast-Traits',
      },
      {
        label: 'Detective',
        value: 694,
        category: 'Cast-Traits',
      },
      {
        label: 'Dinosaurs',
        value: 704,
        category: 'Cast-Traits',
      },
      {
        label: 'Dissociative valueentities',
        value: 536,
        category: 'Cast-Traits',
      },
      {
        label: 'Dragons',
        value: 224,
        category: 'Cast-Traits',
      },
      {
        label: 'Dullahan',
        value: 658,
        category: 'Cast-Traits',
      },
      {
        label: 'Elf',
        value: 598,
        category: 'Cast-Traits',
      },
      {
        label: 'Ghost',
        value: 220,
        category: 'Cast-Traits',
      },
      {
        label: 'Goblin',
        value: 480,
        category: 'Cast-Traits',
      },
      {
        label: 'Gods',
        value: 253,
        category: 'Cast-Traits',
      },
      {
        label: 'Gyaru',
        value: 356,
        category: 'Cast-Traits',
      },
      {
        label: 'Hikikomori',
        value: 282,
        category: 'Cast-Traits',
      },
      {
        label: 'valueol',
        value: 115,
        category: 'Cast-Traits',
      },
      {
        label: 'Kemonomimi',
        value: 254,
        category: 'Cast-Traits',
      },
      {
        label: 'Kuudere',
        value: 779,
        category: 'Cast-Traits',
      },
      {
        label: 'Mavalues',
        value: 249,
        category: 'Cast-Traits',
      },
      {
        label: 'Mermavalue',
        value: 558,
        category: 'Cast-Traits',
      },
      {
        label: 'Monster Girl',
        value: 259,
        category: 'Cast-Traits',
      },
      {
        label: 'Nekomimi',
        value: 113,
        category: 'Cast-Traits',
      },
      {
        label: 'Ninja',
        value: 255,
        category: 'Cast-Traits',
      },
      {
        label: 'Nudity',
        value: 100,
        category: 'Cast-Traits',
      },
      {
        label: 'Nun',
        value: 614,
        category: 'Cast-Traits',
      },
      {
        label: 'Oiran',
        value: 593,
        category: 'Cast-Traits',
      },
      {
        label: 'Ojou-sama',
        value: 780,
        category: 'Cast-Traits',
      },
      {
        label: 'Pirates',
        value: 201,
        category: 'Cast-Traits',
      },
      {
        label: 'Robots',
        value: 175,
        category: 'Cast-Traits',
      },
      {
        label: 'Samurai',
        value: 291,
        category: 'Cast-Traits',
      },
      {
        label: 'Shrine Mavalueen',
        value: 468,
        category: 'Cast-Traits',
      },
      {
        label: 'Skeleton',
        value: 499,
        category: 'Cast-Traits',
      },
      {
        label: 'Succubus',
        value: 665,
        category: 'Cast-Traits',
      },
      {
        label: 'Tanned Skin',
        value: 335,
        category: 'Cast-Traits',
      },
      {
        label: 'Teacher',
        value: 165,
        category: 'Cast-Traits',
      },
      {
        label: 'Tsundere',
        value: 164,
        category: 'Cast-Traits',
      },
      {
        label: 'Twins',
        value: 494,
        category: 'Cast-Traits',
      },
      {
        label: 'Vampire',
        value: 74,
        category: 'Cast-Traits',
      },
      {
        label: 'Vikings',
        value: 618,
        category: 'Cast-Traits',
      },
      {
        label: 'Werewolf',
        value: 534,
        category: 'Cast-Traits',
      },
      {
        label: 'Witch',
        value: 179,
        category: 'Cast-Traits',
      },
      {
        label: 'Yandere',
        value: 163,
        category: 'Cast-Traits',
      },
      {
        label: 'Zombie',
        value: 152,
        category: 'Cast-Traits',
      },
    ],
  },
  {
    label: 'Theme-Game-Sport',
    options: [
      {
        label: 'Airsoft',
        value: 167,
        category: 'Theme-Game-Sport',
      },
      {
        label: 'American Football',
        value: 314,
        category: 'Theme-Game-Sport',
      },
      {
        label: 'Athletics',
        value: 264,
        category: 'Theme-Game-Sport',
      },
      {
        label: 'Badminton',
        value: 235,
        category: 'Theme-Game-Sport',
      },
      {
        label: 'Baseball',
        value: 149,
        category: 'Theme-Game-Sport',
      },
      {
        label: 'Basketball',
        value: 192,
        category: 'Theme-Game-Sport',
      },
      {
        label: 'Boxing',
        value: 169,
        category: 'Theme-Game-Sport',
      },
      {
        label: 'Cheerleading',
        value: 646,
        category: 'Theme-Game-Sport',
      },
      {
        label: 'Cycling',
        value: 151,
        category: 'Theme-Game-Sport',
      },
      {
        label: 'Fishing',
        value: 212,
        category: 'Theme-Game-Sport',
      },
      {
        label: 'Fitness',
        value: 170,
        category: 'Theme-Game-Sport',
      },
      {
        label: 'Football',
        value: 148,
        category: 'Theme-Game-Sport',
      },
      {
        label: 'Golf',
        value: 532,
        category: 'Theme-Game-Sport',
      },
      {
        label: 'Ice Skating',
        value: 228,
        category: 'Theme-Game-Sport',
      },
      {
        label: 'Lacrosse',
        value: 437,
        category: 'Theme-Game-Sport',
      },
      {
        label: 'Rugby',
        value: 221,
        category: 'Theme-Game-Sport',
      },
      {
        label: 'Scuba Diving',
        value: 811,
        category: 'Theme-Game-Sport',
      },
      {
        label: 'Skateboarding',
        value: 809,
        category: 'Theme-Game-Sport',
      },
      {
        label: 'Surfing',
        value: 678,
        category: 'Theme-Game-Sport',
      },
      {
        label: 'Swimming',
        value: 150,
        category: 'Theme-Game-Sport',
      },
      {
        label: 'Table Tennis',
        value: 120,
        category: 'Theme-Game-Sport',
      },
      {
        label: 'Tennis',
        value: 194,
        category: 'Theme-Game-Sport',
      },
      {
        label: 'Volleyball',
        value: 116,
        category: 'Theme-Game-Sport',
      },
      {
        label: 'Wrestling',
        value: 231,
        category: 'Theme-Game-Sport',
      },
    ],
  },
  {
    label: 'Theme-Other',
    options: [
      {
        label: 'Animals',
        value: 433,
        category: 'Theme-Other',
      },
      {
        label: 'Astronomy',
        value: 623,
        category: 'Theme-Other',
      },
      {
        label: 'Autobiographical',
        value: 519,
        category: 'Theme-Other',
      },
      {
        label: 'Biographical',
        value: 239,
        category: 'Theme-Other',
      },
      {
        label: 'Body Horror',
        value: 639,
        category: 'Theme-Other',
      },
      {
        label: 'Cannibalism',
        value: 870,
        category: 'Theme-Other',
      },
      {
        label: 'Chibi',
        value: 324,
        category: 'Theme-Other',
      },
      {
        label: 'Cosmic Horror',
        value: 636,
        category: 'Theme-Other',
      },
      {
        label: 'Crime',
        value: 648,
        category: 'Theme-Other',
      },
      {
        label: 'Crossover',
        value: 158,
        category: 'Theme-Other',
      },
      {
        label: 'Death Game',
        value: 615,
        category: 'Theme-Other',
      },
      {
        label: 'Denpa',
        value: 654,
        category: 'Theme-Other',
      },
      {
        label: 'Drugs',
        value: 489,
        category: 'Theme-Other',
      },
      {
        label: 'Economics',
        value: 248,
        category: 'Theme-Other',
      },
      {
        label: 'Educational',
        value: 140,
        category: 'Theme-Other',
      },
      {
        label: 'Environmental',
        value: 342,
        category: 'Theme-Other',
      },
      {
        label: 'Ero Guro',
        value: 482,
        category: 'Theme-Other',
      },
      {
        label: 'Gambling',
        value: 91,
        category: 'Theme-Other',
      },
      {
        label: 'Gender Bending',
        value: 77,
        category: 'Theme-Other',
      },
      {
        label: 'Gore',
        value: 94,
        category: 'Theme-Other',
      },
      {
        label: 'LGBTQ+ Themes',
        value: 483,
        category: 'Theme-Other',
      },
      {
        label: 'Lost Civilization',
        value: 466,
        category: 'Theme-Other',
      },
      {
        label: 'Medicine',
        value: 659,
        category: 'Theme-Other',
      },
      {
        label: 'Memory Manipulation',
        value: 365,
        category: 'Theme-Other',
      },
      {
        label: 'Meta',
        value: 144,
        category: 'Theme-Other',
      },
      {
        label: 'Noir',
        value: 327,
        category: 'Theme-Other',
      },
      {
        label: 'Otaku Culture',
        value: 97,
        category: 'Theme-Other',
      },
      {
        label: 'Pandemic',
        value: 874,
        category: 'Theme-Other',
      },
      {
        label: 'Philosophy',
        value: 391,
        category: 'Theme-Other',
      },
      {
        label: 'Politics',
        value: 103,
        category: 'Theme-Other',
      },
      {
        label: 'Reincarnation',
        value: 243,
        category: 'Theme-Other',
      },
      {
        label: 'Slavery',
        value: 247,
        category: 'Theme-Other',
      },
      {
        label: 'Software Development',
        value: 386,
        category: 'Theme-Other',
      },
      {
        label: 'Survival',
        value: 143,
        category: 'Theme-Other',
      },
      {
        label: 'Terrorism',
        value: 285,
        category: 'Theme-Other',
      },
      {
        label: 'War',
        value: 111,
        category: 'Theme-Other',
      },
    ],
  },
  {
    label: 'Cast-Main Cast',
    options: [
      {
        label: 'Anti-Hero',
        value: 104,
        category: 'Cast-Main Cast',
      },
      {
        label: 'Ensemble Cast',
        value: 105,
        category: 'Cast-Main Cast',
      },
      {
        label: 'Female Protagonist',
        value: 98,
        category: 'Cast-Main Cast',
      },
      {
        label: 'Male Protagonist',
        value: 82,
        category: 'Cast-Main Cast',
      },
      {
        label: 'Office Lady',
        value: 653,
        category: 'Cast-Main Cast',
      },
      {
        label: 'Primarily Adult Cast',
        value: 109,
        category: 'Cast-Main Cast',
      },
      {
        label: 'Primarily Child Cast',
        value: 446,
        category: 'Cast-Main Cast',
      },
      {
        label: 'Primarily Female Cast',
        value: 86,
        category: 'Cast-Main Cast',
      },
      {
        label: 'Primarily Male Cast',
        value: 88,
        category: 'Cast-Main Cast',
      },
      {
        label: 'Villainess',
        value: 857,
        category: 'Cast-Main Cast',
      },
    ],
  },
  {
    label: 'Theme-Action',
    options: [
      {
        label: 'Archery',
        value: 251,
        category: 'Theme-Action',
      },
      {
        label: 'Battle Royale',
        value: 101,
        category: 'Theme-Action',
      },
      {
        label: 'Espionage',
        value: 310,
        category: 'Theme-Action',
      },
      {
        label: 'Fugitive',
        value: 226,
        category: 'Theme-Action',
      },
      {
        label: 'Guns',
        value: 157,
        category: 'Theme-Action',
      },
      {
        label: 'Martial Arts',
        value: 30,
        category: 'Theme-Action',
      },
      {
        label: 'Swordplay',
        value: 43,
        category: 'Theme-Action',
      },
    ],
  },
  {
    label: 'Theme-Other-Organisations',
    options: [
      {
        label: 'Assassins',
        value: 322,
        category: 'Theme-Other-Organisations',
      },
      {
        label: 'Cult',
        value: 586,
        category: 'Theme-Other-Organisations',
      },
      {
        label: 'Firefighters',
        value: 613,
        category: 'Theme-Other-Organisations',
      },
      {
        label: 'Gangs',
        value: 106,
        category: 'Theme-Other-Organisations',
      },
      {
        label: 'Mafia',
        value: 107,
        category: 'Theme-Other-Organisations',
      },
      {
        label: 'Military',
        value: 34,
        category: 'Theme-Other-Organisations',
      },
      {
        label: 'Police',
        value: 40,
        category: 'Theme-Other-Organisations',
      },
      {
        label: 'Triads',
        value: 214,
        category: 'Theme-Other-Organisations',
      },
      {
        label: 'Yakuza',
        value: 199,
        category: 'Theme-Other-Organisations',
      },
    ],
  },
  {
    label: 'Theme-Other-Vehicle',
    options: [
      {
        label: 'Aviation',
        value: 355,
        category: 'Theme-Other-Vehicle',
      },
      {
        label: 'Cars',
        value: 10,
        category: 'Theme-Other-Vehicle',
      },
      {
        label: 'Mopeds',
        value: 176,
        category: 'Theme-Other-Vehicle',
      },
      {
        label: 'Motorcycles',
        value: 173,
        category: 'Theme-Other-Vehicle',
      },
      {
        label: 'Ships',
        value: 305,
        category: 'Theme-Other-Vehicle',
      },
      {
        label: 'Tanks',
        value: 174,
        category: 'Theme-Other-Vehicle',
      },
      {
        label: 'Trains',
        value: 122,
        category: 'Theme-Other-Vehicle',
      },
    ],
  },
  {
    label: 'Theme-Arts-Music',
    options: [
      {
        label: 'Band',
        value: 110,
        category: 'Theme-Arts-Music',
      },
      {
        label: 'Dancing',
        value: 209,
        category: 'Theme-Arts-Music',
      },
      {
        label: 'Musical',
        value: 265,
        category: 'Theme-Arts-Music',
      },
    ],
  },
  {
    label: 'Setting-Scene',
    options: [
      {
        label: 'Bar',
        value: 161,
        category: 'Setting-Scene',
      },
      {
        label: 'Circus',
        value: 476,
        category: 'Setting-Scene',
      },
      {
        label: 'College',
        value: 404,
        category: 'Setting-Scene',
      },
      {
        label: 'Dungeon',
        value: 604,
        category: 'Setting-Scene',
      },
      {
        label: 'Foreign',
        value: 198,
        category: 'Setting-Scene',
      },
      {
        label: 'Language Barrier',
        value: 516,
        category: 'Setting-Scene',
      },
      {
        label: 'Outdoor',
        value: 262,
        category: 'Setting-Scene',
      },
      {
        label: 'Rural',
        value: 250,
        category: 'Setting-Scene',
      },
      {
        label: 'School',
        value: 46,
        category: 'Setting-Scene',
      },
      {
        label: 'School Club',
        value: 84,
        category: 'Setting-Scene',
      },
      {
        label: 'Urban',
        value: 595,
        category: 'Setting-Scene',
      },
      {
        label: 'Work',
        value: 145,
        category: 'Setting-Scene',
      },
    ],
  },
  {
    label: 'Theme-Fantasy',
    options: [
      {
        label: 'Body Swapping',
        value: 154,
        category: 'Theme-Fantasy',
      },
      {
        label: 'Cultivation',
        value: 326,
        category: 'Theme-Fantasy',
      },
      {
        label: 'Fairy Tale',
        value: 400,
        category: 'Theme-Fantasy',
      },
      {
        label: 'Henshin',
        value: 99,
        category: 'Theme-Fantasy',
      },
      {
        label: 'Isekai',
        value: 244,
        category: 'Theme-Fantasy',
      },
      {
        label: 'Kaiju',
        value: 276,
        category: 'Theme-Fantasy',
      },
      {
        label: 'Magic',
        value: 29,
        category: 'Theme-Fantasy',
      },
      {
        label: 'Mythology',
        value: 208,
        category: 'Theme-Fantasy',
      },
      {
        label: 'Shapeshifting',
        value: 772,
        category: 'Theme-Fantasy',
      },
      {
        label: 'Steampunk',
        value: 95,
        category: 'Theme-Fantasy',
      },
      {
        label: 'Super Power',
        value: 66,
        category: 'Theme-Fantasy',
      },
      {
        label: 'Superhero',
        value: 172,
        category: 'Theme-Fantasy',
      },
      {
        label: 'Wuxia',
        value: 303,
        category: 'Theme-Fantasy',
      },
      {
        label: 'Youkai',
        value: 233,
        category: 'Theme-Fantasy',
      },
    ],
  },
  {
    label: 'Theme-Drama',
    options: [
      {
        label: 'Bullying',
        value: 171,
        category: 'Theme-Drama',
      },
      {
        label: 'Coming of Age',
        value: 102,
        category: 'Theme-Drama',
      },
      {
        label: 'Conspiracy',
        value: 456,
        category: 'Theme-Drama',
      },
      {
        label: 'Rehabilitation',
        value: 311,
        category: 'Theme-Drama',
      },
      {
        label: 'Revenge',
        value: 252,
        category: 'Theme-Drama',
      },
      {
        label: 'Tragedy',
        value: 85,
        category: 'Theme-Drama',
      },
    ],
  },
  {
    label: 'Theme-Game-Card & Board Game',
    options: [
      {
        label: 'Card Battle',
        value: 178,
        category: 'Theme-Game-Card & Board Game',
      },
      {
        label: 'Go',
        value: 443,
        category: 'Theme-Game-Card & Board Game',
      },
      {
        label: 'Karuta',
        value: 182,
        category: 'Theme-Game-Card & Board Game',
      },
      {
        label: 'Mahjong',
        value: 117,
        category: 'Theme-Game-Card & Board Game',
      },
      {
        label: 'Poker',
        value: 183,
        category: 'Theme-Game-Card & Board Game',
      },
      {
        label: 'Shogi',
        value: 121,
        category: 'Theme-Game-Card & Board Game',
      },
    ],
  },
  {
    label: 'Theme-Slice of Life',
    options: [
      {
        label: 'Cute Girls Doing Cute Things',
        value: 92,
        category: 'Theme-Slice of Life',
      },
      {
        label: 'Family Life',
        value: 87,
        category: 'Theme-Slice of Life',
      },
      {
        label: 'Iyashikei',
        value: 81,
        category: 'Theme-Slice of Life',
      },
    ],
  },
  {
    label: 'Theme-Sci-Fi',
    options: [
      {
        label: 'Cyberpunk',
        value: 108,
        category: 'Theme-Sci-Fi',
      },
      {
        label: 'Space Opera',
        value: 162,
        category: 'Theme-Sci-Fi',
      },
      {
        label: 'Time Manipulation',
        value: 96,
        category: 'Theme-Sci-Fi',
      },
      {
        label: 'Tokusatsu',
        value: 513,
        category: 'Theme-Sci-Fi',
      },
    ],
  },
  {
    label: 'Demographic',
    options: [
      {
        label: 'Josei',
        value: 27,
        category: 'Demographic',
      },
      {
        label: 'Kvalues',
        value: 28,
        category: 'Demographic',
      },
      {
        label: 'Seinen',
        value: 50,
        category: 'Demographic',
      },
      {
        label: 'Shoujo',
        value: 53,
        category: 'Demographic',
      },
      {
        label: 'Shounen',
        value: 56,
        category: 'Demographic',
      },
    ],
  },
  {
    label: 'Theme-Comedy',
    options: [
      {
        label: 'Parody',
        value: 39,
        category: 'Theme-Comedy',
      },
      {
        label: 'Satire',
        value: 80,
        category: 'Theme-Comedy',
      },
      {
        label: 'Slapstick',
        value: 83,
        category: 'Theme-Comedy',
      },
      {
        label: 'Surreal Comedy',
        value: 281,
        category: 'Theme-Comedy',
      },
    ],
  },
  {
    label: 'Theme-Sci-Fi-Mecha',
    options: [
      {
        label: 'Real Robot',
        value: 160,
        category: 'Theme-Sci-Fi-Mecha',
      },
      {
        label: 'Super Robot',
        value: 159,
        category: 'Theme-Sci-Fi-Mecha',
      },
    ],
  },
  {
    label: 'Theme-Game',
    options: [
      {
        label: 'Vvalueeo Games',
        value: 308,
        category: 'Theme-Game',
      },
    ],
  },
];

const NSFWTags = [
  {
    label: 'Genres',
    options: [
      {
        label: 'Action',
        value: 'Action',
        category: 'Genres',
      },
      {
        label: 'Adventure',
        value: 'Adventure',
        category: 'Genres',
      },
      {
        label: 'Comedy',
        value: 'Comedy',
        category: 'Genres',
      },
      {
        label: 'Drama',
        value: 'Drama',
        category: 'Genres',
      },
      {
        label: 'Ecchi',
        value: 'Ecchi',
        category: 'Genres',
      },
      {
        label: 'Fantasy',
        value: 'Fantasy',
        category: 'Genres',
      },
      {
        label: 'Hentai',
        value: 'Hentai',
        category: 'Genres',
      },
      {
        label: 'Horror',
        value: 'Horror',
        category: 'Genres',
      },
      {
        label: 'Mahou Shoujo',
        value: 'Mahou Shoujo',
        category: 'Genres',
      },
      {
        label: 'Mecha',
        value: 'Mecha',
        category: 'Genres',
      },
      {
        label: 'Music',
        value: 'Music',
        category: 'Genres',
      },
      {
        label: 'Mystery',
        value: 'Mystery',
        category: 'Genres',
      },
      {
        label: 'Psychological',
        value: 'Psychological',
        category: 'Genres',
      },
      {
        label: 'Romance',
        value: 'Romance',
        category: 'Genres',
      },
      {
        label: 'Sci-Fi',
        value: 'Sci-Fi',
        category: 'Genres',
      },
      {
        label: 'Slice of Life',
        value: 'Slice of Life',
        category: 'Genres',
      },
      {
        label: 'Sports',
        value: 'Sports',
        category: 'Genres',
      },
      {
        label: 'Supernatural',
        value: 'Supernatural',
        category: 'Genres',
      },
      {
        label: 'Thriller',
        value: 'Thriller',
        category: 'Genres',
      },
    ],
  },
  {
    label: 'Technical',
    options: [
      {
        label: '4-koma',
        value: 206,
        category: 'Technical',
      },
      {
        label: 'Achromatic',
        value: 710,
        category: 'Technical',
      },
      {
        label: 'Advertisement',
        value: 505,
        category: 'Technical',
      },
      {
        label: 'Anthology',
        value: 471,
        category: 'Technical',
      },
      {
        label: 'CGI',
        value: 90,
        category: 'Technical',
      },
      {
        label: 'Episodic',
        value: 193,
        category: 'Technical',
      },
      {
        label: 'Flash',
        value: 242,
        category: 'Technical',
      },
      {
        label: 'Full CGI',
        value: 89,
        category: 'Technical',
      },
      {
        label: 'Full Color',
        value: 207,
        category: 'Technical',
      },
      {
        label: 'No Dialogue',
        value: 341,
        category: 'Technical',
      },
      {
        label: 'POV',
        value: 215,
        category: 'Technical',
      },
      {
        label: 'Puppetry',
        value: 325,
        category: 'Technical',
      },
      {
        label: 'Rotoscoping',
        value: 683,
        category: 'Technical',
      },
      {
        label: 'Stop Motion',
        value: 323,
        category: 'Technical',
      },
    ],
  },
  {
    label: 'Setting-Time',
    options: [
      {
        label: 'Achronological Order',
        value: 156,
        category: 'Setting-Time',
      },
      {
        label: 'Anachronism',
        value: 490,
        category: 'Setting-Time',
      },
      {
        label: 'Dystopian',
        value: 217,
        category: 'Setting-Time',
      },
      {
        label: 'Historical',
        value: 25,
        category: 'Setting-Time',
      },
      {
        label: 'Time Skip',
        value: 153,
        category: 'Setting-Time',
      },
    ],
  },
  {
    label: 'Theme-Arts',
    options: [
      {
        label: 'Acting',
        value: 548,
        category: 'Theme-Arts',
      },
      {
        label: 'Calligraphy',
        value: 204,
        category: 'Theme-Arts',
      },
      {
        label: 'Classic Literature',
        value: 227,
        category: 'Theme-Arts',
      },
      {
        label: 'Drawing',
        value: 118,
        category: 'Theme-Arts',
      },
      {
        label: 'Fashion',
        value: 410,
        category: 'Theme-Arts',
      },
      {
        label: 'Food',
        value: 142,
        category: 'Theme-Arts',
      },
      {
        label: 'Photography',
        value: 195,
        category: 'Theme-Arts',
      },
      {
        label: 'Rakugo',
        value: 481,
        category: 'Theme-Arts',
      },
      {
        label: 'Writing',
        value: 394,
        category: 'Theme-Arts',
      },
    ],
  },
  {
    label: 'Setting-Universe',
    options: [
      {
        label: 'Afterlife',
        value: 147,
        category: 'Setting-Universe',
      },
      {
        label: 'Alternate Universe',
        value: 146,
        category: 'Setting-Universe',
      },
      {
        label: 'Augmented Reality',
        value: 364,
        category: 'Setting-Universe',
      },
      {
        label: 'Omegaverse',
        value: 533,
        category: 'Setting-Universe',
      },
      {
        label: 'Post-Apocalyptic',
        value: 93,
        category: 'Setting-Universe',
      },
      {
        label: 'Space',
        value: 63,
        category: 'Setting-Universe',
      },
      {
        label: 'Urban Fantasy',
        value: 321,
        category: 'Setting-Universe',
      },
      {
        label: 'Virtual World',
        value: 112,
        category: 'Setting-Universe',
      },
    ],
  },
  {
    label: 'Theme-Romance',
    options: [
      {
        label: 'Age Gap',
        value: 138,
        category: 'Theme-Romance',
      },
      {
        label: 'Bisexual',
        value: 294,
        category: 'Theme-Romance',
      },
      {
        label: "Boys' Love",
        value: 75,
        category: 'Theme-Romance',
      },
      {
        label: 'Harem',
        value: 23,
        category: 'Theme-Romance',
      },
      {
        label: 'Love Triangle',
        value: 139,
        category: 'Theme-Romance',
      },
      {
        label: 'Reverse Harem',
        value: 123,
        category: 'Theme-Romance',
      },
      {
        label: "Teens' Love",
        value: 649,
        category: 'Theme-Romance',
      },
      {
        label: 'Yuri',
        value: 76,
        category: 'Theme-Romance',
      },
    ],
  },
  {
    label: 'Cast-Traits',
    options: [
      {
        label: 'Age Regression',
        value: 488,
        category: 'Cast-Traits',
      },
      {
        label: 'Agender',
        value: 334,
        category: 'Cast-Traits',
      },
      {
        label: 'Aliens',
        value: 191,
        category: 'Cast-Traits',
      },
      {
        label: 'Amnesia',
        value: 240,
        category: 'Cast-Traits',
      },
      {
        label: 'Artificial Intelligence',
        value: 517,
        category: 'Cast-Traits',
      },
      {
        label: 'Asexual',
        value: 622,
        category: 'Cast-Traits',
      },
      {
        label: 'Butler',
        value: 812,
        category: 'Cast-Traits',
      },
      {
        label: 'Centaur',
        value: 632,
        category: 'Cast-Traits',
      },
      {
        label: 'Chimera',
        value: 774,
        category: 'Cast-Traits',
      },
      {
        label: 'Chuunibyou',
        value: 267,
        category: 'Cast-Traits',
      },
      {
        label: 'Cosplay',
        value: 328,
        category: 'Cast-Traits',
      },
      {
        label: 'Crossdressing',
        value: 186,
        category: 'Cast-Traits',
      },
      {
        label: 'Delinquents',
        value: 395,
        category: 'Cast-Traits',
      },
      {
        label: 'Demons',
        value: 15,
        category: 'Cast-Traits',
      },
      {
        label: 'Detective',
        value: 694,
        category: 'Cast-Traits',
      },
      {
        label: 'Dinosaurs',
        value: 704,
        category: 'Cast-Traits',
      },
      {
        label: 'Dissociative valueentities',
        value: 536,
        category: 'Cast-Traits',
      },
      {
        label: 'Dragons',
        value: 224,
        category: 'Cast-Traits',
      },
      {
        label: 'Dullahan',
        value: 658,
        category: 'Cast-Traits',
      },
      {
        label: 'Elf',
        value: 598,
        category: 'Cast-Traits',
      },
      {
        label: 'Ghost',
        value: 220,
        category: 'Cast-Traits',
      },
      {
        label: 'Goblin',
        value: 480,
        category: 'Cast-Traits',
      },
      {
        label: 'Gods',
        value: 253,
        category: 'Cast-Traits',
      },
      {
        label: 'Gyaru',
        value: 356,
        category: 'Cast-Traits',
      },
      {
        label: 'Hikikomori',
        value: 282,
        category: 'Cast-Traits',
      },
      {
        label: 'valueol',
        value: 115,
        category: 'Cast-Traits',
      },
      {
        label: 'Kemonomimi',
        value: 254,
        category: 'Cast-Traits',
      },
      {
        label: 'Kuudere',
        value: 779,
        category: 'Cast-Traits',
      },
      {
        label: 'Mavalues',
        value: 249,
        category: 'Cast-Traits',
      },
      {
        label: 'Mermavalue',
        value: 558,
        category: 'Cast-Traits',
      },
      {
        label: 'Monster Girl',
        value: 259,
        category: 'Cast-Traits',
      },
      {
        label: 'Nekomimi',
        value: 113,
        category: 'Cast-Traits',
      },
      {
        label: 'Ninja',
        value: 255,
        category: 'Cast-Traits',
      },
      {
        label: 'Nudity',
        value: 100,
        category: 'Cast-Traits',
      },
      {
        label: 'Nun',
        value: 614,
        category: 'Cast-Traits',
      },
      {
        label: 'Oiran',
        value: 593,
        category: 'Cast-Traits',
      },
      {
        label: 'Ojou-sama',
        value: 780,
        category: 'Cast-Traits',
      },
      {
        label: 'Pirates',
        value: 201,
        category: 'Cast-Traits',
      },
      {
        label: 'Robots',
        value: 175,
        category: 'Cast-Traits',
      },
      {
        label: 'Samurai',
        value: 291,
        category: 'Cast-Traits',
      },
      {
        label: 'Shrine Mavalueen',
        value: 468,
        category: 'Cast-Traits',
      },
      {
        label: 'Skeleton',
        value: 499,
        category: 'Cast-Traits',
      },
      {
        label: 'Succubus',
        value: 665,
        category: 'Cast-Traits',
      },
      {
        label: 'Tanned Skin',
        value: 335,
        category: 'Cast-Traits',
      },
      {
        label: 'Teacher',
        value: 165,
        category: 'Cast-Traits',
      },
      {
        label: 'Tsundere',
        value: 164,
        category: 'Cast-Traits',
      },
      {
        label: 'Twins',
        value: 494,
        category: 'Cast-Traits',
      },
      {
        label: 'Vampire',
        value: 74,
        category: 'Cast-Traits',
      },
      {
        label: 'Vikings',
        value: 618,
        category: 'Cast-Traits',
      },
      {
        label: 'Werewolf',
        value: 534,
        category: 'Cast-Traits',
      },
      {
        label: 'Witch',
        value: 179,
        category: 'Cast-Traits',
      },
      {
        label: 'Yandere',
        value: 163,
        category: 'Cast-Traits',
      },
      {
        label: 'Zombie',
        value: 152,
        category: 'Cast-Traits',
      },
    ],
  },
  {
    label: 'Sexual Content',
    options: [
      {
        label: 'Ahegao',
        value: 279,
        category: 'Sexual Content',
      },
      {
        label: 'Amputation',
        value: 652,
        category: 'Sexual Content',
      },
      {
        label: 'Anal Sex',
        value: 185,
        category: 'Sexual Content',
      },
      {
        label: 'Armpits',
        value: 629,
        category: 'Sexual Content',
      },
      {
        label: 'Ashikoki',
        value: 315,
        category: 'Sexual Content',
      },
      {
        label: 'Asphyxiation',
        value: 651,
        category: 'Sexual Content',
      },
      {
        label: 'Blackmail',
        value: 309,
        category: 'Sexual Content',
      },
      {
        label: 'Bondage',
        value: 246,
        category: 'Sexual Content',
      },
      {
        label: 'Boobjob',
        value: 126,
        category: 'Sexual Content',
      },
      {
        label: 'Cunnilingus',
        value: 135,
        category: 'Sexual Content',
      },
      {
        label: 'Defloration',
        value: 129,
        category: 'Sexual Content',
      },
      {
        label: 'Exhibitionism',
        value: 901,
        category: 'Sexual Content',
      },
      {
        label: 'Facial',
        value: 130,
        category: 'Sexual Content',
      },
      {
        label: 'Feet',
        value: 631,
        category: 'Sexual Content',
      },
      {
        label: 'Fellatio',
        value: 134,
        category: 'Sexual Content',
      },
      {
        label: 'Flat Chest',
        value: 136,
        category: 'Sexual Content',
      },
      {
        label: 'Futanari',
        value: 188,
        category: 'Sexual Content',
      },
      {
        label: 'Group Sex',
        value: 830,
        category: 'Sexual Content',
      },
      {
        label: 'Handjob',
        value: 317,
        category: 'Sexual Content',
      },
      {
        label: 'Human Pet',
        value: 181,
        category: 'Sexual Content',
      },
      {
        label: 'Incest',
        value: 128,
        category: 'Sexual Content',
      },
      {
        label: 'Irrumatio',
        value: 359,
        category: 'Sexual Content',
      },
      {
        label: 'Lactation',
        value: 650,
        category: 'Sexual Content',
      },
      {
        label: 'Large Breasts',
        value: 137,
        category: 'Sexual Content',
      },
      {
        label: 'Masturbation',
        value: 131,
        category: 'Sexual Content',
      },
      {
        label: 'MILF',
        value: 187,
        category: 'Sexual Content',
      },
      {
        label: 'Nakadashi',
        value: 125,
        category: 'Sexual Content',
      },
      {
        label: 'Netorare',
        value: 124,
        category: 'Sexual Content',
      },
      {
        label: 'Netorase',
        value: 280,
        category: 'Sexual Content',
      },
      {
        label: 'Netori',
        value: 316,
        category: 'Sexual Content',
      },
      {
        label: 'Pregnant',
        value: 397,
        category: 'Sexual Content',
      },
      {
        label: 'Prostitution',
        value: 190,
        category: 'Sexual Content',
      },
      {
        label: 'Public Sex',
        value: 127,
        category: 'Sexual Content',
      },
      {
        label: 'Rape',
        value: 155,
        category: 'Sexual Content',
      },
      {
        label: 'Rimjob',
        value: 845,
        category: 'Sexual Content',
      },
      {
        label: 'Sadism',
        value: 723,
        category: 'Sexual Content',
      },
      {
        label: 'Scat',
        value: 387,
        category: 'Sexual Content',
      },
      {
        label: 'Sex Toys',
        value: 133,
        category: 'Sexual Content',
      },
      {
        label: 'Sumata',
        value: 360,
        category: 'Sexual Content',
      },
      {
        label: 'Sweat',
        value: 630,
        category: 'Sexual Content',
      },
      {
        label: 'Tentacles',
        value: 189,
        category: 'Sexual Content',
      },
      {
        label: 'Threesome',
        value: 132,
        category: 'Sexual Content',
      },
      {
        label: 'Urination',
        value: 180,
        category: 'Sexual Content',
      },
      {
        label: 'Virginity',
        value: 380,
        category: 'Sexual Content',
      },
      {
        label: 'Vore',
        value: 624,
        category: 'Sexual Content',
      },
      {
        label: 'Voyeur',
        value: 318,
        category: 'Sexual Content',
      },
    ],
  },
  {
    label: 'Theme-Game-Sport',
    options: [
      {
        label: 'Airsoft',
        value: 167,
        category: 'Theme-Game-Sport',
      },
      {
        label: 'American Football',
        value: 314,
        category: 'Theme-Game-Sport',
      },
      {
        label: 'Athletics',
        value: 264,
        category: 'Theme-Game-Sport',
      },
      {
        label: 'Badminton',
        value: 235,
        category: 'Theme-Game-Sport',
      },
      {
        label: 'Baseball',
        value: 149,
        category: 'Theme-Game-Sport',
      },
      {
        label: 'Basketball',
        value: 192,
        category: 'Theme-Game-Sport',
      },
      {
        label: 'Boxing',
        value: 169,
        category: 'Theme-Game-Sport',
      },
      {
        label: 'Cheerleading',
        value: 646,
        category: 'Theme-Game-Sport',
      },
      {
        label: 'Cycling',
        value: 151,
        category: 'Theme-Game-Sport',
      },
      {
        label: 'Fishing',
        value: 212,
        category: 'Theme-Game-Sport',
      },
      {
        label: 'Fitness',
        value: 170,
        category: 'Theme-Game-Sport',
      },
      {
        label: 'Football',
        value: 148,
        category: 'Theme-Game-Sport',
      },
      {
        label: 'Golf',
        value: 532,
        category: 'Theme-Game-Sport',
      },
      {
        label: 'Ice Skating',
        value: 228,
        category: 'Theme-Game-Sport',
      },
      {
        label: 'Lacrosse',
        value: 437,
        category: 'Theme-Game-Sport',
      },
      {
        label: 'Rugby',
        value: 221,
        category: 'Theme-Game-Sport',
      },
      {
        label: 'Scuba Diving',
        value: 811,
        category: 'Theme-Game-Sport',
      },
      {
        label: 'Skateboarding',
        value: 809,
        category: 'Theme-Game-Sport',
      },
      {
        label: 'Surfing',
        value: 678,
        category: 'Theme-Game-Sport',
      },
      {
        label: 'Swimming',
        value: 150,
        category: 'Theme-Game-Sport',
      },
      {
        label: 'Table Tennis',
        value: 120,
        category: 'Theme-Game-Sport',
      },
      {
        label: 'Tennis',
        value: 194,
        category: 'Theme-Game-Sport',
      },
      {
        label: 'Volleyball',
        value: 116,
        category: 'Theme-Game-Sport',
      },
      {
        label: 'Wrestling',
        value: 231,
        category: 'Theme-Game-Sport',
      },
    ],
  },
  {
    label: 'Theme-Other',
    options: [
      {
        label: 'Animals',
        value: 433,
        category: 'Theme-Other',
      },
      {
        label: 'Astronomy',
        value: 623,
        category: 'Theme-Other',
      },
      {
        label: 'Autobiographical',
        value: 519,
        category: 'Theme-Other',
      },
      {
        label: 'Biographical',
        value: 239,
        category: 'Theme-Other',
      },
      {
        label: 'Body Horror',
        value: 639,
        category: 'Theme-Other',
      },
      {
        label: 'Cannibalism',
        value: 870,
        category: 'Theme-Other',
      },
      {
        label: 'Chibi',
        value: 324,
        category: 'Theme-Other',
      },
      {
        label: 'Cosmic Horror',
        value: 636,
        category: 'Theme-Other',
      },
      {
        label: 'Crime',
        value: 648,
        category: 'Theme-Other',
      },
      {
        label: 'Crossover',
        value: 158,
        category: 'Theme-Other',
      },
      {
        label: 'Death Game',
        value: 615,
        category: 'Theme-Other',
      },
      {
        label: 'Denpa',
        value: 654,
        category: 'Theme-Other',
      },
      {
        label: 'Drugs',
        value: 489,
        category: 'Theme-Other',
      },
      {
        label: 'Economics',
        value: 248,
        category: 'Theme-Other',
      },
      {
        label: 'Educational',
        value: 140,
        category: 'Theme-Other',
      },
      {
        label: 'Environmental',
        value: 342,
        category: 'Theme-Other',
      },
      {
        label: 'Ero Guro',
        value: 482,
        category: 'Theme-Other',
      },
      {
        label: 'Gambling',
        value: 91,
        category: 'Theme-Other',
      },
      {
        label: 'Gender Bending',
        value: 77,
        category: 'Theme-Other',
      },
      {
        label: 'Gore',
        value: 94,
        category: 'Theme-Other',
      },
      {
        label: 'LGBTQ+ Themes',
        value: 483,
        category: 'Theme-Other',
      },
      {
        label: 'Lost Civilization',
        value: 466,
        category: 'Theme-Other',
      },
      {
        label: 'Medicine',
        value: 659,
        category: 'Theme-Other',
      },
      {
        label: 'Memory Manipulation',
        value: 365,
        category: 'Theme-Other',
      },
      {
        label: 'Meta',
        value: 144,
        category: 'Theme-Other',
      },
      {
        label: 'Noir',
        value: 327,
        category: 'Theme-Other',
      },
      {
        label: 'Otaku Culture',
        value: 97,
        category: 'Theme-Other',
      },
      {
        label: 'Pandemic',
        value: 874,
        category: 'Theme-Other',
      },
      {
        label: 'Philosophy',
        value: 391,
        category: 'Theme-Other',
      },
      {
        label: 'Politics',
        value: 103,
        category: 'Theme-Other',
      },
      {
        label: 'Reincarnation',
        value: 243,
        category: 'Theme-Other',
      },
      {
        label: 'Slavery',
        value: 247,
        category: 'Theme-Other',
      },
      {
        label: 'Software Development',
        value: 386,
        category: 'Theme-Other',
      },
      {
        label: 'Survival',
        value: 143,
        category: 'Theme-Other',
      },
      {
        label: 'Terrorism',
        value: 285,
        category: 'Theme-Other',
      },
      {
        label: 'War',
        value: 111,
        category: 'Theme-Other',
      },
    ],
  },
  {
    label: 'Cast-Main Cast',
    options: [
      {
        label: 'Anti-Hero',
        value: 104,
        category: 'Cast-Main Cast',
      },
      {
        label: 'Ensemble Cast',
        value: 105,
        category: 'Cast-Main Cast',
      },
      {
        label: 'Female Protagonist',
        value: 98,
        category: 'Cast-Main Cast',
      },
      {
        label: 'Male Protagonist',
        value: 82,
        category: 'Cast-Main Cast',
      },
      {
        label: 'Office Lady',
        value: 653,
        category: 'Cast-Main Cast',
      },
      {
        label: 'Primarily Adult Cast',
        value: 109,
        category: 'Cast-Main Cast',
      },
      {
        label: 'Primarily Child Cast',
        value: 446,
        category: 'Cast-Main Cast',
      },
      {
        label: 'Primarily Female Cast',
        value: 86,
        category: 'Cast-Main Cast',
      },
      {
        label: 'Primarily Male Cast',
        value: 88,
        category: 'Cast-Main Cast',
      },
      {
        label: 'Villainess',
        value: 857,
        category: 'Cast-Main Cast',
      },
    ],
  },
  {
    label: 'Theme-Action',
    options: [
      {
        label: 'Archery',
        value: 251,
        category: 'Theme-Action',
      },
      {
        label: 'Battle Royale',
        value: 101,
        category: 'Theme-Action',
      },
      {
        label: 'Espionage',
        value: 310,
        category: 'Theme-Action',
      },
      {
        label: 'Fugitive',
        value: 226,
        category: 'Theme-Action',
      },
      {
        label: 'Guns',
        value: 157,
        category: 'Theme-Action',
      },
      {
        label: 'Martial Arts',
        value: 30,
        category: 'Theme-Action',
      },
      {
        label: 'Swordplay',
        value: 43,
        category: 'Theme-Action',
      },
    ],
  },
  {
    label: 'Theme-Other-Organisations',
    options: [
      {
        label: 'Assassins',
        value: 322,
        category: 'Theme-Other-Organisations',
      },
      {
        label: 'Cult',
        value: 586,
        category: 'Theme-Other-Organisations',
      },
      {
        label: 'Firefighters',
        value: 613,
        category: 'Theme-Other-Organisations',
      },
      {
        label: 'Gangs',
        value: 106,
        category: 'Theme-Other-Organisations',
      },
      {
        label: 'Mafia',
        value: 107,
        category: 'Theme-Other-Organisations',
      },
      {
        label: 'Military',
        value: 34,
        category: 'Theme-Other-Organisations',
      },
      {
        label: 'Police',
        value: 40,
        category: 'Theme-Other-Organisations',
      },
      {
        label: 'Triads',
        value: 214,
        category: 'Theme-Other-Organisations',
      },
      {
        label: 'Yakuza',
        value: 199,
        category: 'Theme-Other-Organisations',
      },
    ],
  },
  {
    label: 'Theme-Other-Vehicle',
    options: [
      {
        label: 'Aviation',
        value: 355,
        category: 'Theme-Other-Vehicle',
      },
      {
        label: 'Cars',
        value: 10,
        category: 'Theme-Other-Vehicle',
      },
      {
        label: 'Mopeds',
        value: 176,
        category: 'Theme-Other-Vehicle',
      },
      {
        label: 'Motorcycles',
        value: 173,
        category: 'Theme-Other-Vehicle',
      },
      {
        label: 'Ships',
        value: 305,
        category: 'Theme-Other-Vehicle',
      },
      {
        label: 'Tanks',
        value: 174,
        category: 'Theme-Other-Vehicle',
      },
      {
        label: 'Trains',
        value: 122,
        category: 'Theme-Other-Vehicle',
      },
    ],
  },
  {
    label: 'Theme-Arts-Music',
    options: [
      {
        label: 'Band',
        value: 110,
        category: 'Theme-Arts-Music',
      },
      {
        label: 'Dancing',
        value: 209,
        category: 'Theme-Arts-Music',
      },
      {
        label: 'Musical',
        value: 265,
        category: 'Theme-Arts-Music',
      },
    ],
  },
  {
    label: 'Setting-Scene',
    options: [
      {
        label: 'Bar',
        value: 161,
        category: 'Setting-Scene',
      },
      {
        label: 'Circus',
        value: 476,
        category: 'Setting-Scene',
      },
      {
        label: 'College',
        value: 404,
        category: 'Setting-Scene',
      },
      {
        label: 'Dungeon',
        value: 604,
        category: 'Setting-Scene',
      },
      {
        label: 'Foreign',
        value: 198,
        category: 'Setting-Scene',
      },
      {
        label: 'Language Barrier',
        value: 516,
        category: 'Setting-Scene',
      },
      {
        label: 'Outdoor',
        value: 262,
        category: 'Setting-Scene',
      },
      {
        label: 'Rural',
        value: 250,
        category: 'Setting-Scene',
      },
      {
        label: 'School',
        value: 46,
        category: 'Setting-Scene',
      },
      {
        label: 'School Club',
        value: 84,
        category: 'Setting-Scene',
      },
      {
        label: 'Urban',
        value: 595,
        category: 'Setting-Scene',
      },
      {
        label: 'Work',
        value: 145,
        category: 'Setting-Scene',
      },
    ],
  },
  {
    label: 'Theme-Fantasy',
    options: [
      {
        label: 'Body Swapping',
        value: 154,
        category: 'Theme-Fantasy',
      },
      {
        label: 'Cultivation',
        value: 326,
        category: 'Theme-Fantasy',
      },
      {
        label: 'Fairy Tale',
        value: 400,
        category: 'Theme-Fantasy',
      },
      {
        label: 'Henshin',
        value: 99,
        category: 'Theme-Fantasy',
      },
      {
        label: 'Isekai',
        value: 244,
        category: 'Theme-Fantasy',
      },
      {
        label: 'Kaiju',
        value: 276,
        category: 'Theme-Fantasy',
      },
      {
        label: 'Magic',
        value: 29,
        category: 'Theme-Fantasy',
      },
      {
        label: 'Mythology',
        value: 208,
        category: 'Theme-Fantasy',
      },
      {
        label: 'Shapeshifting',
        value: 772,
        category: 'Theme-Fantasy',
      },
      {
        label: 'Steampunk',
        value: 95,
        category: 'Theme-Fantasy',
      },
      {
        label: 'Super Power',
        value: 66,
        category: 'Theme-Fantasy',
      },
      {
        label: 'Superhero',
        value: 172,
        category: 'Theme-Fantasy',
      },
      {
        label: 'Wuxia',
        value: 303,
        category: 'Theme-Fantasy',
      },
      {
        label: 'Youkai',
        value: 233,
        category: 'Theme-Fantasy',
      },
    ],
  },
  {
    label: 'Theme-Drama',
    options: [
      {
        label: 'Bullying',
        value: 171,
        category: 'Theme-Drama',
      },
      {
        label: 'Coming of Age',
        value: 102,
        category: 'Theme-Drama',
      },
      {
        label: 'Conspiracy',
        value: 456,
        category: 'Theme-Drama',
      },
      {
        label: 'Rehabilitation',
        value: 311,
        category: 'Theme-Drama',
      },
      {
        label: 'Revenge',
        value: 252,
        category: 'Theme-Drama',
      },
      {
        label: 'Tragedy',
        value: 85,
        category: 'Theme-Drama',
      },
    ],
  },
  {
    label: 'Theme-Game-Card & Board Game',
    options: [
      {
        label: 'Card Battle',
        value: 178,
        category: 'Theme-Game-Card & Board Game',
      },
      {
        label: 'Go',
        value: 443,
        category: 'Theme-Game-Card & Board Game',
      },
      {
        label: 'Karuta',
        value: 182,
        category: 'Theme-Game-Card & Board Game',
      },
      {
        label: 'Mahjong',
        value: 117,
        category: 'Theme-Game-Card & Board Game',
      },
      {
        label: 'Poker',
        value: 183,
        category: 'Theme-Game-Card & Board Game',
      },
      {
        label: 'Shogi',
        value: 121,
        category: 'Theme-Game-Card & Board Game',
      },
    ],
  },
  {
    label: 'Theme-Slice of Life',
    options: [
      {
        label: 'Cute Girls Doing Cute Things',
        value: 92,
        category: 'Theme-Slice of Life',
      },
      {
        label: 'Family Life',
        value: 87,
        category: 'Theme-Slice of Life',
      },
      {
        label: 'Iyashikei',
        value: 81,
        category: 'Theme-Slice of Life',
      },
    ],
  },
  {
    label: 'Theme-Sci-Fi',
    options: [
      {
        label: 'Cyberpunk',
        value: 108,
        category: 'Theme-Sci-Fi',
      },
      {
        label: 'Space Opera',
        value: 162,
        category: 'Theme-Sci-Fi',
      },
      {
        label: 'Time Manipulation',
        value: 96,
        category: 'Theme-Sci-Fi',
      },
      {
        label: 'Tokusatsu',
        value: 513,
        category: 'Theme-Sci-Fi',
      },
    ],
  },
  {
    label: 'Demographic',
    options: [
      {
        label: 'Josei',
        value: 27,
        category: 'Demographic',
      },
      {
        label: 'Kvalues',
        value: 28,
        category: 'Demographic',
      },
      {
        label: 'Seinen',
        value: 50,
        category: 'Demographic',
      },
      {
        label: 'Shoujo',
        value: 53,
        category: 'Demographic',
      },
      {
        label: 'Shounen',
        value: 56,
        category: 'Demographic',
      },
    ],
  },
  {
    label: 'Theme-Comedy',
    options: [
      {
        label: 'Parody',
        value: 39,
        category: 'Theme-Comedy',
      },
      {
        label: 'Satire',
        value: 80,
        category: 'Theme-Comedy',
      },
      {
        label: 'Slapstick',
        value: 83,
        category: 'Theme-Comedy',
      },
      {
        label: 'Surreal Comedy',
        value: 281,
        category: 'Theme-Comedy',
      },
    ],
  },
  {
    label: 'Theme-Sci-Fi-Mecha',
    options: [
      {
        label: 'Real Robot',
        value: 160,
        category: 'Theme-Sci-Fi-Mecha',
      },
      {
        label: 'Super Robot',
        value: 159,
        category: 'Theme-Sci-Fi-Mecha',
      },
    ],
  },
  {
    label: 'Theme-Game',
    options: [
      {
        label: 'Vvalueeo Games',
        value: 308,
        category: 'Theme-Game',
      },
    ],
  },
];

export { safeTags, NSFWTags };
