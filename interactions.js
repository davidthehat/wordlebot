var getState = function(r, c) {
    //returns state of letter at given row and column (0 index)
    var board = document.getElementsByClassName("Board-module_board__jeoPS");
    if (simMode) {
        return simGuesses[r][c];
    }
    return board[0].children[r].children[c].children[0].dataset["state"];
}

var getLetter = function(r, c) {
    //returns state of letter at given row and column (0 index)
    var localstorage = window.localStorage.getItem("nyt-wordle-moogle/ANON");
    if (simMode) {
        return simGuesses[r][c];
    }
    return JSON.parse(localstorage).game.boardState[r][c];
}
    

var key = function(letter) {
    document.dispatchEvent(
        new KeyboardEvent("keydown", {
            key: letter,
            bubbles: true,
        })
    );
}

var typeword = function(word) {
    if (simMode) {
        simTypeGuess(word);
        return;
    }
    console.log(word)
    const arr = word.split("");
    arr.map(key);
    key("Enter");
}