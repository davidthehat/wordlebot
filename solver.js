//#region
var wordlist = ["cigar", "rebut", "sissy", "humph", "awake", "blush", "focal", "evade", "naval", "serve", "heath", "dwarf", "model", "karma", "stink", "grade", "quiet", "bench", "abate", "feign", "major", "death", "fresh", "crust", "stool", "colon", "abase", "marry", "react", "batty", "pride", "floss", "helix", "croak", "staff", "paper", "unfed", "whelp", "trawl", "outdo", "adobe", "crazy", "sower", "repay", "digit", "crate", "cluck", "spike", "mimic", "pound", "maxim", "linen", "unmet", "flesh", "booby", "forth", "first", "stand", "belly", "ivory", "seedy", "print", "yearn", "drain", "bribe", "stout", "panel", "crass", "flume", "offal", "agree", "error", "swirl", "argue", "bleed", "delta", "flick", "totem", "wooer", "front", "shrub", "parry", "biome", "lapel", "start", "greet", "goner", "golem", "lusty", "loopy", "round", "audit", "lying", "gamma", "labor", "islet", "civic", "forge", "corny", "moult", "basic", "salad", "agate", "spicy", "spray", "essay", "fjord", "spend", "kebab", "guild", "aback", "motor", "alone", "hatch", "hyper", "thumb", "dowry", "ought", "belch", "dutch", "pilot", "tweed", "comet", "jaunt", "enema", "steed", "abyss", "growl", "fling", "dozen", "boozy", "erode", "world", "gouge", "click", "briar", "great", "altar", "pulpy", "blurt", "coast", "duchy", "groin", "fixer", "group", "rogue", "badly", "smart", "pithy", "gaudy", "chill", "heron", "vodka", "finer", "surer", "radio", "rouge", "perch", "retch", "wrote", "clock", "tilde", "store", "prove", "bring", "solve", "cheat", "grime", "exult", "usher", "epoch", "triad", "break", "rhino", "viral", "conic", "masse", "sonic", "vital", "trace", "using", "peach", "champ", "baton", "brake", "pluck", "craze", "gripe", "weary", "picky", "acute", "ferry", "aside", "tapir", "troll", "unify", "rebus", "boost", "truss", "siege", "tiger", "banal", "slump", "crank", "gorge", "query", "drink", "favor", "abbey", "tangy", "panic", "solar", "shire", "proxy", "point", "robot", "prick", "wince", "crimp", "knoll", "sugar", "whack", "mount", "perky", "could", "wrung", "light", "those", "moist", "shard", "pleat", "aloft", "skill", "elder", "frame", "humor", "pause", "ulcer", "ultra", "robin", "cynic", "agora", "aroma", "caulk", "shake", "pupal", "dodge", "swill", "tacit", "other", "thorn", "trove", "bloke", "vivid", "spill", "chant", "choke", "rupee", "nasty", "mourn", "ahead", "brine", "cloth", "hoard", "sweet", "month", "lapse", "watch", "today", "focus", "smelt", "tease", "cater", "movie", "lynch", "saute", "allow", "renew", "their", "slosh", "purge", "chest", "depot", "epoxy", "nymph", "found", "shall", "harry", "stove", "lowly", "snout", "trope", "fewer", "shawl", "natal", "fibre", "comma", "foray", "scare", "stair", "black", "squad", "royal", "chunk", "mince", "slave", "shame", "cheek", "ample", "flair", "foyer", "cargo", "oxide", "plant", "olive", "inert", "askew", "heist", "shown", "zesty", "hasty", "trash", "fella", "larva", "forgo", "story", "hairy", "train", "homer", "badge", "midst", "canny", "fetus", "butch", "farce", "slung", "tipsy", "metal", "yield", "delve", "being", "scour", "glass", "gamer", "scrap", "money", "hinge", "album", "vouch", "asset", "tiara", "crept", "bayou", "atoll", "manor", "creak", "showy", "phase", "froth", "depth", "gloom", "flood", "trait", "girth", "piety", "payer", "goose", "float", "donor", "atone", "primo", "apron", "blown", "cacao", "loser", "input", "gloat", "awful", "brink", "smite", "beady", "rusty", "retro", "droll", "gawky", "hutch", "pinto", "gaily", "egret", "lilac", "sever", "field", "fluff", "hydro", "flack", "agape", "wench", "voice", "stead", "stalk", "berth", "madam", "night", "bland", "liver", "wedge", "augur", "roomy", "wacky", "flock", "angry", "bobby", "trite", "aphid", "tryst", "midge", "power", "elope", "cinch", "motto", "stomp", "upset", "bluff", "cramp", "quart", "coyly", "youth", "rhyme", "buggy", "alien", "smear", "unfit", "patty", "cling", "glean", "label", "hunky", "khaki", "poker", "gruel", "twice", "twang", "shrug", "treat", "unlit", "waste", "merit", "woven", "octal", "needy", "clown", "widow", "irony", "ruder", "gauze", "chief", "onset", "prize", "fungi", "charm", "gully", "inter", "whoop", "taunt", "leery", "class", "theme", "lofty", "tibia", "booze", "alpha", "thyme", "eclat", "doubt", "parer", "chute", "stick", "trice", "alike", "sooth", "recap", "saint", "liege", "glory", "grate", "admit", "brisk", "soggy", "usurp", "scald", "scorn", "leave", "twine", "sting", "bough", "marsh", "sloth", "dandy", "vigor", "howdy", "enjoy", "valid", "ionic", "equal", "unset", "floor", "catch", "spade", "stein", "exist", "quirk", "denim", "grove", "spiel", "mummy", "fault", "foggy", "flout", "carry", "sneak", "libel", "waltz", "aptly", "piney", "inept", "aloud", "photo", "dream", "stale", "vomit", "ombre", "fanny", "unite", "snarl", "baker", "there", "glyph", "pooch", "hippy", "spell", "folly", "louse", "gulch", "vault", "godly", "threw", "fleet", "grave", "inane", "shock", "crave", "spite", "valve", "skimp", "claim", "rainy", "musty", "pique", "daddy", "quasi", "arise", "aging", "valet", "opium", "avert", "stuck", "recut", "mulch", "genre", "plume", "rifle", "count", "incur", "total", "wrest", "mocha", "deter", "study", "lover", "safer", "rivet", "funny", "smoke", "mound", "undue", "sedan", "pagan", "swine", "guile", "gusty", "equip", "tough", "canoe", "chaos", "covet", "human", "udder", "lunch", "blast", "stray", "manga", "melee", "lefty", "quick", "paste", "given", "octet", "risen", "groan", "leaky", "grind", "carve", "loose", "sadly", "spilt", "apple", "slack", "honey", "final", "sheen", "eerie", "minty", "slick", "derby", "wharf", "spelt", "coach", "erupt", "singe", "price", "spawn", "fairy", "jiffy", "filmy", "stack", "chose", "sleep", "ardor", "nanny", "niece", "woozy", "handy", "grace", "ditto", "stank", "cream", "usual", "diode", "valor", "angle", "ninja", "muddy", "chase", "reply", "prone", "spoil", "heart", "shade", "diner", "arson", "onion", "sleet", "dowel", "couch", "palsy", "bowel", "smile", "evoke", "creek", "lance", "eagle", "idiot", "siren", "built", "embed", "award", "dross", "annul", "goody", "frown", "patio", "laden", "humid", "elite", "lymph", "edify", "might", "reset", "visit", "gusto", "purse", "vapor", "crock", "write", "sunny", "loath", "chaff", "slide", "queer", "venom", "stamp", "sorry", "still", "acorn", "aping", "pushy", "tamer", "hater", "mania", "awoke", "brawn", "swift", "exile", "birch", "lucky", "freer", "risky", "ghost", "plier", "lunar", "winch", "snare", "nurse", "house", "borax", "nicer", "lurch", "exalt", "about", "savvy", "toxin", "tunic", "pried", "inlay", "chump", "lanky", "cress", "eater", "elude", "cycle", "kitty", "boule", "moron", "tenet", "place", "lobby", "plush", "vigil", "index", "blink", "clung", "qualm", "croup", "clink", "juicy", "stage", "decay", "nerve", "flier", "shaft", "crook", "clean", "china", "ridge", "vowel", "gnome", "snuck", "icing", "spiny", "rigor", "snail", "flown", "rabid", "prose", "thank", "poppy", "budge", "fiber", "moldy", "dowdy", "kneel", "track", "caddy", "quell", "dumpy", "paler", "swore", "rebar", "scuba", "splat", "flyer", "horny", "mason", "doing", "ozone", "amply", "molar", "ovary", "beset", "queue", "cliff", "magic", "truce", "sport", "fritz", "edict", "twirl", "verse", "llama", "eaten", "range", "whisk", "hovel", "rehab", "macaw", "sigma", "spout", "verve", "sushi", "dying", "fetid", "brain", "buddy", "thump", "scion", "candy", "chord", "basin", "march", "crowd", "arbor", "gayly", "musky", "stain", "dally", "bless", "bravo", "stung", "title", "ruler", "kiosk", "blond", "ennui", "layer", "fluid", "tatty", "score", "cutie", "zebra", "barge", "matey", "bluer", "aider", "shook", "river", "privy", "betel", "frisk", "bongo", "begun", "azure", "weave", "genie", "sound", "glove", "braid", "scope", "wryly", "rover", "assay", "ocean", "bloom", "irate", "later", "woken", "silky", "wreck", "dwelt", "slate", "smack", "solid", "amaze", "hazel", "wrist", "jolly", "globe", "flint", "rouse", "civil", "vista", "relax", "cover", "alive", "beech", "jetty", "bliss", "vocal", "often", "dolly", "eight", "joker", "since", "event", "ensue", "shunt", "diver", "poser", "worst", "sweep", "alley", "creed", "anime", "leafy", "bosom", "dunce", "stare", "pudgy", "waive", "choir", "stood", "spoke", "outgo", "delay", "bilge", "ideal", "clasp", "seize", "hotly", "laugh", "sieve", "block", "meant", "grape", "noose", "hardy", "shied", "drawl", "daisy", "putty", "strut", "burnt", "tulip", "crick", "idyll", "vixen", "furor", "geeky", "cough", "naive", "shoal", "stork", "bathe", "aunty", "check", "prime", "brass", "outer", "furry", "razor", "elect", "evict", "imply", "demur", "quota", "haven", "cavil", "swear", "crump", "dough", "gavel", "wagon", "salon", "nudge", "harem", "pitch", "sworn", "pupil", "excel", "stony", "cabin", "unzip", "queen", "trout", "polyp", "earth", "storm", "until", "taper", "enter", "child", "adopt", "minor", "fatty", "husky", "brave", "filet", "slime", "glint", "tread", "steal", "regal", "guest", "every", "murky", "share", "spore", "hoist", "buxom", "inner", "otter", "dimly", "level", "sumac", "donut", "stilt", "arena", "sheet", "scrub", "fancy", "slimy", "pearl", "silly", "porch", "dingo", "sepia", "amble", "shady", "bread", "friar", "reign", "dairy", "quill", "cross", "brood", "tuber", "shear", "posit", "blank", "villa", "shank", "piggy", "freak", "which", "among", "fecal", "shell", "would", "algae", "large", "rabbi", "agony", "amuse", "bushy", "copse", "swoon", "knife", "pouch", "ascot", "plane", "crown", "urban", "snide", "relay", "abide", "viola", "rajah", "straw", "dilly", "crash", "amass", "third", "trick", "tutor", "woody", "blurb", "grief", "disco", "where", "sassy", "beach", "sauna", "comic", "clued", "creep", "caste", "graze", "snuff", "frock", "gonad", "drunk", "prong", "lurid", "steel", "halve", "buyer", "vinyl", "utile", "smell", "adage", "worry", "tasty", "local", "trade", "finch", "ashen", "modal", "gaunt", "clove", "enact", "adorn", "roast", "speck", "sheik", "missy", "grunt", "snoop", "party", "touch", "mafia", "emcee", "array", "south", "vapid", "jelly", "skulk", "angst", "tubal", "lower", "crest", "sweat", "cyber", "adore", "tardy", "swami", "notch", "groom", "roach", "hitch", "young", "align", "ready", "frond", "strap", "puree", "realm", "venue", "swarm", "offer", "seven", "dryer", "diary", "dryly", "drank", "acrid", "heady", "theta", "junto", "pixie", "quoth", "bonus", "shalt", "penne", "amend", "datum", "build", "piano", "shelf", "lodge", "suing", "rearm", "coral", "ramen", "worth", "psalm", "infer", "overt", "mayor", "ovoid", "glide", "usage", "poise", "randy", "chuck", "prank", "fishy", "tooth", "ether", "drove", "idler", "swath", "stint", "while", "begat", "apply", "slang", "tarot", "radar", "credo", "aware", "canon", "shift", "timer", "bylaw", "serum", "three", "steak", "iliac", "shirk", "blunt", "puppy", "penal", "joist", "bunny", "shape", "beget", "wheel", "adept", "stunt", "stole", "topaz", "chore", "fluke", "afoot", "bloat", "bully", "dense", "caper", "sneer", "boxer", "jumbo", "lunge", "space", "avail", "short", "slurp", "loyal", "flirt", "pizza", "conch", "tempo", "droop", "plate", "bible", "plunk", "afoul", "savoy", "steep", "agile", "stake", "dwell", "knave", "beard", "arose", "motif", "smash", "broil", "glare", "shove", "baggy", "mammy", "swamp", "along", "rugby", "wager", "quack", "squat", "snaky", "debit", "mange", "skate", "ninth", "joust", "tramp", "spurn", "medal", "micro", "rebel", "flank", "learn", "nadir", "maple", "comfy", "remit", "gruff", "ester", "least", "mogul", "fetch", "cause", "oaken", "aglow", "meaty", "gaffe", "shyly", "racer", "prowl", "thief", "stern", "poesy", "rocky", "tweet", "waist", "spire", "grope", "havoc", "patsy", "truly", "forty", "deity", "uncle", "swish", "giver", "preen", "bevel", "lemur", "draft", "slope", "annoy", "lingo", "bleak", "ditty", "curly", "cedar", "dirge", "grown", "horde", "drool", "shuck", "crypt", "cumin", "stock", "gravy", "locus", "wider", "breed", "quite", "chafe", "cache", "blimp", "deign", "fiend", "logic", "cheap", "elide", "rigid", "false", "renal", "pence", "rowdy", "shoot", "blaze", "envoy", "posse", "brief", "never", "abort", "mouse", "mucky", "sulky", "fiery", "media", "trunk", "yeast", "clear", "skunk", "scalp", "bitty", "cider", "koala", "duvet", "segue", "creme", "super", "grill", "after", "owner", "ember", "reach", "nobly", "empty", "speed", "gipsy", "recur", "smock", "dread", "merge", "burst", "kappa", "amity", "shaky", "hover", "carol", "snort", "synod", "faint", "haunt", "flour", "chair", "detox", "shrew", "tense", "plied", "quark", "burly", "novel", "waxen", "stoic", "jerky", "blitz", "beefy", "lyric", "hussy", "towel", "quilt", "below", "bingo", "wispy", "brash", "scone", "toast", "easel", "saucy", "value", "spice", "honor", "route", "sharp", "bawdy", "radii", "skull", "phony", "issue", "lager", "swell", "urine", "gassy", "trial", "flora", "upper", "latch", "wight", "brick", "retry", "holly", "decal", "grass", "shack", "dogma", "mover", "defer", "sober", "optic", "crier", "vying", "nomad", "flute", "hippo", "shark", "drier", "obese", "bugle", "tawny", "chalk", "feast", "ruddy", "pedal", "scarf", "cruel", "bleat", "tidal", "slush", "semen", "windy", "dusty", "sally", "igloo", "nerdy", "jewel", "shone", "whale", "hymen", "abuse", "fugue", "elbow", "crumb", "pansy", "welsh", "syrup", "terse", "suave", "gamut", "swung", "drake", "freed", "afire", "shirt", "grout", "oddly", "tithe", "plaid", "dummy", "broom", "blind", "torch", "enemy", "again", "tying", "pesky", "alter", "gazer", "noble", "ethos", "bride", "extol", "decor", "hobby", "beast", "idiom", "utter", "these", "sixth", "alarm", "erase", "elegy", "spunk", "piper", "scaly", "scold", "hefty", "chick", "sooty", "canal", "whiny", "slash", "quake", "joint", "swept", "prude", "heavy", "wield", "femme", "lasso", "maize", "shale", "screw", "spree", "smoky", "whiff", "scent", "glade", "spent", "prism", "stoke", "riper", "orbit", "cocoa", "guilt", "humus", "shush", "table", "smirk", "wrong", "noisy", "alert", "shiny", "elate", "resin", "whole", "hunch", "pixel", "polar", "hotel", "sword", "cleat", "mango", "rumba", "puffy", "filly", "billy", "leash", "clout", "dance", "ovate", "facet", "chili", "paint", "liner", "curio", "salty", "audio", "snake", "fable", "cloak", "navel", "spurt", "pesto", "balmy", "flash", "unwed", "early", "churn", "weedy", "stump", "lease", "witty", "wimpy", "spoof", "saner", "blend", "salsa", "thick", "warty", "manic", "blare", "squib", "spoon", "probe", "crepe", "knack", "force", "debut", "order", "haste", "teeth", "agent", "widen", "icily", "slice", "ingot", "clash", "juror", "blood", "abode", "throw", "unity", "pivot", "slept", "troop", "spare", "sewer", "parse", "morph", "cacti", "tacky", "spool", "demon", "moody", "annex", "begin", "fuzzy", "patch", "water", "lumpy", "admin", "omega", "limit", "tabby", "macho", "aisle", "skiff", "basis", "plank", "verge", "botch", "crawl", "lousy", "slain", "cubic", "raise", "wrack", "guide", "foist", "cameo", "under", "actor", "revue", "fraud", "harpy", "scoop", "climb", "refer", "olden", "clerk", "debar", "tally", "ethic", "cairn", "tulle", "ghoul", "hilly", "crude", "apart", "scale", "older", "plain", "sperm", "briny", "abbot", "rerun", "quest", "crisp", "bound", "befit", "drawn", "suite", "itchy", "cheer", "bagel", "guess", "broad", "axiom", "chard", "caput", "leant", "harsh", "curse", "proud", "swing", "opine", "taste", "lupus", "gumbo", "miner", "green", "chasm", "lipid", "topic", "armor", "brush", "crane", "mural", "abled", "habit", "bossy", "maker", "dusky", "dizzy", "lithe", "brook", "jazzy", "fifty", "sense", "giant", "surly", "legal", "fatal", "flunk", "began", "prune", "small", "slant", "scoff", "torus", "ninny", "covey", "viper", "taken", "moral", "vogue", "owing", "token", "entry", "booth", "voter", "chide", "elfin", "ebony", "neigh", "minim", "melon", "kneed", "decoy", "voila", "ankle", "arrow", "mushy", "tribe", "cease", "eager", "birth", "graph", "odder", "terra", "weird", "tried", "clack", "color", "rough", "weigh", "uncut", "ladle", "strip", "craft", "minus", "dicey", "titan", "lucid", "vicar", "dress", "ditch", "gypsy", "pasta", "taffy", "flame", "swoop", "aloof", "sight", "broke", "teary", "chart", "sixty", "wordy", "sheer", "leper", "nosey", "bulge", "savor", "clamp", "funky", "foamy", "toxic", "brand", "plumb", "dingy", "butte", "drill", "tripe", "bicep", "tenor", "krill", "worse", "drama", "hyena", "think", "ratio", "cobra", "basil", "scrum", "bused", "phone", "court", "camel", "proof", "heard", "angel", "petal", "pouty", "throb", "maybe", "fetal", "sprig", "spine", "shout", "cadet", "macro", "dodgy", "satyr", "rarer", "binge", "trend", "nutty", "leapt", "amiss", "split", "myrrh", "width", "sonar", "tower", "baron", "fever", "waver", "spark", "belie", "sloop", "expel", "smote", "baler", "above", "north", "wafer", "scant", "frill", "awash", "snack", "scowl", "frail", "drift", "limbo", "fence", "motel", "ounce", "wreak", "revel", "talon", "prior", "knelt", "cello", "flake", "debug", "anode", "crime", "salve", "scout", "imbue", "pinky", "stave", "vague", "chock", "fight", "video", "stone", "teach", "cleft", "frost", "prawn", "booty", "twist", "apnea", "stiff", "plaza", "ledge", "tweak", "board", "grant", "medic", "bacon", "cable", "brawl", "slunk", "raspy", "forum", "drone", "women", "mucus", "boast", "toddy", "coven", "tumor", "truer", "wrath", "stall", "steam", "axial", "purer", "daily", "trail", "niche", "mealy", "juice", "nylon", "plump", "merry", "flail", "papal", "wheat", "berry", "cower", "erect", "brute", "leggy", "snipe", "sinew", "skier", "penny", "jumpy", "rally", "umbra", "scary", "modem", "gross", "avian", "greed", "satin", "tonic", "parka", "sniff", "livid", "stark", "trump", "giddy", "reuse", "taboo", "avoid", "quote", "devil", "liken", "gloss", "gayer", "beret", "noise", "gland", "dealt", "sling", "rumor", "opera", "thigh", "tonga", "flare", "wound", "white", "bulky", "etude", "horse", "circa", "paddy", "inbox", "fizzy", "grain", "exert", "surge", "gleam", "belle", "salvo", "crush", "fruit", "sappy", "taker", "tract", "ovine", "spiky", "frank", "reedy", "filth", "spasm", "heave", "mambo", "right", "clank", "trust", "lumen", "borne", "spook", "sauce", "amber", "lathe", "carat", "corer", "dirty", "slyly", "affix", "alloy", "taint", "sheep", "kinky", "wooly", "mauve", "flung", "yacht", "fried", "quail", "brunt", "grimy", "curvy", "cagey", "rinse", "deuce", "state", "grasp", "milky", "bison", "graft", "sandy", "baste", "flask", "hedge", "girly", "swash", "boney", "coupe", "endow", "abhor", "welch", "blade", "tight", "geese", "miser", "mirth", "cloud", "cabal", "leech", "close", "tenth", "pecan", "droit", "grail", "clone", "guise", "ralph", "tango", "biddy", "smith", "mower", "payee", "serif", "drape", "fifth", "spank", "glaze", "allot", "truck", "kayak", "virus", "testy", "tepee", "fully", "zonal", "metro", "curry", "grand", "banjo", "axion", "bezel", "occur", "chain", "nasal", "gooey", "filer", "brace", "allay", "pubic", "raven", "plead", "gnash", "flaky", "munch", "dully", "eking", "thing", "slink", "hurry", "theft", "shorn", "pygmy", "ranch", "wring", "lemon", "shore", "mamma", "froze", "newer", "style", "moose", "antic", "drown", "vegan", "chess", "guppy", "union", "lever", "lorry", "image", "cabby", "druid", "exact", "truth", "dopey", "spear", "cried", "chime", "crony", "stunk", "timid", "batch", "gauge", "rotor", "crack", "curve", "latte", "witch", "bunch", "repel", "anvil", "soapy", "meter", "broth", "madly", "dried", "scene", "known", "magma", "roost", "woman", "thong", "punch", "pasty", "downy", "knead", "whirl", "rapid", "clang", "anger", "drive", "goofy", "email", "music", "stuff", "bleep", "rider", "mecca", "folio", "setup", "verso", "quash", "fauna", "gummy", "happy", "newly", "fussy", "relic", "guava", "ratty", "fudge", "femur", "chirp", "forte", "alibi", "whine", "petty", "golly", "plait", "fleck", "felon", "gourd", "brown", "thrum", "ficus", "stash", "decry", "wiser", "junta", "visor", "daunt", "scree", "impel", "await", "press", "whose", "turbo", "stoop", "speak", "mangy", "eying", "inlet", "crone", "pulse", "mossy", "staid", "hence", "pinch", "teddy", "sully", "snore", "ripen", "snowy", "attic", "going", "leach", "mouth", "hound", "clump", "tonal", "bigot", "peril", "piece", "blame", "haute", "spied", "undid", "intro", "basal", "shine", "gecko", "rodeo", "guard", "steer", "loamy", "scamp", "scram", "manly", "hello", "vaunt", "organ", "feral", "knock", "extra", "condo", "adapt", "willy", "polka", "rayon", "skirt", "faith", "torso", "match", "mercy", "tepid", "sleek", "riser", "twixt", "peace", "flush", "catty", "login", "eject", "roger", "rival", "untie", "refit", "aorta", "adult", "judge", "rower", "artsy", "rural", "shave"]
    //#endregion

