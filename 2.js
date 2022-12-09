const input = require('fs').readFileSync('input/2', 'UTF-8').split('\n')

const stageOne = {
    "A X": 4,
    "A Y": 8,
    "A Z": 3,
    "B X": 1,
    "B Y": 5,
    "B Z": 9,
    "C X": 7,
    "C Y": 2,
    "C Z": 6,
}

// Hard-code all outcomes for each stage and sum the results
console.log('Stage 1: ' + input.map(round => stageOne[round]).reduce((a, b) => a + b))    

const stageTwo = {
    "A X": 3,
    "A Y": 4,
    "A Z": 8,
    "B X": 1,
    "B Y": 5,
    "B Z": 9,
    "C X": 2,
    "C Y": 6,
    "C Z": 7,
}

// Hard-code all outcomes for each stage and sum the results
console.log('Stage 2: ' + input.map(round => stageTwo[round]).reduce((a, b) => a + b))