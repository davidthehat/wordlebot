var log = function(message) {
    //logs message provided that verbose is true
    if (verbose) {
        console.log(message);
    }
}

var cloneState= function(state) {
    let newState = {};
    Object.assign(newState, state);
    newState.correct = [...state.correct];
    newState.absent = [...state.absent];
    return newState;
}

//remove? dont think this is used
var removeLetter = function(arr, letter) {
    a = [];
    for (var i = 0; i < arr.length; i++) {
        if (!arr[i].includes(letter)) {
            a.push(arr[i])
        }
    }
    return a;
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

var nextState = function(grade, guess, gameState) {
    //returns new gameState (does not modify gameState) that reflects guessing a word with a particular grade
    let nextState = cloneState(gameState);
    let state;

    var notabsent = []; //updated this pass, the letters that must not be added to absent
    for (var j = 0; j < 5; j++) {
        state = grade[j];
        if (state === "correct") {
            nextState.correct[j] = guess[j];
            notabsent = notabsent.concat(guess[j]);
        } else if (state === "present") {
            if (nextState.present[guess[j]] == undefined) {
                nextState.present[guess[j]] = [];
            }
            nextState.present[guess[j]] = nextState.present[guess[j]].concat(j);
            notabsent = notabsent.concat(guess[j]);
        }
    }
    for (var j = 0; j < 5; j++) {
        state = grade[j];
        if (state === "absent" && !notabsent.includes(guess[j])) {
            nextState.absent = nextState.absent.concat(guess[j]);
        } else if (state === "absent") {
            if (nextState.present[guess[j]] == undefined) {
                nextState.present[guess[j]] = [];
            }
            nextState.present[guess[j]] = nextState.present[guess[j]].concat(j);
        }
    }
    return nextState;
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

var gradeGuess = function(word, guess) {
    //given a guess, returns the grading if 'word' is the actual word
    let arr = Array(guess.length).fill("absent");
    let splitWord = word.split("");

    for (var i = 0; i < guess.length; i++) {

        if (splitWord[i] == guess[i]) {
            arr[i] = 'correct';
            splitWord[i] = "_";
        }
    }
    for (var i = 0; i < guess.length; i++) {
        if (splitWord.includes(guess[i]) && arr[i] != 'correct') {

            arr[i] = 'present';
            for (var j = 0; j < splitWord.length; j++) {
                if (splitWord[j] == guess[i]) {
                    splitWord[j] = "_";
                    break;
                }
            }
        }
    }

    /*  for (var i = 0; i < word.length; i++) {
        if (!splitWord.includes(word[i])) {
            arr[i] = 'absent';
            splitWord[i] = '_';
        }
    } */

    return arr;
}

var value = function(gameState, guess, actualWord, remainingWords, f) {
    //returns the "value" of guessing a word with a given game state and actual word.
    //value is defined as the factor by which the possible words are reduced.
    //ex, value of 2 means the number of remaining words was halved.
    if (f == undefined) {
        f = (x) => x;
    }
    let grade = gradeGuess(actualWord, guess);
    let next = nextState(grade, guess, gameState);
    let nextRemainingWords = updateWords(remainingWords, next.correct, next.present, next.absent);
    return remainingWords/nextRemainingWords.length;
    //todo do stuff with f (value function)
    //nextRemainingWords.map(f).reduce((a, b) => a + b, 0)
}

var expectedValue = function(gameState, word, validWords, remainingWords) {
    //given a game state, return the expected value for guessing a given word.
    //expected value is based on the assumption that every word is equally likely.
    let numberRemaining = remainingWords.length;
    let s = 0;
    for (let i = 0; i < validWords.length; i++) {
        s += value(gameState, word, validWords[i], remainingWords);
    }
    return s/validWords.length;
}

var getBestExpectedValue = function(gameState, validWords, remainingWords) {
    let bestWord = "";
    let bestValue = -1;
    for (let i = 0; i < validWords.length; i++) {
        let ev = expectedValue(gameState, validWords[i], validWords, remainingWords);
        if (ev > bestValue) {
            bestValue = ev;
            bestWord = validWords[i];
        }
    }
    return bestWord;
}