var gameapp = document.querySelector("game-app");
var commonLetters = {
    's': 6665,
    'e': 6662,
    'a': 5990,
    'o': 4438,
    'r': 4158,
    'i': 3759,
    'l': 3371,
    't': 3295,
    'n': 2952,
    'u': 2511,
    'd': 2453,
    'y': 2074,
    'c': 2028,
    'p': 2019,
    'm': 1976,
    'h': 1760,
    'g': 1644,
    'b': 1627,
    'k': 1505,
    'f': 1115,
    'w': 1039,
    'v': 694,
    'z': 434,
    'j': 291,
    'x': 288,
    'q': 112,
}

var simMode = true;
var simWord;
var simGuesses = [];
var verbose = true;

var log = function(message) {
    //logs message provided that verbose is true
    if (verbose) {
        console.log(message);
    }
}

var simGradeGuess = function(word) {
    //given a string, returns the grading based on the simWord
    var arr = Array(word.length).fill("absent");
    simWordCopy = simWord.split("");

    for (var i = 0; i < word.length; i++) {

        if (simWordCopy[i] == word[i]) {
            arr[i] = 'correct';
            simWordCopy[i] = "_";
        }
    }
    for (var i = 0; i < word.length; i++) {
        if (simWordCopy.includes(word[i]) && arr[i] != 'correct') {

            arr[i] = 'present';
            for (var j = 0; j < simWordCopy.length; j++) {
                if (simWordCopy[j] == word[i]) {
                    simWordCopy[j] = "_";
                    break;
                }
            }
        }
    }

    /*  for (var i = 0; i < word.length; i++) {
        if (!simWordCopy.includes(word[i])) {
            arr[i] = 'absent';
            simWordCopy[i] = '_';
        }
    } */

    return arr;
}

