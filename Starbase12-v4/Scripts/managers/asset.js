var managers;
(function (managers) {
    // Asset Manager Class
    var Assets = (function () {
        function Assets() {
        }
        // PUBLIC STATIC METHODS
        // Initialize Image and Sound Assets
        Assets.init = function () {
            var assetManifest = [
                { id: "textureAtlas", src: "assets/images/atlas.png" },
                { id: "fontAtlas", src: "assets/fonts/fontAtlas.png" },
                { id: "explosionParticle", src: "assets/images/explosionParticle.png" },
                { id: "flameParticle", src: "assets/images/flameParticle.png" },
                { id: "background", src: "assets/images/hexagon.jpg" },
                { id: "hudLS", src: "assets/images/hudLS.png" },
                { id: "hudRS", src: "assets/images/hudRS.png" },
                { id: "menuScreen", src: "assets/images/menuScreen.png" },
                { id: "introScreen", src: "assets/images/introScreen.png" },
                { id: "gameOverScreen", src: "assets/images/gameOverScreen.png" },
                { id: "missionScreen", src: "assets/images/missionScreen.jpg" },
                { id: "movementScreen", src: "assets/images/movementScreen.jpg" },
                { id: "defensesScreen", src: "assets/images/defensesScreen.jpg" },
                { id: "weaponsScreen", src: "assets/images/weaponsScreen.jpg" },
                { id: "phaser", src: "assets/sounds/phaser.mp3" },
                { id: "disruptor", src: "assets/sounds/disruptor.mp3" },
                { id: "shield", src: "assets/sounds/shield.mp3" },
                { id: "photon", src: "assets/sounds/photon.mp3" },
                { id: "explosion", src: "assets/sounds/smallexplosion.mp3" },
                { id: "hull", src: "assets/sounds/hullHit.mp3" },
                { id: "powerup", src: "assets/sounds/powerup.mp3" },
                { id: "redAlert", src: "assets/sounds/redAlert.mp3" },
                { id: "menuMusic", src: "assets/sounds/menu.mp3" },
                { id: "battleMusic", src: "assets/sounds/battle.mp3" },
                { id: "gameOverMusic", src: "assets/sounds/gameover.mp3" },
                { id: "sector", src: "assets/sounds/enteringsector.mp3" },
                { id: "zero", src: "assets/sounds/zero.mp3" },
                { id: "1", src: "assets/sounds/1.mp3" },
                { id: "2", src: "assets/sounds/2.mp3" },
                { id: "3", src: "assets/sounds/3.mp3" },
                { id: "4", src: "assets/sounds/4.mp3" },
                { id: "5", src: "assets/sounds/5.mp3" },
                { id: "6", src: "assets/sounds/6.mp3" },
                { id: "7", src: "assets/sounds/7.mp3" },
                { id: "8", src: "assets/sounds/8.mp3" },
                { id: "9", src: "assets/sounds/9.mp3" },
                { id: "point", src: "assets/sounds/point.mp3" }
            ];
            createjs.Sound.initializeDefaultPlugins();
            createjs.Sound.alternateExtensions = ["mp3"];
            this.loader = new createjs.LoadQueue(false);
            this.loader.installPlugin(createjs.Sound);
            this.loader.loadManifest(assetManifest);
            this.loader.setUseXHR(false);
        };
        // Load Sprites and BitMap Fonts
        Assets.loadSprites = function () {
            // SpriteSheet Data Object
            var objectData = {
                "images": [this.loader.getResult("textureAtlas")],
                "frames": [
                    [399, 319, 36, 66],
                    [504, 272, 36, 66],
                    [501, 340, 36, 66],
                    [168, 400, 36, 66],
                    [271, 386, 36, 66],
                    [309, 386, 36, 66],
                    [347, 386, 36, 66],
                    [385, 387, 36, 66],
                    [423, 400, 36, 66],
                    [461, 400, 36, 66],
                    [499, 408, 36, 66],
                    [196, 468, 36, 66],
                    [2, 2, 180, 62],
                    [234, 450, 34, 38],
                    [2, 66, 180, 62],
                    [517, 2, 10, 20],
                    [184, 2, 180, 62],
                    [153, 322, 52, 76],
                    [104, 489, 44, 51],
                    [150, 489, 44, 51],
                    [366, 206, 44, 47],
                    [412, 206, 44, 47],
                    [2, 130, 180, 62],
                    [184, 66, 180, 62],
                    [234, 490, 33, 33],
                    [270, 454, 33, 33],
                    [305, 454, 33, 33],
                    [340, 454, 33, 33],
                    [375, 455, 33, 33],
                    [410, 468, 33, 33],
                    [445, 468, 33, 33],
                    [480, 476, 33, 33],
                    [270, 489, 33, 33],
                    [305, 489, 33, 33],
                    [340, 489, 33, 33],
                    [375, 490, 33, 33],
                    [2, 194, 180, 62],
                    [184, 130, 180, 62],
                    [468, 2, 47, 101],
                    [104, 322, 47, 101],
                    [468, 105, 47, 101],
                    [2, 258, 180, 62],
                    [366, 2, 100, 100],
                    [184, 258, 62, 62],
                    [248, 258, 62, 62],
                    [207, 322, 62, 62],
                    [312, 258, 62, 62],
                    [271, 322, 62, 62],
                    [104, 425, 62, 62],
                    [2, 322, 100, 100],
                    [366, 104, 100, 100],
                    [335, 322, 62, 62],
                    [376, 255, 62, 62],
                    [458, 208, 62, 62],
                    [440, 272, 62, 62],
                    [437, 336, 62, 62],
                    [207, 386, 62, 62],
                    [2, 424, 100, 100],
                    [2, 526, 10, 10],
                    [184, 194, 180, 62]
                ],
                "animations": {
                    "shipBL": [0],
                    "shipBLR": [1],
                    "shipBLY": [2],
                    "shipBR": [3],
                    "shipBRR": [4],
                    "shipBRY": [5],
                    "shipTL": [6],
                    "shipTLR": [7],
                    "shipTLY": [8],
                    "shipTR": [9],
                    "shipTRR": [10],
                    "shipTRY": [11],
                    "backButton": [12],
                    "crosshair": [13],
                    "defensesButton": [14],
                    "disruptorBolt": [15],
                    "instructionsButton": [16],
                    "klingon": [17],
                    "klingonBL": [18],
                    "klingonBR": [19],
                    "klingonTL": [20],
                    "klingonTR": [21],
                    "missionButton": [22],
                    "movementButton": [23],
                    "torpedo": {
                        frames: [24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35],
                        speed: 0.2
                    },
                    "playAgainButton": [36],
                    "playButton": [37],
                    "ship": [38],
                    "shipR": [39],
                    "shipY": [40],
                    "startButton": [41],
                    "starbase": [42],
                    "starbaseBL": [43],
                    "starbaseBLR": [44],
                    "starbaseBLY": [45],
                    "starbaseBR": [46],
                    "starbaseBRR": [47],
                    "starbaseBRY": [48],
                    "starbaseDocked": [49],
                    "starbaseR": [50],
                    "starbaseTL": [51],
                    "starbaseTLR": [52],
                    "starbaseTLY": [53],
                    "starbaseTR": [54],
                    "starbaseTRR": [55],
                    "starbaseTRY": [56],
                    "starbaseY": [57],
                    "tracer": [58],
                    "weaponsButton": [59]
                }
            };
            // BitMap Font SpriteSheet Data object
            var fontData = {
                "images": [this.loader.getResult("fontAtlas")],
                "frames": [
                    [50, 1658, 18, 76],
                    [2, 2, 75, 76],
                    [94, 272, 27, 90],
                    [2, 1649, 27, 90],
                    [94, 237, 31, 33],
                    [86, 535, 38, 76],
                    [70, 1747, 27, 76],
                    [2, 477, 38, 76],
                    [42, 552, 38, 76],
                    [2, 555, 38, 76],
                    [99, 1747, 17, 76],
                    [82, 613, 38, 76],
                    [42, 630, 38, 76],
                    [2, 633, 38, 76],
                    [82, 691, 38, 76],
                    [42, 708, 38, 76],
                    [2, 711, 38, 76],
                    [82, 769, 38, 76],
                    [42, 786, 38, 76],
                    [2, 789, 38, 76],
                    [2, 1492, 34, 76],
                    [77, 1499, 34, 76],
                    [82, 847, 38, 76],
                    [42, 864, 38, 76],
                    [50, 1736, 18, 76],
                    [2, 867, 38, 76],
                    [79, 2, 45, 77],
                    [74, 1577, 33, 76],
                    [2, 80, 58, 76],
                    [82, 925, 38, 76],
                    [42, 942, 38, 76],
                    [2, 945, 38, 76],
                    [2, 393, 40, 82],
                    [49, 237, 43, 77],
                    [82, 1003, 38, 76],
                    [46, 316, 41, 76],
                    [42, 1020, 38, 76],
                    [2, 236, 45, 76],
                    [62, 81, 58, 76],
                    [2, 314, 42, 77],
                    [2, 1023, 38, 76],
                    [80, 1173, 36, 76],
                    [2, 1741, 27, 90],
                    [71, 1655, 27, 90],
                    [40, 1190, 36, 76],
                    [2, 1259, 36, 76],
                    [78, 1251, 36, 76],
                    [2, 1101, 36, 77],
                    [40, 1268, 36, 76],
                    [40, 1424, 35, 76],
                    [89, 364, 36, 90],
                    [2, 1180, 36, 77],
                    [31, 1747, 17, 77],
                    [100, 1655, 23, 90],
                    [86, 456, 39, 77],
                    [31, 1658, 17, 77],
                    [2, 158, 54, 76],
                    [2, 1337, 36, 76],
                    [2, 1415, 36, 75],
                    [82, 1081, 36, 90],
                    [42, 1098, 36, 90],
                    [38, 1502, 34, 76],
                    [78, 1329, 36, 76],
                    [2, 1570, 33, 77],
                    [40, 1346, 36, 76],
                    [44, 394, 40, 77],
                    [58, 159, 54, 76],
                    [44, 473, 40, 77],
                    [78, 1407, 35, 90],
                    [37, 1580, 32, 76]
                ],
                "animations": {
                    "!": [0],
                    "%": [1],
                    "(": [2],
                    ")": [3],
                    "*": [4],
                    "0": [5],
                    "1": [6],
                    "2": [7],
                    "3": [8],
                    "4": [9],
                    ".": [10],
                    "5": [11],
                    "6": [12],
                    "7": [13],
                    "8": [14],
                    "9": [15],
                    "A": [16],
                    "B": [17],
                    "C": [18],
                    "D": [19],
                    "E": [20],
                    "F": [21],
                    "G": [22],
                    "H": [23],
                    "I": [24],
                    "J": [25],
                    "K": [26],
                    "L": [27],
                    "M": [28],
                    "N": [29],
                    "O": [30],
                    "P": [31],
                    "Q": [32],
                    "R": [33],
                    "S": [34],
                    "T": [35],
                    "U": [36],
                    "V": [37],
                    "W": [38],
                    "X": [39],
                    "Y": [40],
                    "Z": [41],
                    "[": [42],
                    "]": [43],
                    "a": [44],
                    "b": [45],
                    "c": [46],
                    "d": [47],
                    "e": [48],
                    "f": [49],
                    "g": [50],
                    "h": [51],
                    "i": [52],
                    "j": [53],
                    "k": [54],
                    "l": [55],
                    "m": [56],
                    "n": [57],
                    "o": [58],
                    "p": [59],
                    "q": [60],
                    "r": [61],
                    "s": [62],
                    "t": [63],
                    "u": [64],
                    "v": [65],
                    "w": [66],
                    "x": [67],
                    "y": [68],
                    "z": [69]
                }
            };
            this.atlas = new createjs.SpriteSheet(objectData);
            this.bitMapFont = new createjs.SpriteSheet(fontData);
        };
        return Assets;
    })();
    managers.Assets = Assets;
})(managers || (managers = {}));
//# sourceMappingURL=asset.js.map