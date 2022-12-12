const pairs = require('fs').readFileSync('input/4', 'UTF-8')
    .split('\n')
    .map(pair => pair
        .split(',')
        .map(sections => sections
            .split('-')
            .map(section => parseInt(section))))

const stageOne = pairs.filter(pair => 
    (pair[0][0] <= pair[1][0] && pair[0][1] >= pair[1][1]) ||
    (pair[1][0] <= pair[0][0] && pair[1][1] >= pair[0][1])).length

console.log('Stage 1: ' + stageOne)

const stageTwo = pairs.filter(pair => 
    (pair[0][0] <= pair[1][1] && pair[0][1] >= pair[1][0])).length

console.log('Stage 2: ' + stageTwo)