var simTypeGuess = function(word) {
    //given a string, simulate guessing the word (update guesses)
    simGuesses = simGuesses.concat([simGradeGuess(word)]);
}

var getState = function(r, c) {
    //returns state of letter at given row and column (0 index)
    if (simMode) {
        return simGuesses[r][c];
    }

    return gameapp.shadowRoot.querySelectorAll("game-row")[r].shadowRoot.querySelectorAll("game-tile")[c]._state;
}

var key = function(letter) {
    document.dispatchEvent(
        new KeyboardEvent("keydown", {
            key: letter,
            bubbles: true,
        })
    );
}

var typeword = function(word) {
    if (simMode) {
        simTypeGuess(word);
        return;
    }

    const arr = word.split("");
    arr.map(key);
    key("Enter");
}

var removeLetter = function(arr, letter) {
    a = [];
    for (var i = 0; i < arr.length; i++) {
        if (!arr[i].includes(letter)) {
            a.push(arr[i])
        }
    }
}

//from https://stackoverflow.com/questions/33656708/check-for-repeated-characters-in-a-string-javascript
function isIsogram(str) {
    return !/(.).*\1/.test(str);
}

var removeDoubleLetters = function(arr) {
    r = [];
    for (var i = 0; i < arr.length; i++) {
        if (isIsogram(arr[i])) {
            r = r.concat(arr[i]);
        }
    }
    return r;
}

