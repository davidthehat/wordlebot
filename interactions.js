var getState = function(r, c) {
    //returns state of letter at given row and column (0 index)
    var gameapp = document.querySelector("game-app");
    if (simMode) {
        return simGuesses[r][c];
    }
    return gameapp.shadowRoot.querySelectorAll("game-row")[r].shadowRoot.querySelectorAll("game-tile")[c]._state;
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

    const arr = word.split("");
    arr.map(key);
    key("Enter");
}