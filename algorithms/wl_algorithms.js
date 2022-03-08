var runExpectedValue = async function(arr) {
    //For each word, given the current board state, finds the expected value for the word.
    //Does this using the expectedValue function.
    var correct = []; //array of correct letters in the appropriate slot
    var present = {}; //dictionary of letters and the position they were found "present"
    //that is, the letters exist but not where the value says.
    //value is an array of positions.
    var absent = []; //array of letters that are not in the word. must not contain letters that are in correct or present position
    gameState = {correct: correct, absent: absent, present: present};
    
    var currWords = [...arr]; // the set of possible words

    var guessedWords = []; //array of guessed words
    for (var i = 0; i < 6; i++) {
        //
        if (currWords.length == 1 || i == 5) {
            log("short circut");
            typeword(currWords[0]);
            return currWords[0];
        }
        
        log(guessedWords);
        
        var best = getBestExpectedValue(gameState, arr, currWords);
        log(best);
        typeword(best);
        guessedWords = guessedWords.concat(best);
        if (!simMode) {
            await new Promise(r => setTimeout(r, 3000));
        }
        update(i, best, gameState.correct, gameState.present, gameState.absent);
        log(updated);
        currWords = updateWords(currWords, gameState.correct, gameState.present, gameState. absent);
        log(currWords);
    }
    return best;
}