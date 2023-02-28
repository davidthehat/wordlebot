# wordlebot
Small project with the main goal of writing a js bookmarklet that can play wordle on its own.

Compile with 

uglifyjs tools.js simulator.js interactions.js data/wordlist.js data/commonLetters.js algorithms/pw_algorithms.js solver.js -o docs/file.js