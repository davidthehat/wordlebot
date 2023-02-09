var getJSURL = function() {
    return "https://www.nytimes.com/games-assets/v2/wordle.104e42d22ba0a911c628.js"
    let url1 = window.location.href.match(/.*\//g);
    if (url1 == null) {
        throw "getJSURL returning null";
    }
    url1 = url1[0];
    return url1 + "main." + wordle.hash + ".js";
}


var fetchWordsData = async function() {
    const { data } = await axios.get(getJSURL());
    wordsArray = data.match(/\[("[a-z]{5}",){200,}("[a-z]{5}")\]/g);
    wordsArray = wordsArray.map((x) => JSON.parse(x));
    wordsArray.sort((a, b) => b.length - a.length);

}

var getWordlist = function() {
    return wordsArray[0];
}