var scoreString = function(word, dict) {
    const s = word.split("");
    return s.map((x) => dict[x]).reduce((x, y) => x + y);
}

var scoreArr = function(arr, dict) {
    return arr.map((x) => scoreString(x, dict)).reduce((x, y) => x + y);
}

var findBest = function(arr, dict) {
    //given an array of words, returns the word with the best score

    //for loop
    besti = 0;
    bests = 0;
    for (var i = 0; i < arr.length; i++) {
        score = scoreString(arr[i], dict);
        if (score > bests) {
            bests = score;
            besti = i;
        }
    }
    return arr[besti];
}

//maybe todo - implement python useit/loseit find best word algorithm
var findSeq = function(arr, n, []) {
    if (arr.length === 0) {
        return l;
    }
    if (n == 0) {
        return l;
    }

    useIt = findSeq(arrWithoutLettersOfWord(arr, arr[0]), n - 1, l + [arr[0]])
        //TODO

}

var update = function(i, guess, correct, present, absent) {

    var notabsent = []; //updated this pass, the letters that must not be added to absent
    for (var j = 0; j < 5; j++) {
        state = getState(i, j);
        if (state === "correct") {
            correct[j] = guess[j];
            notabsent = notabsent.concat(guess[j]);
        } else if (state === "present") {
            if (present[guess[j]] == undefined) {
                present[guess[j]] = [];
            }
            present[guess[j]] = present[guess[j]].concat(j);
            notabsent = notabsent.concat(guess[j]);
        }
    }
    for (var j = 0; j < 5; j++) {
        state = getState(i, j);
        if (state === "absent" && !notabsent.includes(guess[j])) {
            absent = absent.concat(guess[j]);
        } else if (state === "absent") {
            if (present[guess[j]] == undefined) {
                present[guess[j]] = [];
            }
            present[guess[j]] = present[guess[j]].concat(j);
        }

    }
    return [correct, present, absent];
}

