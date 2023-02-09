var log = function(message) {
    //logs message provided that verbose is true
    if (verbose) {
        console.log(message);
    }
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

var update = function(i, guess, correct, present, absent) {
    // debugger;
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