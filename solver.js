var main = async function() {
    simMode = false;
    simWord = "default";
    simGuesses = [];
    verbose = true;
    await fetchWordsData();

    if (simMode) {
        simGuesses = [];
        simWord = getPossibleAnswers()[Math.floor(Math.random() * getPossibleAnswers().length)];
    }
    simWord = 'pause';
    //log(simWord);
    var final = await runGreedyDoubleElimination(getPossibleAnswers());
    //var final = await runSequence(['adieu', 'quean', 'usage'], getWordlist());

    //final = final.value();
    console.log(final);
    console.log(simWord);
    return final == simWord;

}
main();