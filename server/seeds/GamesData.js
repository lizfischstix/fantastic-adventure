const { Games } = require('../models');

const gamesdata = [
    {
        "id": 540,
        "title": "Overwatch 2",
        "thumbnail": "https:\/\/www.freetogame.com\/g\/540\/thumbnail.jpg",
        "short_description": "A hero-focused first-person team shooter from Blizzard Entertainment.",
        "game_url": "https:\/\/www.freetogame.com\/open\/overwatch-2",
        "genre": "Shooter",
        "platform": "PC (Windows)",
        "developer": "Blizzard Entertainment"
    },
    {
        "id": 521,
        "title": "Diablo Immortal",
        "thumbnail": "https:\/\/www.freetogame.com\/g\/521\/thumbnail.jpg",
        "short_description": "Built for mobile and also released on PC, Diablo Immortal fills in the gaps between Diablo II and III in an MMOARPG environment.",
        "game_url": "https:\/\/www.freetogame.com\/open\/diablo-immortal",
        "genre": "MMOARPG",
        "platform": "PC (Windows)",
        "developer": "Blizzard Entertainment"
    },
    {
        "id": 517,
        "title": "Lost Ark",
        "thumbnail": "https:\/\/www.freetogame.com\/g\/517\/thumbnail.jpg",
        "short_description": "Smilegate’s free-to-play multiplayer ARPG is a massive adventure filled with lands waiting to be explored, people waiting to be met, and an ancient evil waiting to be destroyed.",
        "game_url": "https:\/\/www.freetogame.com\/open\/lost-ark",
        "genre": "ARPG",
        "platform": "PC (Windows)",
        "developer": "Smilegate RPG"
    },
    {
        "id": 516,
        "title": "PUBG: BATTLEGROUNDS",
        "thumbnail": "https:\/\/www.freetogame.com\/g\/516\/thumbnail.jpg",
        "short_description": "Get into the action in one of the longest running battle royale games PUBG Battlegrounds.",
        "game_url": "https:\/\/www.freetogame.com\/open\/pubg",
        "genre": "Shooter",
        "platform": "PC (Windows)",
        "developer": "KRAFTON, Inc."
    },
    {
        "id": 508,
        "title": "Enlisted",
        "thumbnail": "https:\/\/www.freetogame.com\/g\/508\/thumbnail.jpg",
        "short_description": "Get ready to command your own World War II military squad in Gaijin and Darkflow Software’s MMO squad-based shooter Enlisted. ",
        "game_url": "https:\/\/www.freetogame.com\/open\/enlisted",
        "genre": "Shooter",
        "platform": "PC (Windows)",
        "developer": "Darkflow Software"
    },
    {
        "id": 345,
        "title": "Forge of Empires",
        "thumbnail": "https:\/\/www.freetogame.com\/g\/345\/thumbnail.jpg",
        "short_description": "A free to play 2D browser-based online strategy game, become the leader and raise your city.",
        "game_url": "https:\/\/www.freetogame.com\/open\/forge-of-empires",
        "genre": "Strategy",
        "platform": "Web Browser",
        "developer": "InnoGames"
    },
    {
        "id": 427,
        "title": "Drakensang Online",
        "thumbnail": "https:\/\/www.freetogame.com\/g\/427\/thumbnail.jpg",
        "short_description": "A free to play browser-based top-down hack-and-slash 3D MMORPG similar to games in the Diablo series.",
        "game_url": "https:\/\/www.freetogame.com\/open\/drakensang-online",
        "genre": "MMORPG",
        "platform": "Web Browser",
        "developer": "Bigpoint"
    },
    {
        "id": 525,
        "title": "MultiVersus",
        "thumbnail": "https:\/\/www.freetogame.com\/g\/525\/thumbnail.jpg",
        "short_description": "The Warner Bros lineup meets Smash in Player First Games’ MultiVersus.",
        "game_url": "https:\/\/www.freetogame.com\/open\/multiversus",
        "genre": "Fighting",
        "platform": "PC (Windows)",
        "developer": "Player First Games"
    },
    {
        "id": 475,
        "title": "Genshin Impact",
        "thumbnail": "https:\/\/www.freetogame.com\/g\/475\/thumbnail.jpg",
        "short_description": "If you’ve been looking for a game to scratch that open-world action RPG itch, one with perhaps a bit of Asian flair, then you’re going to want to check out miHoYo’s Genshin Impact.",
        "game_url": "https:\/\/www.freetogame.com\/open\/genshin-impact",
        "genre": "ARPG",
        "platform": "PC (Windows)",
        "developer": "miHoYo"
    },
    {
        "id": 523,
        "title": "Fall Guys",
        "thumbnail": "https:\/\/www.freetogame.com\/g\/523\/thumbnail.jpg",
        "short_description": "Play the most competitive massively multiplayer party royale game featuring beans ever for free on a variety of platforms. ",
        "game_url": "https:\/\/www.freetogame.com\/open\/fall-guys",
        "genre": "Battle Royale",
        "platform": "PC (Windows)",
        "developer": "Mediatonic"
    },
    {
        "id": 340,
        "title": "Game Of Thrones Winter Is Coming",
        "thumbnail": "https:\/\/www.freetogame.com\/g\/340\/thumbnail.jpg",
        "short_description": "A free-to-play browser-based RTS based on the George R.R. Martin novels and popular HBO series.",
        "game_url": "https:\/\/www.freetogame.com\/open\/game-of-thrones-winter-is-coming",
        "genre": "Strategy",
        "platform": "Web Browser",
        "developer": "YOOZOO Games "
    },
    {
        "id": 347,
        "title": "Elvenar",
        "thumbnail": "https:\/\/www.freetogame.com\/g\/347\/thumbnail.jpg",
        "short_description": "A browser based city-building strategy MMO set in the fantasy world of Elvenar.",
        "game_url": "https:\/\/www.freetogame.com\/open\/elvenar",
        "genre": "Strategy",
        "platform": "Web Browser",
        "developer": "InnoGames"
    },
    {
        "id": 11,
        "title": "Neverwinter",
        "thumbnail": "https:\/\/www.freetogame.com\/g\/11\/thumbnail.jpg",
        "short_description": "A free-to-play 3D action MMORPG based on the acclaimed Dungeons & Dragons fantasy roleplaying game. ",
        "game_url": "https:\/\/www.freetogame.com\/open\/neverwinter",
        "genre": "MMORPG",
        "platform": "PC (Windows)",
        "developer": "Cryptic Studios"
    },
    {
        "id": 380,
        "title": "Dark Orbit Reloaded",
        "thumbnail": "https:\/\/www.freetogame.com\/g\/380\/thumbnail.jpg",
        "short_description": "A browser-based 3D space-combat MMO with a massive playerbase!",
        "game_url": "https:\/\/www.freetogame.com\/open\/darkorbit",
        "genre": "Shooter",
        "platform": "Web Browser",
        "developer": "Bigpoint"
    },
    {
        "id": 515,
        "title": "Halo Infinite",
        "thumbnail": "https:\/\/www.freetogame.com\/g\/515\/thumbnail.jpg",
        "short_description": "For the first time ever, a free-to-play Halo experience is available in the form of Halo Infinite’s multiplayer.",
        "game_url": "https:\/\/www.freetogame.com\/open\/halo-infinite",
        "genre": "Shooter",
        "platform": "PC (Windows)",
        "developer": "343 Industries"
    },
    {
        "id": 455,
        "title": "Eternal Fury",
        "thumbnail": "https:\/\/www.freetogame.com\/g\/455\/thumbnail.jpg",
        "short_description": "A free-to-play ARPG from R2 Games!",
        "game_url": "https:\/\/www.freetogame.com\/open\/eternal-fury",
        "genre": "MMORPG",
        "platform": "Web Browser",
        "developer": "R2 Games"
    },
    {
        "id": 522,
        "title": "Flyff Universe",
        "thumbnail": "https:\/\/www.freetogame.com\/g\/522\/thumbnail.jpg",
        "short_description": "Get the full Flyff experience on any platform with the free-to-play browser-based MMORPG Flyff Universe.",
        "game_url": "https:\/\/www.freetogame.com\/open\/flyff-universe",
        "genre": "MMORPG",
        "platform": "Web Browser",
        "developer": "Gala Lab"
    },
    {
        "id": 511,
        "title": "Phantasy Star Online 2 New Genesis",
        "thumbnail": "https:\/\/www.freetogame.com\/g\/511\/thumbnail.jpg",
        "short_description": "The legacy of Phantasy Star Online 2 continues a thousand years later!",
        "game_url": "https:\/\/www.freetogame.com\/open\/pso2-new-genesis",
        "genre": "MMORPG",
        "platform": "PC (Windows)",
        "developer": "Sega"
    },
    {
        "id": 5,
        "title": "Crossout",
        "thumbnail": "https:\/\/www.freetogame.com\/g\/5\/thumbnail.jpg",
        "short_description": "A post-apocalyptic MMO vehicle combat game! ",
        "game_url": "https:\/\/www.freetogame.com\/open\/crossout",
        "genre": "Shooter",
        "platform": "PC (Windows)",
        "developer": "Gaijin"
    },
    {
        "id": 9,
        "title": "World of Warships",
        "thumbnail": "https:\/\/www.freetogame.com\/g\/9\/thumbnail.jpg",
        "short_description": "A 3D free to play naval action-themed MMO from the creators of World of Tanks! ",
        "game_url": "https:\/\/www.freetogame.com\/open\/world-of-warships",
        "genre": "Shooter",
        "platform": "PC (Windows)",
        "developer": "Wargaming"
    },
    {
        "id": 12,
        "title": "War Thunder",
        "thumbnail": "https:\/\/www.freetogame.com\/g\/12\/thumbnail.jpg",
        "short_description": "A MMO shooter that puts you in command of hundreds of the finest combat vehicles of World War II.",
        "game_url": "https:\/\/www.freetogame.com\/open\/war-thunder",
        "genre": "Shooter",
        "platform": "PC (Windows)",
        "developer": "Gaijin Entertainment"
    },
    {
        "id": 2,
        "title": "World of Tanks",
        "thumbnail": "https:\/\/www.freetogame.com\/g\/2\/thumbnail.jpg",
        "short_description": "If you like blowing up tanks, with a quick and intense game style you will love this game!",
        "game_url": "https:\/\/www.freetogame.com\/open\/world-of-tanks",
        "genre": "Shooter",
        "platform": "PC (Windows)",
        "developer": "Wargaming"
    },
    {
        "id": 560,
        "title": "Palia",
        "thumbnail": "https:\/\/www.freetogame.com\/g\/560\/thumbnail.jpg",
        "short_description": "A cozy MMO with homebuilding and some adventure.",
        "game_url": "https:\/\/www.freetogame.com\/open\/palia",
        "genre": "MMORPG",
        "platform": "PC (Windows)",
        "developer": "Singularity Six"
    },
    {
        "id": 458,
        "title": "League of Angels - Heaven's Fury",
        "thumbnail": "https:\/\/www.freetogame.com\/g\/458\/thumbnail.jpg",
        "short_description": "A free-to-play, browser-based fantasy online action RPG based loosely on Western mythology!",
        "game_url": "https:\/\/www.freetogame.com\/open\/league-of-angels-heavens-fury",
        "genre": "MMORPG",
        "platform": "Web Browser",
        "developer": "Yoozoo Games"
    },
    {
        "id": 529,
        "title": "Tower of Fantasy",
        "thumbnail": "https:\/\/www.freetogame.com\/g\/529\/thumbnail.jpg",
        "short_description": "Tower of Fantasy is a 3D open-world RPG, anime-style sci-fi MMO RPG game with unique characters and beautiful open vistas!",
        "game_url": "https:\/\/www.freetogame.com\/open\/tower-of-fantasy",
        "genre": "MMORPG",
        "platform": "PC (Windows)",
        "developer": "Hotta Studio"
    },
    {
        "id": 528,
        "title": "Noah’s Heart",
        "thumbnail": "https:\/\/www.freetogame.com\/g\/528\/thumbnail.jpg",
        "short_description": "Noah’s Heart is an open-world MMORPG game with a focus on exploration and socialization.",
        "game_url": "https:\/\/www.freetogame.com\/open\/noahs-heart",
        "genre": "MMORPG",
        "platform": "PC (Windows)",
        "developer": "Archosaur Games"
    },
    {
        "id": 466,
        "title": "Valorant",
        "thumbnail": "https:\/\/www.freetogame.com\/g\/466\/thumbnail.jpg",
        "short_description": "Test your mettle in Riot Games’ character-based FPS shooter Valorant.",
        "game_url": "https:\/\/www.freetogame.com\/open\/valorant",
        "genre": "Shooter",
        "platform": "PC (Windows)",
        "developer": "Riot Games"
    },
    {
        "id": 467,
        "title": "Phantasy Star Online 2",
        "thumbnail": "https:\/\/www.freetogame.com\/g\/467\/thumbnail.jpg",
        "short_description": "Welcome to ARKS, and elite task force searching dangerous planets for the corrupted Falspawn in Phantasy Star 2 Online, Sega’s popular, free-to-play sci-fi MMORPG.",
        "game_url": "https:\/\/www.freetogame.com\/open\/pso2",
        "genre": "MMORPG",
        "platform": "PC (Windows)",
        "developer": "SEGA"
    },
    {
        "id": 452,
        "title": "Call Of Duty: Warzone",
        "thumbnail": "https:\/\/www.freetogame.com\/g\/452\/thumbnail.jpg",
        "short_description": "A standalone free-to-play battle royale and modes accessible via Call of Duty: Modern Warfare.",
        "game_url": "https:\/\/www.freetogame.com\/open\/call-of-duty-warzone",
        "genre": "Shooter",
        "platform": "PC (Windows)",
        "developer": "Infinity Ward"
    },
    {
        "id": 21,
        "title": "Destiny 2",
        "thumbnail": "https:\/\/www.freetogame.com\/g\/21\/thumbnail.jpg",
        "short_description": "A free-to-play multiplayer Sci-Fi MMOFPS from Bungie.",
        "game_url": "https:\/\/www.freetogame.com\/open\/destiny-2",
        "genre": "Shooter",
        "platform": "PC (Windows)",
        "developer": "Bungie"
    },
    {
        "id": 1,
        "title": "Dauntless",
        "thumbnail": "https:\/\/www.freetogame.com\/g\/1\/thumbnail.jpg",
        "short_description": "A free-to-play, co-op action RPG with gameplay similar to Monster Hunter.",
        "game_url": "https:\/\/www.freetogame.com\/open\/dauntless",
        "genre": "MMORPG",
        "platform": "PC (Windows)",
        "developer": "Phoenix Labs, Iron Galaxy"
    },
    {
        "id": 23,
        "title": "Apex Legends",
        "thumbnail": "https:\/\/www.freetogame.com\/g\/23\/thumbnail.jpg",
        "short_description": "A free-to-play strategic battle royale game featuring 60-player matches and team-based play. ",
        "game_url": "https:\/\/www.freetogame.com\/open\/apex-legends",
        "genre": "Shooter",
        "platform": "PC (Windows)",
        "developer": "Electronic Arts"
    },
    {
        "id": 57,
        "title": "Fortnite",
        "thumbnail": "https:\/\/www.freetogame.com\/g\/57\/thumbnail.jpg",
        "short_description": "A free-to-play, standalone mode of Epic Game's Fortnite. ",
        "game_url": "https:\/\/www.freetogame.com\/open\/fortnite-battle-royale",
        "genre": "Shooter",
        "platform": "PC (Windows)",
        "developer": "Epic Games"
    },
    {
        "id": 449,
        "title": "Albion Online",
        "thumbnail": "https:\/\/www.freetogame.com\/g\/449\/thumbnail.jpg",
        "short_description": "A free-to-play cross-platform sandbox MMO developed and published by Sandbox Interactive GmbH. ",
        "game_url": "https:\/\/www.freetogame.com\/open\/albion-online",
        "genre": "MMORPG",
        "platform": "PC (Windows)",
        "developer": "Sandbox Interactive GmbH"
    },
    {
        "id": 6,
        "title": "Blade and Soul",
        "thumbnail": "https:\/\/www.freetogame.com\/g\/6\/thumbnail.jpg",
        "short_description": "A free-to-play martial arts MMORPG that tasks players with learning combination attacks.",
        "game_url": "https:\/\/www.freetogame.com\/open\/blade-and-soul",
        "genre": "MMORPG",
        "platform": "PC (Windows)",
        "developer": "NCSoft"
    },
    {
        "id": 212,
        "title": "Brawlhalla",
        "thumbnail": "https:\/\/www.freetogame.com\/g\/212\/thumbnail.jpg",
        "short_description": "A free-to-play 2D platform fighter inspired by the Smash Bros.",
        "game_url": "https:\/\/www.freetogame.com\/open\/brawlhalla",
        "genre": "Fighting",
        "platform": "PC (Windows)",
        "developer": "Blue Mammoth Games"
    },
    {
        "id": 8,
        "title": "Trove",
        "thumbnail": "https:\/\/www.freetogame.com\/g\/8\/thumbnail.jpg",
        "short_description": "A free to play Sandbox massively multiplayer online role-playing game! ",
        "game_url": "https:\/\/www.freetogame.com\/open\/trove",
        "genre": "MMORPG",
        "platform": "PC (Windows)",
        "developer": "Trion Worlds"
    },
    {
        "id": 202,
        "title": "Heroes & Generals",
        "thumbnail": "https:\/\/www.freetogame.com\/g\/202\/thumbnail.jpg",
        "short_description": "A World War II-based MMOFPS that mixes infantry, armor, and aircraft.",
        "game_url": "https:\/\/www.freetogame.com\/open\/heroes-and-generals",
        "genre": "Shooter",
        "platform": "PC (Windows)",
        "developer": "Reto-Moto"
    },
    {
        "id": 207,
        "title": "Warface",
        "thumbnail": "https:\/\/www.freetogame.com\/g\/207\/thumbnail.jpg",
        "short_description": "A free-to-play multiplayer online FPS from Crytek, makers of the Far Cry and Crysis series of games.",
        "game_url": "https:\/\/www.freetogame.com\/open\/warface",
        "genre": "Shooter",
        "platform": "PC (Windows)",
        "developer": "Crytek"
    },
    {
        "id": 217,
        "title": "Smite",
        "thumbnail": "https:\/\/www.freetogame.com\/g\/217\/thumbnail.jpg",
        "short_description": "A popular free-to-play 3D MOBA where you take on the role of an ancient god.",
        "game_url": "https:\/\/www.freetogame.com\/open\/smite",
        "genre": "MOBA",
        "platform": "PC (Windows)",
        "developer": "Hi-Rez Studios"
    },
    {
        "id": 3,
        "title": "Warframe",
        "thumbnail": "https:\/\/www.freetogame.com\/g\/3\/thumbnail.jpg",
        "short_description": "A cooperative free-to-play third person online action shooter set in an stunning sci-fi world. ",
        "game_url": "https:\/\/www.freetogame.com\/open\/warframe",
        "genre": "Shooter",
        "platform": "PC (Windows)",
        "developer": "Digital Extremes"
    },
    {
        "id": 243,
        "title": "PlanetSide 2",
        "thumbnail": "https:\/\/www.freetogame.com\/g\/243\/thumbnail.jpg",
        "short_description": "A free-to-play open-world FPS that pits three factions against each other in a never-ending war.",
        "game_url": "https:\/\/www.freetogame.com\/open\/planetside-2",
        "genre": "Shooter",
        "platform": "PC (Windows)",
        "developer": "Daybreak Games"
    },
    {
        "id": 13,
        "title": "Guild Wars 2",
        "thumbnail": "https:\/\/www.freetogame.com\/g\/13\/thumbnail.jpg",
        "short_description": "A free-to-play MMORPG, the follow-up to ArenaNet's popular Guild Wars. ",
        "game_url": "https:\/\/www.freetogame.com\/open\/guild-wars-2",
        "genre": "MMORPG",
        "platform": "PC (Windows)",
        "developer": "ArenaNet"
    },
    {
        "id": 350,
        "title": "Goodgame Empire",
        "thumbnail": "https:\/\/www.freetogame.com\/g\/350\/thumbnail.jpg",
        "short_description": "A free to play medieval strategy browser game. Build you own castle and create a powerful army! ",
        "game_url": "https:\/\/www.freetogame.com\/open\/goodgame-empire",
        "genre": "Strategy",
        "platform": "Web Browser",
        "developer": "Goodgame Studios"
    },
    {
        "id": 14,
        "title": "Star Trek Online",
        "thumbnail": "https:\/\/www.freetogame.com\/g\/14\/thumbnail.jpg",
        "short_description": "A free-to-play, 3D, Sci-Fi MMORPG based on the popular Star Trek series.",
        "game_url": "https:\/\/www.freetogame.com\/open\/star-trek-online",
        "genre": "MMORPG",
        "platform": "PC (Windows)",
        "developer": " Cryptic Studios"
    },
    {
        "id": 433,
        "title": "RuneScape",
        "thumbnail": "https:\/\/www.freetogame.com\/g\/433\/thumbnail.jpg",
        "short_description": "A popular 3D browser MMORPG boasting a huge player base and 15 years of content.",
        "game_url": "https:\/\/www.freetogame.com\/open\/runescape",
        "genre": "MMORPG",
        "platform": "PC (Windows), Web Browser",
        "developer": "Jagex"
    },
    {
        "id": 568,
        "title": "Warhammer 40,000: Warpforge",
        "thumbnail": "https:\/\/www.freetogame.com\/g\/568\/thumbnail.jpg",
        "short_description": "A free-to-play CCG set in the Warhammer 40K universe.",
        "game_url": "https:\/\/www.freetogame.com\/open\/warhammer-40000-warpforge",
        "genre": "Card Game",
        "platform": "PC (Windows)",
        "developer": "Everguild Ltd."
    },
    {
        "id": 564,
        "title": "Synced",
        "thumbnail": "https:\/\/www.freetogame.com\/g\/564\/thumbnail.jpg",
        "short_description": "A free-to-play co-op sci-fi shooter.",
        "game_url": "https:\/\/www.freetogame.com\/open\/synced",
        "genre": "Shooter",
        "platform": "PC (Windows)",
        "developer": "NExT Studios"
    },
    {
        "id": 565,
        "title": "Warhaven",
        "thumbnail": "https:\/\/www.freetogame.com\/g\/565\/thumbnail.jpg",
        "short_description": "A free-to-play, medieval fantasy PvP game from Nexon.",
        "game_url": "https:\/\/www.freetogame.com\/open\/warhaven",
        "genre": "Strategy",
        "platform": "PC (Windows)",
        "developer": "Nexon"
    },
    {
        "id": 567,
        "title": "Microvolts: Recharged",
        "thumbnail": "https:\/\/www.freetogame.com\/g\/567\/thumbnail.jpg",
        "short_description": "A lobby-based third-person shooter with a toy-theme.",
        "game_url": "https:\/\/www.freetogame.com\/open\/microvolts",
        "genre": "Shooter",
        "platform": "PC (Windows)",
        "developer": "Masangsoft"
    },
    {
        "id": 558,
        "title": "Hawked",
        "thumbnail": "https:\/\/www.freetogame.com\/g\/558\/thumbnail.jpg",
        "short_description": "A free-to-play PvPvE treasure hunting shooter.",
        "game_url": "https:\/\/www.freetogame.com\/open\/hawked",
        "genre": "Shooter",
        "platform": "PC (Windows)",
        "developer": "My.Games"
    },
    {
        "id": 559,
        "title": "Tales Of Yore",
        "thumbnail": "https:\/\/www.freetogame.com\/g\/559\/thumbnail.jpg",
        "short_description": "A 2D MMORPG with lots of RPG tropes.",
        "game_url": "https:\/\/www.freetogame.com\/open\/tales-of-yore",
        "genre": "MMORPG",
        "platform": "PC (Windows), Web Browser",
        "developer": "Coke And Code"
    },
    {
        "id": 562,
        "title": "Waven",
        "thumbnail": "https:\/\/www.freetogame.com\/g\/562\/thumbnail.jpg",
        "short_description": "A free-to-play online tactical RPG from Ankama.",
        "game_url": "https:\/\/www.freetogame.com\/open\/waven",
        "genre": "Strategy",
        "platform": "PC (Windows)",
        "developer": "Ankama Games"
    },
    {
        "id": 566,
        "title": "Town of Salem 2",
        "thumbnail": "https:\/\/www.freetogame.com\/g\/566\/thumbnail.jpg",
        "short_description": "A deduction game set in Salem.",
        "game_url": "https:\/\/www.freetogame.com\/open\/town-of-salem-2",
        "genre": "Strategy",
        "platform": "PC (Windows)",
        "developer": "BlankMediaGames LLC"
    },
    {
        "id": 556,
        "title": "Naraka: Bladepoint",
        "thumbnail": "https:\/\/www.freetogame.com\/g\/556\/thumbnail.jpg",
        "short_description": "A free-to-play melee focused battle royale.",
        "game_url": "https:\/\/www.freetogame.com\/open\/naraka-bladepoint",
        "genre": "Battle Royale",
        "platform": "PC (Windows)",
        "developer": "NetEase"
    },
    {
        "id": 554,
        "title": "Undawn",
        "thumbnail": "https:\/\/www.freetogame.com\/g\/554\/thumbnail.jpg",
        "short_description": "A free-to-play open-world survival RPG developed by LightSpeed studios and published by Level Infinite.",
        "game_url": "https:\/\/www.freetogame.com\/open\/undawn",
        "genre": "Shooter",
        "platform": "PC (Windows)",
        "developer": "LightSpeed Studios"
    },
    {
        "id": 555,
        "title": "Temtem Showdown",
        "thumbnail": "https:\/\/www.freetogame.com\/g\/555\/thumbnail.jpg",
        "short_description": "A 2v2 competitive multiplayer battle simulator set in the Temtem universe.",
        "game_url": "https:\/\/www.freetogame.com\/open\/temtem-showdown",
        "genre": "Fighting",
        "platform": "PC (Windows)",
        "developer": "Crema"
    },
    {
        "id": 268,
        "title": "Eden Eternal",
        "thumbnail": "https:\/\/www.freetogame.com\/g\/268\/thumbnail.jpg",
        "short_description": "A free to play fantasy MMORPG with cute anime-inspired graphics.",
        "game_url": "https:\/\/www.freetogame.com\/open\/eden-eternal",
        "genre": "MMORPG",
        "platform": "PC (Windows)",
        "developer": "X-Legend Entertainment"
    },
    {
        "id": 551,
        "title": "Veiled Experts",
        "thumbnail": "https:\/\/www.freetogame.com\/g\/551\/thumbnail.jpg",
        "short_description": "A free-to-play multiplayer shooter game focused on the search and destroy mode of classic shooters.",
        "game_url": "https:\/\/www.freetogame.com\/open\/veiled-experts",
        "genre": "Shooter",
        "platform": "PC (Windows)",
        "developer": "Nexon"
    },
    {
        "id": 552,
        "title": "Jected - Rivals",
        "thumbnail": "https:\/\/www.freetogame.com\/g\/552\/thumbnail.jpg",
        "short_description": "A free-to-play game mixing extreme sports with destructible vehicles and a unique ejection mechanic.",
        "game_url": "https:\/\/www.freetogame.com\/open\/jected-rivals",
        "genre": "Sports",
        "platform": "PC (Windows)",
        "developer": "PowWow Entertainment"
    },
    {
        "id": 557,
        "title": "Ethyrial: Echoes of Yore",
        "thumbnail": "https:\/\/www.freetogame.com\/g\/557\/thumbnail.jpg",
        "short_description": "A old-school MMORPG set in a world on the brink of Civil War",
        "game_url": "https:\/\/www.freetogame.com\/open\/ethyrial-echoes-of-yore",
        "genre": "MMORPG",
        "platform": "PC (Windows)",
        "developer": " Gellyberry Studios"
    },
    {
        "id": 548,
        "title": "Dead Cide Club",
        "thumbnail": "https:\/\/www.freetogame.com\/g\/548\/thumbnail.jpg",
        "short_description": "A free-to-play, side-scrolling shooter with a variety of modes and character types to choose from.",
        "game_url": "https:\/\/www.freetogame.com\/open\/dead-cide-club",
        "genre": "Shooter",
        "platform": "PC (Windows)",
        "developer": "PressZ"
    },
    {
        "id": 546,
        "title": "Kartrider: Drift",
        "thumbnail": "https:\/\/www.freetogame.com\/g\/546\/thumbnail.jpg",
        "short_description": "A free-to-play multiplayer online racing game set in the Kartrider franchise.",
        "game_url": "https:\/\/www.freetogame.com\/open\/kartrider-drift",
        "genre": "Racing",
        "platform": "PC (Windows)",
        "developer": "Nexon Korea Corporation"
    },
    {
        "id": 547,
        "title": "Warlander",
        "thumbnail": "https:\/\/www.freetogame.com\/g\/547\/thumbnail.jpg",
        "short_description": "A medieval-style combat game with a selection of modes and characters.",
        "game_url": "https:\/\/www.freetogame.com\/open\/warlander",
        "genre": "MOBA",
        "platform": "PC (Windows)",
        "developer": "Toylogic Inc."
    },
    {
        "id": 545,
        "title": "Fangs",
        "thumbnail": "https:\/\/www.freetogame.com\/g\/545\/thumbnail.jpg",
        "short_description": "A 4v4 MOBA with hero-specific strategies.",
        "game_url": "https:\/\/www.freetogame.com\/open\/fangs",
        "genre": "MOBA",
        "platform": "PC (Windows)",
        "developer": "Hidden Leaf Games"
    },
    {
        "id": 549,
        "title": "Summoners War: Chronicles",
        "thumbnail": "https:\/\/www.freetogame.com\/g\/549\/thumbnail.jpg",
        "short_description": "A multi-platform ARPG set in the Summoners War universe.",
        "game_url": "https:\/\/www.freetogame.com\/open\/summoners-war-chronicles",
        "genre": "MMORPG",
        "platform": "PC (Windows)",
        "developer": "Com2uS"
    },
    {
        "id": 541,
        "title": "Marvel Snap",
        "thumbnail": "https:\/\/www.freetogame.com\/g\/541\/thumbnail.jpg",
        "short_description": "A fast paced strategy card game set in the Marvel universe.",
        "game_url": "https:\/\/www.freetogame.com\/open\/marvel-snap",
        "genre": "Card Game",
        "platform": "PC (Windows)",
        "developer": "Second Dinner Studios, Inc."
    },
    {
        "id": 542,
        "title": "World Boss",
        "thumbnail": "https:\/\/www.freetogame.com\/g\/542\/thumbnail.jpg",
        "short_description": "An experimental FPS based on io and roguelike gameplay.",
        "game_url": "https:\/\/www.freetogame.com\/open\/world-boss",
        "genre": "Shooter",
        "platform": "PC (Windows)",
        "developer": "Playside"
    },
    {
        "id": 536,
        "title": "Omega Strikers",
        "thumbnail": "https:\/\/www.freetogame.com\/g\/536\/thumbnail.jpg",
        "short_description": "A 3v3 socccer-style game with knockouts.",
        "game_url": "https:\/\/www.freetogame.com\/open\/omega-strikers",
        "genre": "Sports",
        "platform": "PC (Windows)",
        "developer": "Odyssey Interactive"
    },
    {
        "id": 537,
        "title": "Gundam Evolution",
        "thumbnail": "https:\/\/www.freetogame.com\/g\/537\/thumbnail.jpg",
        "short_description": "A 6v6 team-based shooter based on the Gundam multiverse",
        "game_url": "https:\/\/www.freetogame.com\/open\/gundam-evolution",
        "genre": "Shooter",
        "platform": "PC (Windows)",
        "developer": "Bandai Namco"
    },
    {
        "id": 539,
        "title": "Deathverse: Let It Die",
        "thumbnail": "https:\/\/www.freetogame.com\/g\/539\/thumbnail.jpg",
        "short_description": "A game of survival where contestants are pit against each other in a life or death game show.",
        "game_url": "https:\/\/www.freetogame.com\/open\/deathverse-let-it-die",
        "genre": "Battle Royale",
        "platform": "PC (Windows)",
        "developer": "GungHo Online Entertianment, Inc."
    },
    {
        "id": 544,
        "title": "Galahad 3093",
        "thumbnail": "https:\/\/www.freetogame.com\/g\/544\/thumbnail.jpg",
        "short_description": "A 12v12 team shooter featuring mechs based on Arthurian legend.",
        "game_url": "https:\/\/www.freetogame.com\/open\/galahad-3093",
        "genre": "Shooter",
        "platform": "PC (Windows)",
        "developer": "Simutronics Corp."
    },
    {
        "id": 527,
        "title": "Aero Tales Online",
        "thumbnail": "https:\/\/www.freetogame.com\/g\/527\/thumbnail.jpg",
        "short_description": "Aero Tales Online: The World is a free-to-play 3D anime-style MMORPG with PvP and PvE elements. The game revolves around the “mysterious story of the Key of Skylight”.",
        "game_url": "https:\/\/www.freetogame.com\/open\/aero-tales-online",
        "genre": "MMORPG",
        "platform": "PC (Windows)",
        "developer": "Anisage Games"
    },
    {
        "id": 531,
        "title": "Magic Spellslingers",
        "thumbnail": "https:\/\/www.freetogame.com\/g\/531\/thumbnail.jpg",
        "short_description": "Magic Spellslingers is the latest entry based on Witzards of the Coast’s popular card game Magic: The Gathering.",
        "game_url": "https:\/\/www.freetogame.com\/open\/magic-spellslingers",
        "genre": "Card Game",
        "platform": "PC (Windows)",
        "developer": "Pipeworks Studios, Seismic Games"
    },
    {
        "id": 533,
        "title": "A.V.A Global",
        "thumbnail": "https:\/\/www.freetogame.com\/g\/533\/thumbnail.jpg",
        "short_description": "A.V.A is a free-to-play online first-person shooter with multiple game modes, unique customizations, as well as PvP and PvE gameplay.",
        "game_url": "https:\/\/www.freetogame.com\/open\/ava",
        "genre": "Shooter",
        "platform": "PC (Windows)",
        "developer": "NEOWIZ"
    },
    {
        "id": 534,
        "title": "Lost Light",
        "thumbnail": "https:\/\/www.freetogame.com\/g\/534\/thumbnail.jpg",
        "short_description": "A post-apocalyptic shooter built around creating a realistic experience.",
        "game_url": "https:\/\/www.freetogame.com\/open\/lost-light",
        "genre": "Shooter",
        "platform": "PC (Windows)",
        "developer": "NetEase Games"
    },
    {
        "id": 524,
        "title": "Temperia: Soul of Majestic",
        "thumbnail": "https:\/\/www.freetogame.com\/g\/524\/thumbnail.jpg",
        "short_description": "Fans of collectible card games, are you looking for something a bit different from the normal fare? Then a peek at Moonwolf Entertainment and A2 Softworks’ Temperia: Soul of Majestic might be in order.",
        "game_url": "https:\/\/www.freetogame.com\/open\/temperia",
        "genre": "Card Game",
        "platform": "PC (Windows)",
        "developer": "MoonWolf Entertainment, A2 Softworks"
    },
    {
        "id": 526,
        "title": "Chimeraland",
        "thumbnail": "https:\/\/www.freetogame.com\/g\/526\/thumbnail.jpg",
        "short_description": "Explore the open-world sandbox MMO game set in a mythical world. Play as one of a large number of races, from jelly-fish to dragon-person – or even a regular old human if that’s your thing. Explore the land, gather resources, craft items, build homes and more.",
        "game_url": "https:\/\/www.freetogame.com\/open\/chimeraland",
        "genre": "MMORPG",
        "platform": "PC (Windows)",
        "developer": "Pixel soft"
    },
    {
        "id": 532,
        "title": "World of Runes",
        "thumbnail": "https:\/\/www.freetogame.com\/g\/532\/thumbnail.jpg",
        "short_description": "An adorable anime-style MMO featuring cute pets and collectable cards.",
        "game_url": "https:\/\/www.freetogame.com\/open\/world-of-runes",
        "genre": "MMORPG",
        "platform": "Web Browser",
        "developer": "R2 Games"
    },
    {
        "id": 520,
        "title": "Roller Champions",
        "thumbnail": "https:\/\/www.freetogame.com\/g\/520\/thumbnail.jpg",
        "short_description": "What if you could player roller derby, but in a more organized and less physically dangerous environment?",
        "game_url": "https:\/\/www.freetogame.com\/open\/roller-champions",
        "genre": "Sports",
        "platform": "PC (Windows)",
        "developer": "Ubisoft"
    },
    {
        "id": 519,
        "title": "Space Punks",
        "thumbnail": "https:\/\/www.freetogame.com\/g\/519\/thumbnail.jpg",
        "short_description": "Space Punks is a sci-fi co-op looter shooter with graphics and humor that will likely appeal to the Borderlands fans among us.",
        "game_url": "https:\/\/www.freetogame.com\/open\/space-punks",
        "genre": "Shooter",
        "platform": "PC (Windows)",
        "developer": "Flying Wild Hog"
    },
    {
        "id": 550,
        "title": "Goose, Goose, DUCK",
        "thumbnail": "https:\/\/www.freetogame.com\/g\/550\/thumbnail.jpg",
        "short_description": "A social deduction game with geese.",
        "game_url": "https:\/\/www.freetogame.com\/open\/goose-goose-duck",
        "genre": "Strategy",
        "platform": "PC (Windows)",
        "developer": "Gaggle Studios, Inc."
    },
    {
        "id": 518,
        "title": "Swords of Legends Online",
        "thumbnail": "https:\/\/www.freetogame.com\/g\/518\/thumbnail.jpg",
        "short_description": "Explore a fantasy world based on Chinese mythology in Gameforge’s action MMORPG Swords of Legends Online!",
        "game_url": "https:\/\/www.freetogame.com\/open\/swords-of-legends-online",
        "genre": "MMORPG",
        "platform": "PC (Windows)",
        "developer": "Wangyuan Shengtang Entertainment"
    },
    {
        "id": 513,
        "title": "Super Squad",
        "thumbnail": "https:\/\/www.freetogame.com\/g\/513\/thumbnail.jpg",
        "short_description": "Prepare yourself. It’s time for Mayhem. Super Squad is a multi-player online shoot-’em-up (or MOSH)!",
        "game_url": "https:\/\/www.freetogame.com\/open\/super-squad",
        "genre": "MOBA",
        "platform": "PC (Windows)",
        "developer": "Bad Fox Studios"
    },
    {
        "id": 512,
        "title": "Sherwood Extreme",
        "thumbnail": "https:\/\/www.freetogame.com\/g\/512\/thumbnail.jpg",
        "short_description": "High action arcade shooter Sherwood Extreme sends players on a mission to save the kingdom!",
        "game_url": "https:\/\/www.freetogame.com\/open\/sherwood-extreme",
        "genre": "Shooter",
        "platform": "PC (Windows)",
        "developer": "CAGE Studios"
    },
    {
        "id": 509,
        "title": "Smash Legends",
        "thumbnail": "https:\/\/www.freetogame.com\/g\/509\/thumbnail.jpg",
        "short_description": "Classic fairy tales get wild with 5minlab and LINE Games Corporation’s brawl-action game Smash Legends.",
        "game_url": "https:\/\/www.freetogame.com\/open\/smash-legends",
        "genre": "Fighting",
        "platform": "PC (Windows)",
        "developer": "5minlab"
    },
    {
        "id": 510,
        "title": "Drifters Loot the Galaxy",
        "thumbnail": "https:\/\/www.freetogame.com\/g\/510\/thumbnail.jpg",
        "short_description": "Grab your Driftpacs and grappling hooks, it’s time to loot. Pick a character and dive into Blind Squirrel’s team-based shooter, Drifters Loot the Galaxy.",
        "game_url": "https:\/\/www.freetogame.com\/open\/drifters-loot-the-galaxy",
        "genre": "Shooter",
        "platform": "PC (Windows)",
        "developer": "Blind Squirrel Entertainment"
    },
    {
        "id": 502,
        "title": "Primordials: Battle of Gods",
        "thumbnail": "https:\/\/www.freetogame.com\/g\/502\/thumbnail.jpg",
        "short_description": "Build armies and fight for control of the realm in Global Dodo Entertainment’s 1v1 strategy game Primordials: Battle of Gods. ",
        "game_url": "https:\/\/www.freetogame.com\/open\/primordials-battle-of-gods",
        "genre": "Strategy",
        "platform": "PC (Windows)",
        "developer": "Global Dodo Entertainment"
    },
    {
        "id": 507,
        "title": "Super Mecha Champions",
        "thumbnail": "https:\/\/www.freetogame.com\/g\/507\/thumbnail.jpg",
        "short_description": "Super Mecha Champions is a PC port of the mobile anime PvP game from NetEease, featuring a variety of modes but focusing on battle royale.",
        "game_url": "https:\/\/www.freetogame.com\/open\/super-mecha-champions",
        "genre": "Shooter",
        "platform": "PC (Windows)",
        "developer": "NetEase Games"
    },
    {
        "id": 500,
        "title": "Chroma: Bloom And Blight",
        "thumbnail": "https:\/\/www.freetogame.com\/g\/500\/thumbnail.jpg",
        "short_description": "Competitive card game fans have a new, completely free option to add to their list. ",
        "game_url": "https:\/\/www.freetogame.com\/open\/chroma-bloom-and-blight",
        "genre": "Card Game",
        "platform": "PC (Windows)",
        "developer": "Clarity Games"
    },
    {
        "id": 498,
        "title": "Blankos Block Party",
        "thumbnail": "https:\/\/www.freetogame.com\/g\/498\/thumbnail.jpg",
        "short_description": "What happens when you take the vinyl collectible toy experience and combine it with an open-world multiplayer game? You get Blankos Block Party!\r\n",
        "game_url": "https:\/\/www.freetogame.com\/open\/blankos",
        "genre": "MMO",
        "platform": "PC (Windows)",
        "developer": "Mythical Games Inc"
    },
    {
        "id": 499,
        "title": "Slapshot: Rebound",
        "thumbnail": "https:\/\/www.freetogame.com\/g\/499\/thumbnail.jpg",
        "short_description": "Do you like hockey? How about physic-based multiplayer, arcade-style sports games with cute graphics? Well, this is the one for you.",
        "game_url": "https:\/\/www.freetogame.com\/open\/slapshot-rebound",
        "genre": "Sports",
        "platform": "PC (Windows)",
        "developer": "Oddshot Games"
    },
    {
        "id": 476,
        "title": "Rogue Company",
        "thumbnail": "https:\/\/www.freetogame.com\/g\/476\/thumbnail.jpg",
        "short_description": "From Hi-Rez Studios, the team that brought you Smite and Paladins, comes Rogue Company, a cross-platform, competitive team-based third person shooter.",
        "game_url": "https:\/\/www.freetogame.com\/open\/rogue-company",
        "genre": "Shooter",
        "platform": "PC (Windows)",
        "developer": "Valofe"
    },
    {
        "id": 477,
        "title": "Eternal Return: Black Survival",
        "thumbnail": "https:\/\/www.freetogame.com\/g\/477\/thumbnail.jpg",
        "short_description": "Combining elements from battle royale, MOBA, and the survival genres, Eternal Return: Black Survival is a game designed with a broad audience in mind. ",
        "game_url": "https:\/\/www.freetogame.com\/open\/eternal-return",
        "genre": "MOBA",
        "platform": "PC (Windows)",
        "developer": "Nimble Neuron"
    },
    {
        "id": 479,
        "title": "Blood of Steel",
        "thumbnail": "https:\/\/www.freetogame.com\/g\/479\/thumbnail.jpg",
        "short_description": "Blood of Steel is an online competitive strategy game featuring some of the most well-known figures throughout medieval history. Choose your general – a Crusader, Viking, Ninja or one of those from the Three Kingdoms. Build your kingdom and command armies in epic PvP battles using classic medieval warfare tactics.",
        "game_url": "https:\/\/www.freetogame.com\/open\/blood-of-steel",
        "genre": "Strategy",
        "platform": "PC (Windows)",
        "developer": "YC Games"
    },
    {
        "id": 473,
        "title": "Spellbreak",
        "thumbnail": "https:\/\/www.freetogame.com\/g\/473\/thumbnail.jpg",
        "short_description": "Spellbreak is a multiplayer, multi-platform battle-royale where player take on the role of a “battlemage” mastering elemental magic and using spells to compete against other players.",
        "game_url": "https:\/\/www.freetogame.com\/open\/spellbreak",
        "genre": "Battle Royale",
        "platform": "PC (Windows)",
        "developer": "Proletariat"
    },
    {
        "id": 474,
        "title": "Rocket League",
        "thumbnail": "https:\/\/www.freetogame.com\/g\/474\/thumbnail.jpg",
        "short_description": "Get your car-soccer gaming on for free with Psyonix’s Rocket League. The popular competitive multi-player game is a popular offering with over 57 million players.",
        "game_url": "https:\/\/www.freetogame.com\/open\/rocket-league",
        "genre": "Sports",
        "platform": "PC (Windows)",
        "developer": "Psyonix LLC"
    },
    {
        "id": 471,
        "title": "Armor Valor",
        "thumbnail": "https:\/\/www.freetogame.com\/g\/471\/thumbnail.jpg",
        "short_description": "Build your empire with the help of mythical heroes and well thought out strategy in R2 Games’ strategy RPG Armor Valor.",
        "game_url": "https:\/\/www.freetogame.com\/open\/armor-valor",
        "genre": "Strategy",
        "platform": "Web Browser",
        "developer": "R2 Games"
    },
    {
        "id": 469,
        "title": "Unfortunate Spacemen",
        "thumbnail": "https:\/\/www.freetogame.com\/g\/469\/thumbnail.jpg",
        "short_description": "Unfortunate Spacemen is a co-op multiplayer game about Shapeshifting with a Co-op Story Mode, lots of objectives and more!",
        "game_url": "https:\/\/www.freetogame.com\/open\/unfortunate-spacemen",
        "genre": "Shooter",
        "platform": "PC (Windows)",
        "developer": "Geoff 'Zag' Keene"
    },
    {
        "id": 472,
        "title": "Jade Goddess",
        "thumbnail": "https:\/\/www.freetogame.com\/g\/472\/thumbnail.jpg",
        "short_description": "Jade Goddess is a free-to-play, browser based MMO inspired by Eastern mythology.",
        "game_url": "https:\/\/www.freetogame.com\/open\/jade-goddess",
        "genre": "MMORPG",
        "platform": "Web Browser",
        "developer": "101XP"
    },
    {
        "id": 461,
        "title": "Shop Titans",
        "thumbnail": "https:\/\/www.freetogame.com\/g\/461\/thumbnail.jpg",
        "short_description": "A free-to-play RPG shopkeeper simulation game where you are responsible for designing and maintaining your own shop.",
        "game_url": "https:\/\/www.freetogame.com\/open\/shop-titans",
        "genre": "Strategy",
        "platform": "PC (Windows)",
        "developer": "Kabam Games, Inc."
    },
    {
        "id": 463,
        "title": "Survivor Legacy",
        "thumbnail": "https:\/\/www.freetogame.com\/g\/463\/thumbnail.jpg",
        "short_description": "Survivor Legacy is a free-to-play zombie-themed strategy game from R2 Games.",
        "game_url": "https:\/\/www.freetogame.com\/open\/survivor-legacy",
        "genre": "Strategy",
        "platform": "Web Browser",
        "developer": "GameHollywood"
    },
    {
        "id": 459,
        "title": "Bombergrounds: Battle Royale",
        "thumbnail": "https:\/\/www.freetogame.com\/g\/459\/thumbnail.jpg",
        "short_description": "A free-to-play massively multiplayer battle Royale game inspired by the old-shool Bomberman games!",
        "game_url": "https:\/\/www.freetogame.com\/open\/bombergrounds-battle-royale",
        "genre": "Battle Royale",
        "platform": "PC (Windows)",
        "developer": "Giant Duck Games"
    },
    {
        "id": 563,
        "title": "Kakale Online",
        "thumbnail": "https:\/\/www.freetogame.com\/g\/563\/thumbnail.jpg",
        "short_description": "A free-to-play top-down 2D MMORPG from developer and publisher ViVa Games.",
        "game_url": "https:\/\/www.freetogame.com\/open\/kakale-online",
        "genre": "MMORPG",
        "platform": "PC (Windows)",
        "developer": "ViVa Games"
    },
    {
        "id": 39,
        "title": "Darwin Project",
        "thumbnail": "https:\/\/www.freetogame.com\/g\/39\/thumbnail.jpg",
        "short_description": "A free-to-play 10-player battle royale game set just prior to an impeding ice age.",
        "game_url": "https:\/\/www.freetogame.com\/open\/darwin-project",
        "genre": "Shooter",
        "platform": "PC (Windows)",
        "developer": "Scavengers Studio"
    },
    {
        "id": 441,
        "title": "Legends of Runeterra",
        "thumbnail": "https:\/\/www.freetogame.com\/g\/441\/thumbnail.jpg",
        "short_description": "A free-to-play CCG based on Riot Games' MOBA League of Legends.",
        "game_url": "https:\/\/www.freetogame.com\/open\/runeterra",
        "genre": "Card Game",
        "platform": "PC (Windows)",
        "developer": "Riot Games"
    },
    {
        "id": 4,
        "title": "CRSED: F.O.A.D.",
        "thumbnail": "https:\/\/www.freetogame.com\/g\/4\/thumbnail.jpg",
        "short_description": "Take the battle royale genre and add  mystical powers and you have CRSED: F.O.A.D. (Aka Cuisine Royale: Second Edition)",
        "game_url": "https:\/\/www.freetogame.com\/open\/crsed",
        "genre": "Shooter",
        "platform": "PC (Windows)",
        "developer": "Darkflow Software"
    },
    {
        "id": 535,
        "title": "Mirage Online Classic",
        "thumbnail": "https:\/\/www.freetogame.com\/g\/535\/thumbnail.jpg",
        "short_description": "A browser-based free-to-play spiritual successor to 2001's Mirage Online.",
        "game_url": "https:\/\/www.freetogame.com\/open\/mirage-online-classic",
        "genre": "MMORPG",
        "platform": "Web Browser",
        "developer": "Retrelon Games"
    },
    {
        "id": 436,
        "title": "Inferna",
        "thumbnail": "https:\/\/www.freetogame.com\/g\/436\/thumbnail.jpg",
        "short_description": "A cross-platform MMO from indie developer and publisher Inferna Limited, designed for players seeking a classic experience.  ",
        "game_url": "https:\/\/www.freetogame.com\/open\/inferna",
        "genre": "MMORPG",
        "platform": "PC (Windows)",
        "developer": "INFERNA LIMITED"
    },
    {
        "id": 443,
        "title": "Ultimate Pirates",
        "thumbnail": "https:\/\/www.freetogame.com\/g\/443\/thumbnail.jpg",
        "short_description": "A browser-based strategy MMO published for both desktop and mobile browsers by Gameforge.  ",
        "game_url": "https:\/\/www.freetogame.com\/open\/ultimate-pirates",
        "genre": "Strategy",
        "platform": "Web Browser",
        "developer": "Moonmana"
    },
    {
        "id": 501,
        "title": "Fer.al",
        "thumbnail": "https:\/\/www.freetogame.com\/g\/501\/thumbnail.jpg",
        "short_description": "If you’ve ever wanted to be a creature of myth and hang out with other mytical creatures, Wildworks’ Fer.al can help you live the dream.",
        "game_url": "https:\/\/www.freetogame.com\/open\/Feral",
        "genre": "MMO",
        "platform": "PC (Windows)",
        "developer": "Wildworks"
    },
    {
        "id": 435,
        "title": "Battle Breakers",
        "thumbnail": "https:\/\/www.freetogame.com\/g\/435\/thumbnail.jpg",
        "short_description": "A multi-platform free-to-play RPG developed and published by Epic Games for PC and Android devices.  ",
        "game_url": "https:\/\/www.freetogame.com\/open\/battlebreakers",
        "genre": "Strategy",
        "platform": "PC (Windows)",
        "developer": "Epic Games"
    },
    {
        "id": 437,
        "title": "Stay Out",
        "thumbnail": "https:\/\/www.freetogame.com\/g\/437\/thumbnail.jpg",
        "short_description": "An MMORPG featuring urban exploration and shooter elements.",
        "game_url": "https:\/\/www.freetogame.com\/open\/stay-out",
        "genre": "Shooter",
        "platform": "PC (Windows)",
        "developer": "Mobile Technologies LLC"
    },
    {
        "id": 439,
        "title": "PC Futbol Legends",
        "thumbnail": "https:\/\/www.freetogame.com\/g\/439\/thumbnail.jpg",
        "short_description": "An arcade soccer game inspired by cult arcade games from IDC games. ",
        "game_url": "https:\/\/www.freetogame.com\/open\/futbol-legends",
        "genre": "Sports",
        "platform": "PC (Windows)",
        "developer": "IDG GAmes"
    },
    {
        "id": 440,
        "title": "Vampire Empire",
        "thumbnail": "https:\/\/www.freetogame.com\/g\/440\/thumbnail.jpg",
        "short_description": "A multiplayer strategy game that focuses on the war between vampires and werewolves. ",
        "game_url": "https:\/\/www.freetogame.com\/open\/vampire-empire",
        "genre": "Strategy",
        "platform": "Web Browser",
        "developer": "F5 Game Company"
    },
    {
        "id": 468,
        "title": "Firestone Idle RPG",
        "thumbnail": "https:\/\/www.freetogame.com\/g\/468\/thumbnail.jpg",
        "short_description": "Set in the fantasy world of Alandria, Firestone is an idle RPG in which players are tasked with building the best possible party of heroes and using them to defeat the undead and orcs that plague the world.",
        "game_url": "https:\/\/www.freetogame.com\/open\/firestone-idle-rpg",
        "genre": "Strategy",
        "platform": "Web Browser",
        "developer": "Holyday Studios"
    },
    {
        "id": 505,
        "title": "Mythgard",
        "thumbnail": "https:\/\/www.freetogame.com\/g\/505\/thumbnail.jpg",
        "short_description": "Rhino Games Inc.’s CCG Mythgard combines cyberpunk with the heroes, gods, and creatures of the fantasy in a modern setting to create a world where magic competes against technology for control.",
        "game_url": "https:\/\/www.freetogame.com\/open\/mythgard",
        "genre": "Card Game",
        "platform": "PC (Windows)",
        "developer": "Rhino Games Inc."
    },
    {
        "id": 445,
        "title": "Dark Knight",
        "thumbnail": "https:\/\/www.freetogame.com\/g\/445\/thumbnail.jpg",
        "short_description": "A browser-based fantasy MMOARPG wherein players take on the role of a devil hunter descended from the gods.",
        "game_url": "https:\/\/www.freetogame.com\/open\/dark-knight",
        "genre": "MMORPG",
        "platform": "Web Browser",
        "developer": "Opogame"
    },
    {
        "id": 446,
        "title": "Legends of Aria",
        "thumbnail": "https:\/\/www.freetogame.com\/g\/446\/thumbnail.jpg",
        "short_description": "A sandbox MMORPG featuring a skill-based system, content that will appeal to both PvE and PvP players, and a robust housing system.",
        "game_url": "https:\/\/www.freetogame.com\/open\/legends-of-aria",
        "genre": "MMORPG",
        "platform": "PC (Windows)",
        "developer": "Citadel Studios Inc"
    },
    {
        "id": 451,
        "title": "Crystal Clash",
        "thumbnail": "https:\/\/www.freetogame.com\/g\/451\/thumbnail.jpg",
        "short_description": "A free-to-play fantasy RTS developed by Crunchy Leaf Games. ",
        "game_url": "https:\/\/www.freetogame.com\/open\/crystal-clash",
        "genre": "Strategy",
        "platform": "PC (Windows)",
        "developer": "Crunchy Leaf Games"
    },
    {
        "id": 447,
        "title": "Dota Underlords",
        "thumbnail": "https:\/\/www.freetogame.com\/g\/447\/thumbnail.jpg",
        "short_description": "A free-to-play auto battler strategy game set in the world of Valve's Dota franchise.",
        "game_url": "https:\/\/www.freetogame.com\/open\/dota-underlords",
        "genre": "Strategy",
        "platform": "PC (Windows)",
        "developer": "Valve"
    },
    {
        "id": 19,
        "title": "Minion Masters",
        "thumbnail": "https:\/\/www.freetogame.com\/g\/19\/thumbnail.jpg",
        "short_description": "A free-to-play strategic minion brawler from Danish developer Betadwarf. ",
        "game_url": "https:\/\/www.freetogame.com\/open\/minion-masters",
        "genre": "Card Game",
        "platform": "PC (Windows)",
        "developer": "Betadwarf"
    },
    {
        "id": 20,
        "title": "Splitgate: Arena Warfare",
        "thumbnail": "https:\/\/www.freetogame.com\/g\/20\/thumbnail.jpg",
        "short_description": "A free-to-play multiplayer shooter developed and published by 1047 games. ",
        "game_url": "https:\/\/www.freetogame.com\/open\/splitgate-arena-warfare",
        "genre": "Shooter",
        "platform": "PC (Windows)",
        "developer": "1047 Games"
    },
    {
        "id": 456,
        "title": "Conqueror's Blade",
        "thumbnail": "https:\/\/www.freetogame.com\/g\/456\/thumbnail.jpg",
        "short_description": "Command your own medieval army in Conqueror's Blade, a war simulator developed by Booming games.",
        "game_url": "https:\/\/www.freetogame.com\/open\/conquerors-blade",
        "genre": "Strategy",
        "platform": "PC (Windows)",
        "developer": "Booming Games"
    },
    {
        "id": 353,
        "title": "Stein.world",
        "thumbnail": "https:\/\/www.freetogame.com\/g\/353\/thumbnail.jpg",
        "short_description": "A free-to-play, browser-based online fantasy role \r\nplaying game done in an old-school \r\n16-bit style.",
        "game_url": "https:\/\/www.freetogame.com\/open\/steinworld",
        "genre": "MMORPG",
        "platform": "Web Browser",
        "developer": "PG5-Studio UG"
    },
    {
        "id": 438,
        "title": "Kards",
        "thumbnail": "https:\/\/www.freetogame.com\/g\/438\/thumbnail.jpg",
        "short_description": "A free-to-play collectible World War II card game from developer 1939 Games.",
        "game_url": "https:\/\/www.freetogame.com\/open\/kards",
        "genre": "Card Game",
        "platform": "PC (Windows)",
        "developer": "1939 Games"
    },
    {
        "id": 448,
        "title": "KurtzPel",
        "thumbnail": "https:\/\/www.freetogame.com\/g\/448\/thumbnail.jpg",
        "short_description": "A free-to-play third-person action battle game from KOG Games.",
        "game_url": "https:\/\/www.freetogame.com\/open\/kurtzpel",
        "genre": "Fighting",
        "platform": "PC (Windows)",
        "developer": "KOG"
    },
    {
        "id": 457,
        "title": "The Third Age",
        "thumbnail": "https:\/\/www.freetogame.com\/g\/457\/thumbnail.jpg",
        "short_description": "A free-to-play browser-based Strategy MMO game focused on story-based PvE gameplay!",
        "game_url": "https:\/\/www.freetogame.com\/open\/the-third-age",
        "genre": "Strategy",
        "platform": "Web Browser",
        "developer": "R2 Games"
    },
    {
        "id": 91,
        "title": "Eternal",
        "thumbnail": "https:\/\/www.freetogame.com\/g\/91\/thumbnail.jpg",
        "short_description": "A strategy card game designed to take the best elements of Magic the Gathering, Hearthstone, and Hex and combine them all into one game.",
        "game_url": "https:\/\/www.freetogame.com\/open\/eternal",
        "genre": "Card Game",
        "platform": "PC (Windows)",
        "developer": "Dire Wolf Digital"
    },
    {
        "id": 503,
        "title": "Artifact",
        "thumbnail": "https:\/\/www.freetogame.com\/g\/503\/thumbnail.jpg",
        "short_description": "Valve’s Artifact is two games in one. Whether you’re looking for the original Dota 2 trading card game created with the help of card game designer Richard Garfield or something a little more streamlined, Artifact has both in one download.",
        "game_url": "https:\/\/www.freetogame.com\/open\/artifact",
        "genre": "Card Game",
        "platform": "PC (Windows)",
        "developer": "Valve"
    },
    {
        "id": 538,
        "title": "World War 3",
        "thumbnail": "https:\/\/www.freetogame.com\/g\/538\/thumbnail.jpg",
        "short_description": "A realistic multiplayer tactical FPS.",
        "game_url": "https:\/\/www.freetogame.com\/open\/world-war-3",
        "genre": "Shooter",
        "platform": "PC (Windows)",
        "developer": "The Farm 51"
    },
    {
        "id": 299,
        "title": "Combat Arms: Reloaded",
        "thumbnail": "https:\/\/www.freetogame.com\/g\/299\/thumbnail.jpg",
        "short_description": "A free to play modern first person shooter with lots of maps and weapons!",
        "game_url": "https:\/\/www.freetogame.com\/open\/combat-arms",
        "genre": "Shooter",
        "platform": "PC (Windows)",
        "developer": "Doobic Studios"
    },
    {
        "id": 68,
        "title": "Dreadnought",
        "thumbnail": "https:\/\/www.freetogame.com\/g\/68\/thumbnail.jpg",
        "short_description": "A free-to-play combat flight simulator developed by Yager Development and published by Grey Box. ",
        "game_url": "https:\/\/www.freetogame.com\/open\/dreadnought",
        "genre": "Shooter",
        "platform": "PC (Windows)",
        "developer": "Yager Development"
    },
    {
        "id": 28,
        "title": "Spacelords",
        "thumbnail": "https:\/\/www.freetogame.com\/g\/28\/thumbnail.jpg",
        "short_description": "A free-to-play 4v1 sci-fi shooter. ",
        "game_url": "https:\/\/www.freetogame.com\/open\/spacelords",
        "genre": "Shooter",
        "platform": "PC (Windows)",
        "developer": "MercurySteam"
    },
    {
        "id": 450,
        "title": "Battlerite Royale",
        "thumbnail": "https:\/\/www.freetogame.com\/g\/450\/thumbnail.jpg",
        "short_description": "A free to play battle royale set in the Battlerite universe.",
        "game_url": "https:\/\/www.freetogame.com\/open\/battlerite-royale",
        "genre": "MOBA",
        "platform": "PC (Windows)",
        "developer": "Stunlock Studios"
    },
    {
        "id": 454,
        "title": "Magic: The Gathering Arena",
        "thumbnail": "https:\/\/www.freetogame.com\/g\/454\/thumbnail.jpg",
        "short_description": "A free-to-play digital recreation of Wizards of the Coast's popular collectible card game.",
        "game_url": "https:\/\/www.freetogame.com\/open\/mtg-arena",
        "genre": "Card Game",
        "platform": "PC (Windows)",
        "developer": "Wizards of the Coast"
    },
    {
        "id": 341,
        "title": "League of Angels 3",
        "thumbnail": "https:\/\/www.freetogame.com\/g\/341\/thumbnail.jpg",
        "short_description": "A free-to-play turn-based strategy browser game developed and published by GTArcade Entertainment, Inc.",
        "game_url": "https:\/\/www.freetogame.com\/open\/league-of-angels-3",
        "genre": "MMORPG",
        "platform": "Web Browser",
        "developer": "GTArcade Entertainment"
    },
    {
        "id": 282,
        "title": "BlackShot: Revolution",
        "thumbnail": "https:\/\/www.freetogame.com\/g\/282\/thumbnail.jpg",
        "short_description": "Get thrown into the fast-paced action of a virtual war zone and compete against other players.",
        "game_url": "https:\/\/www.freetogame.com\/open\/blackshot",
        "genre": "Shooter",
        "platform": "PC (Windows)",
        "developer": "Vertigo Games"
    },
    {
        "id": 31,
        "title": "Cosmos Invictus",
        "thumbnail": "https:\/\/www.freetogame.com\/g\/31\/thumbnail.jpg",
        "short_description": "A strategic collectible card game developed and published by Pegnio Ltd. ",
        "game_url": "https:\/\/www.freetogame.com\/open\/cosmos-invictus",
        "genre": "Card Game",
        "platform": "PC (Windows)",
        "developer": "Pegnio Ltd"
    },
    {
        "id": 36,
        "title": "Realm Royale Reforged",
        "thumbnail": "https:\/\/www.freetogame.com\/g\/36\/thumbnail.jpg",
        "short_description": "A free-to-play fantasy-themed battle royale game based on Hi-Rez Studio's team shooter Paladins. ",
        "game_url": "https:\/\/www.freetogame.com\/open\/realm-royale",
        "genre": "Shooter",
        "platform": "PC (Windows)",
        "developer": "Hi-Rez Studios"
    },
    {
        "id": 460,
        "title": "Empire: World War 3",
        "thumbnail": "https:\/\/www.freetogame.com\/g\/460\/thumbnail.jpg",
        "short_description": "A free-to-play browser-based action packed strategy game from the developer of Legends of Honor.",
        "game_url": "https:\/\/www.freetogame.com\/open\/empireww3",
        "genre": "Strategy",
        "platform": "Web Browser",
        "developer": "Goodgame Studios"
    },
    {
        "id": 506,
        "title": "Totally Accurate Battlegrounds",
        "thumbnail": "https:\/\/www.freetogame.com\/g\/506\/thumbnail.jpg",
        "short_description": "Take 60 players, throw them on a map together with over 90 weapons, including balloon crossbows, pots and pans, and inflatable hammers, add physics-based parkour and you have Landfall’s Totally Accurate Battlegrounds (TABG).",
        "game_url": "https:\/\/www.freetogame.com\/open\/tabg",
        "genre": "Shooter",
        "platform": "PC (Windows)",
        "developer": "Landfall"
    },
    {
        "id": 434,
        "title": "Will To Live",
        "thumbnail": "https:\/\/www.freetogame.com\/g\/434\/thumbnail.jpg",
        "short_description": "A free-to-play MMORPG-shooter developed and published by AlphaSoft LLC.",
        "game_url": "https:\/\/www.freetogame.com\/open\/will-to-live",
        "genre": "MMORPG",
        "platform": "PC (Windows)",
        "developer": "AlphaSoft LLC"
    },
    {
        "id": 543,
        "title": "Battle Arena Heroes Adventure",
        "thumbnail": "https:\/\/www.freetogame.com\/g\/543\/thumbnail.jpg",
        "short_description": "A MOBA with RPG elements.",
        "game_url": "https:\/\/www.freetogame.com\/open\/battle-arena-heroes-adventure",
        "genre": "Strategy",
        "platform": "Web Browser",
        "developer": "Espirit Games"
    },
    {
        "id": 42,
        "title": "Spellsworn",
        "thumbnail": "https:\/\/www.freetogame.com\/g\/42\/thumbnail.jpg",
        "short_description": "A free-to-play arena battle game developed and published by Frogsong Studios AB. ",
        "game_url": "https:\/\/www.freetogame.com\/open\/spellsworn",
        "genre": "MOBA",
        "platform": "PC (Windows)",
        "developer": "Frogsong Studios AB"
    },
    {
        "id": 43,
        "title": "Z1 Battle Royale",
        "thumbnail": "https:\/\/www.freetogame.com\/g\/43\/thumbnail.jpg",
        "short_description": "A highly competitive free-to-play battle royale shooter.",
        "game_url": "https:\/\/www.freetogame.com\/open\/z1-battle-royale",
        "genre": "Shooter",
        "platform": "PC (Windows)",
        "developer": "Daybreak Game Company"
    },
    {
        "id": 44,
        "title": "Tale Of Toast",
        "thumbnail": "https:\/\/www.freetogame.com\/g\/44\/thumbnail.jpg",
        "short_description": "A free-to-play open world MMO inspired by classic, core MMOs. ",
        "game_url": "https:\/\/www.freetogame.com\/open\/tale-of-toast",
        "genre": "MMORPG",
        "platform": "PC (Windows)",
        "developer": "Toasty Leaf AB"
    },
    {
        "id": 47,
        "title": "Bombtag",
        "thumbnail": "https:\/\/www.freetogame.com\/g\/47\/thumbnail.jpg",
        "short_description": "A free-to-play multiplayer Bomberman-inspired game.",
        "game_url": "https:\/\/www.freetogame.com\/open\/bombtag",
        "genre": "Strategy",
        "platform": "PC (Windows)",
        "developer": "David Schneider"
    },
    {
        "id": 48,
        "title": "Ironsight",
        "thumbnail": "https:\/\/www.freetogame.com\/g\/48\/thumbnail.jpg",
        "short_description": "A free-to-play futuristic shooter published by Aeria Games. ",
        "game_url": "https:\/\/www.freetogame.com\/open\/ironsight",
        "genre": "Shooter",
        "platform": "PC (Windows)",
        "developer": "Wiple Games"
    },
    {
        "id": 49,
        "title": "Dead Maze",
        "thumbnail": "https:\/\/www.freetogame.com\/g\/49\/thumbnail.jpg",
        "short_description": "A free-to-play 2D isometric MMO full of zombies. ",
        "game_url": "https:\/\/www.freetogame.com\/open\/dead-maze",
        "genre": "MMORPG",
        "platform": "PC (Windows)",
        "developer": "801"
    },
    {
        "id": 316,
        "title": "Scions of Fate",
        "thumbnail": "https:\/\/www.freetogame.com\/g\/316\/thumbnail.jpg",
        "short_description": "A friendly free to play MMORPG with easy to pick up controls.",
        "game_url": "https:\/\/www.freetogame.com\/open\/scions-of-fate",
        "genre": "MMORPG",
        "platform": "PC (Windows)",
        "developer": "MGAME Corporation"
    },
    {
        "id": 342,
        "title": "My Soul",
        "thumbnail": "https:\/\/www.freetogame.com\/g\/342\/thumbnail.jpg",
        "short_description": "A free-to-play ARPG distributed by GameSpirit. ",
        "game_url": "https:\/\/www.freetogame.com\/open\/my-soul",
        "genre": "MMORPG",
        "platform": "Web Browser",
        "developer": "Gamesprite"
    },
    {
        "id": 22,
        "title": "Wild Terra Online",
        "thumbnail": "https:\/\/www.freetogame.com\/g\/22\/thumbnail.jpg",
        "short_description": "A medieval sandbox MMO designed with core players in mind. ",
        "game_url": "https:\/\/www.freetogame.com\/open\/wild-terra-online",
        "genre": "MMORPG",
        "platform": "PC (Windows)",
        "developer": "Juvty Worlds Ltd."
    }
];

const seedGames = () => Games.bulkCreate(gamesdata);

module.exports = seedGames;