var keyInDictionary = function(dictionary, key) {
    for (var k in dictionary) {
        if (k == key) {
            return true;
        }
    }
    return false;
}



var wordPossible = function(word, correct, present, absent) {
    //returns boolean if word is possible under the current state

    for (var i = 0; i < word.length; i++) {
        if (correct[i] != undefined && word[i] != correct[i]) {
            return false;
        }

        if (absent.includes(word[i])) {
            return false;
        }
    }


    for (var k in present) {
        positions = present[k]; //word must contain k, but not in positions
        if (!word.includes(k)) {
            return false;
        }
        for (var i = 0; i < word.length; i++) {
            if (positions.includes(i) && word[i] == k) {
                return false;
            }
        }

    }

    return true;
}

var updateWords = function(arr, correct, present, absent) {
    //returns arr modified to have words that return false for wordPossible removed
    returned = [];
    for (var i = 0; i < arr.length; i++) {
        if (wordPossible(arr[i], correct, present, absent)) {
            returned = returned.concat(arr[i]);
        }
    }
    return returned;
}

var generateDictionary = function(words) {
    //given an array of words, generate a dictionary of the most common letters from the array
    var dict = {};
    for (var i = 0; i < words.length; i++) {
        var w = words[i];
        for (var j = 0; j < w.length; j++) {
            if (dict[w[j]] == undefined) {
                dict[w[j]] = 0;
            }
            dict[w[j]] += 1;
        }
    }
    return dict;
}

