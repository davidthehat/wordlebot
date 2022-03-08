var simGradeGuess = function(guess) {
    //given a string, returns the grading based on the simWord
    return gradeGuess(simWord, guess);
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

var runSim = async function(multi) {
    if (multi == undefined) {
        multi = 1;
    }
    simMode = true;
    verbose = false;
    var errors = 0;
    var errorArr = [];
    allWords = getPossibleAnswers().concat(getWordlist());
    for (var i = 0; i < getPossibleAnswers().length * multi; i++) {
        simGuesses = [];
        simWord = getPossibleAnswers()[i];
        var final = await runGreedyDoubleElimination(allWords);
        if (final != simWord) {
            errors += 1;
            errorArr = errorArr.concat(simWord);
        }
        console.log(i);
    }
    return [errors, errorArr];
}