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
    //simWord = 'pause';
    //log(simWord);
    var fullwordlist = getWordlist().concat(getPossibleAnswers());
    //var final = await runGreedyDoubleElimination(fullwordlist);
    var final = await runExpectedValue(fullwordlist);

    //var final = await runSequence(['adieu', 'quean', 'usage'], getWordlist());

    //final = final.value();
    log(final);
    if (simMode) {
        log(simWord);
    }
    return final == simWord;

}
main();