var generatedCommonLetters = generateDictionary(wordlist);

var removeGuessedWords = function(dict, words) {
    let ret = JSON.parse(JSON.stringify(dict));;
    for (var i = 0; i < words.length; i++) {
        var w = words[i];
        for (var j = 0; j < w.length; j++) {
            ret[w[j]] = 0;
        }
    }
    return ret;
}

async function runGreedy(arr, dict) {
    //strategy: greedy algorithm. find best single word that is still possible
    //best word is defined as the word that contains the most new letters that are common
    var correct = []; //array of correct letters in the appropriate slot
    var present = {}; //dictionary of letters and the position they were found "present"
    //that is, the letters exist but not where the value says.
    //value is an array of positions.
    var absent = []; //array of letters that are not in the word. must not contain letters that are in correct or present position

    var currWords = arr;
    var best;
    //6 times
    for (var i = 0; i < 6; i++) {
        if (currWords.length != 1) {
            best = findBest(removeDoubleLetters(currWords), dict);
        } else {
            best = findBest(currWords, dict);
        }
        //failsafe, if best is undefined just select the best from the whole list
        if (best == undefined) {
            best = findBest(currWords, dict);
        }
        //double failsafe, set best = "ERROR" if still undefined
        if (best == undefined) {
            best = 'ERROR';
        }

        console.log(best);

        typeword(best);
        if (!simMode) {
            await new Promise(r => setTimeout(r, 3000));
        }
        updated = update(i, best, correct, present, absent);
        correct = updated[0];
        present = updated[1];
        absent = updated[2];

        currWords = updateWords(currWords, correct, present, absent);

        //temp
        /*  const index = currWords.indexOf(best);
        if (index > -1) {
            currWords.splice(index, 1); // 2nd parameter means remove one item only
        } */

        console.log(updated);
        console.log(currWords);
        console.log(simGuesses);
    }
    return best;
}

