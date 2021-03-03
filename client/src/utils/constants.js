const tagsList = [
    {
        category: 'Genres',
        tags: [
            { id: 'Action', name: 'Action' },
            { id: 'Adventure', name: 'Adventure' },
            { id: 'Comedy', name: 'Comedy' },
            { id: 'Drama', name: 'Drama' },
            { id: 'Ecchi', name: 'Ecchi' },
            { id: 'Fantasy', name: 'Fantasy' },
            { id: 'Hentai', name: 'Hentai' },
            { id: 'Horror', name: 'Horror' },
            { id: 'Mahou Shoujo', name: 'Mahou Shoujo' },
            { id: 'Mecha', name: 'Mecha' },
            { id: 'Music', name: 'Music' },
            { id: 'Mystery', name: 'Mystery' },
            { id: 'Psychological', name: 'Psychological' },
            { id: 'Romance', name: 'Romance' },
            { id: 'Sci-Fi', name: 'Sci-Fi' },
            { id: 'Slice of Life', name: 'Slice of Life' },
            { id: 'Sports', name: 'Sports' },
            { id: 'Supernatural', name: 'Supernatural' },
            { id: 'Thriller', name: 'Thriller' },
        ],
    },
    {
        category: 'Technical',
        tags: [
            {
                name: '4-koma',
                id: 206,
            },
            {
                name: 'Achromatic',
                id: 710,
            },
            {
                name: 'Advertisement',
                id: 505,
            },
            {
                name: 'Anthology',
                id: 471,
            },
            {
                name: 'CGI',
                id: 90,
            },
            {
                name: 'Episodic',
                id: 193,
            },
            {
                name: 'Flash',
                id: 242,
            },
            {
                name: 'Full CGI',
                id: 89,
            },
            {
                name: 'Full Color',
                id: 207,
            },
            {
                name: 'No Dialogue',
                id: 341,
            },
            {
                name: 'POV',
                id: 215,
            },
            {
                name: 'Puppetry',
                id: 325,
            },
            {
                name: 'Rotoscoping',
                id: 683,
            },
            {
                name: 'Stop Motion',
                id: 323,
            },
        ],
    },
    {
        category: 'Setting-Time',
        tags: [
            {
                name: 'Achronological Order',
                id: 156,
            },
            {
                name: 'Anachronism',
                id: 490,
            },
            {
                name: 'Dystopian',
                id: 217,
            },
            {
                name: 'Historical',
                id: 25,
            },
            {
                name: 'Time Skip',
                id: 153,
            },
        ],
    },
    {
        category: 'Theme-Arts',
        tags: [
            {
                name: 'Acting',
                id: 548,
            },
            {
                name: 'Calligraphy',
                id: 204,
            },
            {
                name: 'Classic Literature',
                id: 227,
            },
            {
                name: 'Drawing',
                id: 118,
            },
            {
                name: 'Fashion',
                id: 410,
            },
            {
                name: 'Food',
                id: 142,
            },
            {
                name: 'Photography',
                id: 195,
            },
            {
                name: 'Rakugo',
                id: 481,
            },
            {
                name: 'Writing',
                id: 394,
            },
        ],
    },
    {
        category: 'Setting-Universe',
        tags: [
            {
                name: 'Afterlife',
                id: 147,
            },
            {
                name: 'Alternate Universe',
                id: 146,
            },
            {
                name: 'Augmented Reality',
                id: 364,
            },
            {
                name: 'Omegaverse',
                id: 533,
            },
            {
                name: 'Post-Apocalyptic',
                id: 93,
            },
            {
                name: 'Space',
                id: 63,
            },
            {
                name: 'Urban Fantasy',
                id: 321,
            },
            {
                name: 'Virtual World',
                id: 112,
            },
        ],
    },
    {
        category: 'Theme-Romance',
        tags: [
            {
                name: 'Age Gap',
                id: 138,
            },
            {
                name: 'Bisexual',
                id: 294,
            },
            {
                name: "Boys' Love",
                id: 75,
            },
            {
                name: 'Harem',
                id: 23,
            },
            {
                name: 'Love Triangle',
                id: 139,
            },
            {
                name: 'Reverse Harem',
                id: 123,
            },
            {
                name: "Teens' Love",
                id: 649,
            },
            {
                name: 'Yuri',
                id: 76,
            },
        ],
    },
    {
        category: 'Cast-Traits',
        tags: [
            {
                name: 'Age Regression',
                id: 488,
            },
            {
                name: 'Agender',
                id: 334,
            },
            {
                name: 'Aliens',
                id: 191,
            },
            {
                name: 'Amnesia',
                id: 240,
            },
            {
                name: 'Artificial Intelligence',
                id: 517,
            },
            {
                name: 'Asexual',
                id: 622,
            },
            {
                name: 'Butler',
                id: 812,
            },
            {
                name: 'Centaur',
                id: 632,
            },
            {
                name: 'Chimera',
                id: 774,
            },
            {
                name: 'Chuunibyou',
                id: 267,
            },
            {
                name: 'Cosplay',
                id: 328,
            },
            {
                name: 'Crossdressing',
                id: 186,
            },
            {
                name: 'Delinquents',
                id: 395,
            },
            {
                name: 'Demons',
                id: 15,
            },
            {
                name: 'Detective',
                id: 694,
            },
            {
                name: 'Dinosaurs',
                id: 704,
            },
            {
                name: 'Dissociative Identities',
                id: 536,
            },
            {
                name: 'Dragons',
                id: 224,
            },
            {
                name: 'Dullahan',
                id: 658,
            },
            {
                name: 'Elf',
                id: 598,
            },
            {
                name: 'Ghost',
                id: 220,
            },
            {
                name: 'Goblin',
                id: 480,
            },
            {
                name: 'Gods',
                id: 253,
            },
            {
                name: 'Gyaru',
                id: 356,
            },
            {
                name: 'Hikikomori',
                id: 282,
            },
            {
                name: 'Idol',
                id: 115,
            },
            {
                name: 'Kemonomimi',
                id: 254,
            },
            {
                name: 'Kuudere',
                id: 779,
            },
            {
                name: 'Maids',
                id: 249,
            },
            {
                name: 'Mermaid',
                id: 558,
            },
            {
                name: 'Monster Girl',
                id: 259,
            },
            {
                name: 'Nekomimi',
                id: 113,
            },
            {
                name: 'Ninja',
                id: 255,
            },
            {
                name: 'Nudity',
                id: 100,
            },
            {
                name: 'Nun',
                id: 614,
            },
            {
                name: 'Oiran',
                id: 593,
            },
            {
                name: 'Ojou-sama',
                id: 780,
            },
            {
                name: 'Pirates',
                id: 201,
            },
            {
                name: 'Robots',
                id: 175,
            },
            {
                name: 'Samurai',
                id: 291,
            },
            {
                name: 'Shrine Maiden',
                id: 468,
            },
            {
                name: 'Skeleton',
                id: 499,
            },
            {
                name: 'Succubus',
                id: 665,
            },
            {
                name: 'Tanned Skin',
                id: 335,
            },
            {
                name: 'Teacher',
                id: 165,
            },
            {
                name: 'Tsundere',
                id: 164,
            },
            {
                name: 'Twins',
                id: 494,
            },
            {
                name: 'Vampire',
                id: 74,
            },
            {
                name: 'Vikings',
                id: 618,
            },
            {
                name: 'Werewolf',
                id: 534,
            },
            {
                name: 'Witch',
                id: 179,
            },
            {
                name: 'Yandere',
                id: 163,
            },
            {
                name: 'Zombie',
                id: 152,
            },
        ],
    },
    {
        category: 'Sexual Content',
        tags: [
            {
                name: 'Ahegao',
                id: 279,
            },
            {
                name: 'Amputation',
                id: 652,
            },
            {
                name: 'Anal Sex',
                id: 185,
            },
            {
                name: 'Armpits',
                id: 629,
            },
            {
                name: 'Ashikoki',
                id: 315,
            },
            {
                name: 'Asphyxiation',
                id: 651,
            },
            {
                name: 'Blackmail',
                id: 309,
            },
            {
                name: 'Bondage',
                id: 246,
            },
            {
                name: 'Boobjob',
                id: 126,
            },
            {
                name: 'Cunnilingus',
                id: 135,
            },
            {
                name: 'Defloration',
                id: 129,
            },
            {
                name: 'Exhibitionism',
                id: 901,
            },
            {
                name: 'Facial',
                id: 130,
            },
            {
                name: 'Feet',
                id: 631,
            },
            {
                name: 'Fellatio',
                id: 134,
            },
            {
                name: 'Flat Chest',
                id: 136,
            },
            {
                name: 'Futanari',
                id: 188,
            },
            {
                name: 'Group Sex',
                id: 830,
            },
            {
                name: 'Handjob',
                id: 317,
            },
            {
                name: 'Human Pet',
                id: 181,
            },
            {
                name: 'Incest',
                id: 128,
            },
            {
                name: 'Irrumatio',
                id: 359,
            },
            {
                name: 'Lactation',
                id: 650,
            },
            {
                name: 'Large Breasts',
                id: 137,
            },
            {
                name: 'Masturbation',
                id: 131,
            },
            {
                name: 'MILF',
                id: 187,
            },
            {
                name: 'Nakadashi',
                id: 125,
            },
            {
                name: 'Netorare',
                id: 124,
            },
            {
                name: 'Netorase',
                id: 280,
            },
            {
                name: 'Netori',
                id: 316,
            },
            {
                name: 'Pregnant',
                id: 397,
            },
            {
                name: 'Prostitution',
                id: 190,
            },
            {
                name: 'Public Sex',
                id: 127,
            },
            {
                name: 'Rape',
                id: 155,
            },
            {
                name: 'Rimjob',
                id: 845,
            },
            {
                name: 'Sadism',
                id: 723,
            },
            {
                name: 'Scat',
                id: 387,
            },
            {
                name: 'Sex Toys',
                id: 133,
            },
            {
                name: 'Sumata',
                id: 360,
            },
            {
                name: 'Sweat',
                id: 630,
            },
            {
                name: 'Tentacles',
                id: 189,
            },
            {
                name: 'Threesome',
                id: 132,
            },
            {
                name: 'Urination',
                id: 180,
            },
            {
                name: 'Virginity',
                id: 380,
            },
            {
                name: 'Vore',
                id: 624,
            },
            {
                name: 'Voyeur',
                id: 318,
            },
        ],
    },
    {
        category: 'Theme-Game-Sport',
        tags: [
            {
                name: 'Airsoft',
                id: 167,
            },
            {
                name: 'American Football',
                id: 314,
            },
            {
                name: 'Athletics',
                id: 264,
            },
            {
                name: 'Badminton',
                id: 235,
            },
            {
                name: 'Baseball',
                id: 149,
            },
            {
                name: 'Basketball',
                id: 192,
            },
            {
                name: 'Boxing',
                id: 169,
            },
            {
                name: 'Cheerleading',
                id: 646,
            },
            {
                name: 'Cycling',
                id: 151,
            },
            {
                name: 'Fishing',
                id: 212,
            },
            {
                name: 'Fitness',
                id: 170,
            },
            {
                name: 'Football',
                id: 148,
            },
            {
                name: 'Golf',
                id: 532,
            },
            {
                name: 'Ice Skating',
                id: 228,
            },
            {
                name: 'Lacrosse',
                id: 437,
            },
            {
                name: 'Rugby',
                id: 221,
            },
            {
                name: 'Scuba Diving',
                id: 811,
            },
            {
                name: 'Skateboarding',
                id: 809,
            },
            {
                name: 'Surfing',
                id: 678,
            },
            {
                name: 'Swimming',
                id: 150,
            },
            {
                name: 'Table Tennis',
                id: 120,
            },
            {
                name: 'Tennis',
                id: 194,
            },
            {
                name: 'Volleyball',
                id: 116,
            },
            {
                name: 'Wrestling',
                id: 231,
            },
        ],
    },
    {
        category: 'Theme-Other',
        tags: [
            {
                name: 'Animals',
                id: 433,
            },
            {
                name: 'Astronomy',
                id: 623,
            },
            {
                name: 'Autobiographical',
                id: 519,
            },
            {
                name: 'Biographical',
                id: 239,
            },
            {
                name: 'Body Horror',
                id: 639,
            },
            {
                name: 'Cannibalism',
                id: 870,
            },
            {
                name: 'Chibi',
                id: 324,
            },
            {
                name: 'Cosmic Horror',
                id: 636,
            },
            {
                name: 'Crime',
                id: 648,
            },
            {
                name: 'Crossover',
                id: 158,
            },
            {
                name: 'Death Game',
                id: 615,
            },
            {
                name: 'Denpa',
                id: 654,
            },
            {
                name: 'Drugs',
                id: 489,
            },
            {
                name: 'Economics',
                id: 248,
            },
            {
                name: 'Educational',
                id: 140,
            },
            {
                name: 'Environmental',
                id: 342,
            },
            {
                name: 'Ero Guro',
                id: 482,
            },
            {
                name: 'Gambling',
                id: 91,
            },
            {
                name: 'Gender Bending',
                id: 77,
            },
            {
                name: 'Gore',
                id: 94,
            },
            {
                name: 'LGBTQ+ Themes',
                id: 483,
            },
            {
                name: 'Lost Civilization',
                id: 466,
            },
            {
                name: 'Medicine',
                id: 659,
            },
            {
                name: 'Memory Manipulation',
                id: 365,
            },
            {
                name: 'Meta',
                id: 144,
            },
            {
                name: 'Noir',
                id: 327,
            },
            {
                name: 'Otaku Culture',
                id: 97,
            },
            {
                name: 'Pandemic',
                id: 874,
            },
            {
                name: 'Philosophy',
                id: 391,
            },
            {
                name: 'Politics',
                id: 103,
            },
            {
                name: 'Reincarnation',
                id: 243,
            },
            {
                name: 'Slavery',
                id: 247,
            },
            {
                name: 'Software Development',
                id: 386,
            },
            {
                name: 'Survival',
                id: 143,
            },
            {
                name: 'Terrorism',
                id: 285,
            },
            {
                name: 'War',
                id: 111,
            },
        ],
    },
    {
        category: 'Cast-Main Cast',
        tags: [
            {
                name: 'Anti-Hero',
                id: 104,
            },
            {
                name: 'Ensemble Cast',
                id: 105,
            },
            {
                name: 'Female Protagonist',
                id: 98,
            },
            {
                name: 'Male Protagonist',
                id: 82,
            },
            {
                name: 'Office Lady',
                id: 653,
            },
            {
                name: 'Primarily Adult Cast',
                id: 109,
            },
            {
                name: 'Primarily Child Cast',
                id: 446,
            },
            {
                name: 'Primarily Female Cast',
                id: 86,
            },
            {
                name: 'Primarily Male Cast',
                id: 88,
            },
            {
                name: 'Villainess',
                id: 857,
            },
        ],
    },
    {
        category: 'Theme-Action',
        tags: [
            {
                name: 'Archery',
                id: 251,
            },
            {
                name: 'Battle Royale',
                id: 101,
            },
            {
                name: 'Espionage',
                id: 310,
            },
            {
                name: 'Fugitive',
                id: 226,
            },
            {
                name: 'Guns',
                id: 157,
            },
            {
                name: 'Martial Arts',
                id: 30,
            },
            {
                name: 'Swordplay',
                id: 43,
            },
        ],
    },
    {
        category: 'Theme-Other-Organisations',
        tags: [
            {
                name: 'Assassins',
                id: 322,
            },
            {
                name: 'Cult',
                id: 586,
            },
            {
                name: 'Firefighters',
                id: 613,
            },
            {
                name: 'Gangs',
                id: 106,
            },
            {
                name: 'Mafia',
                id: 107,
            },
            {
                name: 'Military',
                id: 34,
            },
            {
                name: 'Police',
                id: 40,
            },
            {
                name: 'Triads',
                id: 214,
            },
            {
                name: 'Yakuza',
                id: 199,
            },
        ],
    },
    {
        category: 'Theme-Other-Vehicle',
        tags: [
            {
                name: 'Aviation',
                id: 355,
            },
            {
                name: 'Cars',
                id: 10,
            },
            {
                name: 'Mopeds',
                id: 176,
            },
            {
                name: 'Motorcycles',
                id: 173,
            },
            {
                name: 'Ships',
                id: 305,
            },
            {
                name: 'Tanks',
                id: 174,
            },
            {
                name: 'Trains',
                id: 122,
            },
        ],
    },
    {
        category: 'Theme-Arts-Music',
        tags: [
            {
                name: 'Band',
                id: 110,
            },
            {
                name: 'Dancing',
                id: 209,
            },
            {
                name: 'Musical',
                id: 265,
            },
        ],
    },
    {
        category: 'Setting-Scene',
        tags: [
            {
                name: 'Bar',
                id: 161,
            },
            {
                name: 'Circus',
                id: 476,
            },
            {
                name: 'College',
                id: 404,
            },
            {
                name: 'Dungeon',
                id: 604,
            },
            {
                name: 'Foreign',
                id: 198,
            },
            {
                name: 'Language Barrier',
                id: 516,
            },
            {
                name: 'Outdoor',
                id: 262,
            },
            {
                name: 'Rural',
                id: 250,
            },
            {
                name: 'School',
                id: 46,
            },
            {
                name: 'School Club',
                id: 84,
            },
            {
                name: 'Urban',
                id: 595,
            },
            {
                name: 'Work',
                id: 145,
            },
        ],
    },
    {
        category: 'Theme-Fantasy',
        tags: [
            {
                name: 'Body Swapping',
                id: 154,
            },
            {
                name: 'Cultivation',
                id: 326,
            },
            {
                name: 'Fairy Tale',
                id: 400,
            },
            {
                name: 'Henshin',
                id: 99,
            },
            {
                name: 'Isekai',
                id: 244,
            },
            {
                name: 'Kaiju',
                id: 276,
            },
            {
                name: 'Magic',
                id: 29,
            },
            {
                name: 'Mythology',
                id: 208,
            },
            {
                name: 'Shapeshifting',
                id: 772,
            },
            {
                name: 'Steampunk',
                id: 95,
            },
            {
                name: 'Super Power',
                id: 66,
            },
            {
                name: 'Superhero',
                id: 172,
            },
            {
                name: 'Wuxia',
                id: 303,
            },
            {
                name: 'Youkai',
                id: 233,
            },
        ],
    },
    {
        category: 'Theme-Drama',
        tags: [
            {
                name: 'Bullying',
                id: 171,
            },
            {
                name: 'Coming of Age',
                id: 102,
            },
            {
                name: 'Conspiracy',
                id: 456,
            },
            {
                name: 'Rehabilitation',
                id: 311,
            },
            {
                name: 'Revenge',
                id: 252,
            },
            {
                name: 'Tragedy',
                id: 85,
            },
        ],
    },
    {
        category: 'Theme-Game-Card & Board Game',
        tags: [
            {
                name: 'Card Battle',
                id: 178,
            },
            {
                name: 'Go',
                id: 443,
            },
            {
                name: 'Karuta',
                id: 182,
            },
            {
                name: 'Mahjong',
                id: 117,
            },
            {
                name: 'Poker',
                id: 183,
            },
            {
                name: 'Shogi',
                id: 121,
            },
        ],
    },
    {
        category: 'Theme-Slice of Life',
        tags: [
            {
                name: 'Cute Girls Doing Cute Things',
                id: 92,
            },
            {
                name: 'Family Life',
                id: 87,
            },
            {
                name: 'Iyashikei',
                id: 81,
            },
        ],
    },
    {
        category: 'Theme-Sci-Fi',
        tags: [
            {
                name: 'Cyberpunk',
                id: 108,
            },
            {
                name: 'Space Opera',
                id: 162,
            },
            {
                name: 'Time Manipulation',
                id: 96,
            },
            {
                name: 'Tokusatsu',
                id: 513,
            },
        ],
    },
    {
        category: 'Demographic',
        tags: [
            {
                name: 'Josei',
                id: 27,
            },
            {
                name: 'Kids',
                id: 28,
            },
            {
                name: 'Seinen',
                id: 50,
            },
            {
                name: 'Shoujo',
                id: 53,
            },
            {
                name: 'Shounen',
                id: 56,
            },
        ],
    },
    {
        category: 'Theme-Comedy',
        tags: [
            {
                name: 'Parody',
                id: 39,
            },
            {
                name: 'Satire',
                id: 80,
            },
            {
                name: 'Slapstick',
                id: 83,
            },
            {
                name: 'Surreal Comedy',
                id: 281,
            },
        ],
    },
    {
        category: 'Theme-Sci-Fi-Mecha',
        tags: [
            {
                name: 'Real Robot',
                id: 160,
            },
            {
                name: 'Super Robot',
                id: 159,
            },
        ],
    },
    {
        category: 'Theme-Game',
        tags: [
            {
                name: 'Video Games',
                id: 308,
            },
        ],
    },
];

export { tagsList };
