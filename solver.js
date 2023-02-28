var main = async function() {
    simMode = false;
    if(typeof process === 'object') {
        //we are in Node! This means we are being asked to simulate the game.
        simMode = true;
    }
    //simWord = "default";
    simGuesses = [];
    verbose = true;
    await fetchWordsData();

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
    return final;

}
main();