var runGreedyElimination = async function(arr) {
    //strategy: greedy elimation. Every turn guesses the word with the most common letters, only considering the remaining words. Does not need to guess words that are possibly correct (in fact, prefers not to). Once there is only one word (or guess) left, guess the first (possibly only) word possible.

    var correct = []; //array of correct letters in the appropriate slot
    var present = {}; //dictionary of letters and the position they were found "present"
    //that is, the letters exist but not where the value says.
    //value is an array of positions.
    var absent = []; //array of letters that are not in the word. must not contain letters that are in correct or present position

    var currWords = arr; // the set of possible words
    var noDouble = removeDoubleLetters(currWords);
    for (var i = 0; i < 6; i++) {
        //
        if (currWords.length == 1 || i == 5) {
            typeword(currWords[0]);
            best = currWords[0];
            break;
        }
        if (i == 0) {
            dict = generatedCommonLetters;
        } else {
            dict = generateDictionary(currWords);
        }
        var best = findBest(noDouble, dict);
        log(best);
        typeword(best);
        if (!simMode) {
            await new Promise(r => setTimeout(r, 3000));
        }
        var updated = update(i, best, correct, present, absent);
        correct = updated[0];
        present = updated[1];
        absent = updated[2];
        log(currWords);
        currWords = updateWords(currWords, correct, present, absent);
    }
    return best;

}

