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