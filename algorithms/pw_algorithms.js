//idea: a generic function that you can provide only the unique code

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

        log(best);

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

        log(updated);
        log(currWords);
        log(simGuesses);
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
    generatedCommonLetters = generateDictionary(getPossibleAnswers());
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
    generatedCommonLetters = generateDictionary(getPossibleAnswers());
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