var runGreedyDoubleElimination = async function(arr) {
    //strategy: greedy elimation. Every turn guesses the word with the most common letters, only considering the remaining words. Letters that have already been guessed get no points. Does not need to guess words that are possibly correct (in fact, prefers not to). Once there is only one word (or guess) left, guess the first (possibly only) word possible.

    var correct = []; //array of correct letters in the appropriate slot
    var present = {}; //dictionary of letters and the position they were found "present"
    //that is, the letters exist but not where the value says.
    //value is an array of positions.
    var absent = []; //array of letters that are not in the word. must not contain letters that are in correct or present position

    var currWords = arr; // the set of possible words
    var noDouble = removeDoubleLetters(currWords);

    var guessedWords = []; //array of guessed words
    for (var i = 0; i < 6; i++) {
        //
        if (currWords.length == 1 || i == 5) {
            log("short circut");
            typeword(currWords[0]);
            return currWords[0];

        }
        if (i == 0) {
            dict = generatedCommonLetters;
        } else {
            dict = generateDictionary(currWords);
        }
        log(dict);
        log(guessedWords);
        var dict_t = removeGuessedWords(dict, guessedWords);
        if (!Object.values(dict_t).every(item => item === 0)) {
            log("mod dict good")
            dict = dict_t;
        }
        log(dict);
        log(dict_t);
        var best = findBest(noDouble, dict);
        log(best);
        typeword(best);
        guessedWords = guessedWords.concat(best);
        if (!simMode) {
            await new Promise(r => setTimeout(r, 3000));
        }
        var updated = update(i, best, correct, present, absent);
        correct = updated[0];
        present = updated[1];
        absent = updated[2];
        log(updated);
        currWords = updateWords(currWords, correct, present, absent);
        log(currWords);
    }
    return best;

}

var runSequence = async function(arr, ws) {
    var correct = []; //array of correct letters in the appropriate slot
    var present = {}; //dictionary of letters and the position they were found "present"
    //that is, the letters exist but not where the value says.
    //value is an array of positions.
    var absent = []; //array of letters that are not in the word. must not contain letters that are in correct or present position

    var currWords = ws; // the set of possible words

    for (var i = 0; i < arr.length; i++) {
        typeword(arr[i]);

        updated = update(i, arr[i], correct, present, absent);
        correct = updated[0];
        present = updated[1];
        absent = updated[2];

        currWords = updateWords(currWords, correct, present, absent);

        //temp
        /*  const index = currWords.indexOf(best);
        if (index > -1) {
            currWords.splice(index, 1); // 2nd parameter means remove one item only
        } */

        console.log(updated);
        console.log(currWords);
        console.log(simGuesses);
    }
}

var SeqThenGreedy = async function() {

}

var main = async function() {
    if (simMode) {
        simGuesses = [];
        simWord = wordlist[Math.floor(Math.random() * wordlist.length)];
    }
    simWord = 'pause';
    //log(simWord);
    //var final = await runGreedyDoubleElimination(wordlist);
    var final = await runSequence(['adieu', 'quean', 'usage'], wordlist);

    //final = final.value();
    console.log(final);
    console.log(simWord);
    return final == simWord;

}

var runSim = async function(multi) {
    if (multi == undefined) {
        multi = 1;
    }
    simMode = true;
    verbose = false;
    var errors = 0;
    var errorArr = [];
    for (var i = 0; i < wordlist.length * multi; i++) {
        simGuesses = [];
        simWord = wordlist[i];
        var final = await runGreedyDoubleElimination(wordlist);
        if (final != simWord) {
            errors += 1;
            errorArr = errorArr.concat(simWord);
        }
        console.log(i);
    }
    return [errors, errorArr];

}

main();