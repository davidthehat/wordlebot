var main = async function() {
    simMode = false;
    simWord = "default";
    simGuesses = [];
    verbose = true;
    await fetchWordsData();

    if (simMode) {
        simGuesses = [];
        simWord = getWordlist()[Math.floor(Math.random() * getWordlist().length)];
    }
    //simWord = 'pause';
    //log(simWord);
    var fullwordlist = getWordlist();
    console.log(fullwordlist)
    console.log("TEST")
    var final = await runGreedyDoubleElimination(fullwordlist);

    //var final = await runSequence(['adieu', 'quean', 'usage'], getWordlist());

    //final = final.value();
    log(final);
    if (simMode) {
        log(simWord);
    }
    return final == simWord;

}
main();