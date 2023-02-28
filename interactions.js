var getState = function(r, c) {
    //returns state of letter at given row and column (0 index)
    if (simMode) {
        return simGuesses[r][c];
    }
    var board = document.getElementsByClassName("Board-module_board__jeoPS");
    return board[0].children[r].children[c].children[0].dataset["state"];
}

var getLetter = function(r, c) {
    //returns state of letter at given row and column (0 index)
    if (simMode) {
        return simGuesses[r][c];
    }
    var localstorage = window.localStorage.getItem("nyt-wordle-moogle/ANON");
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