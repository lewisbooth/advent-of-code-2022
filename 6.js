const input = require('fs').readFileSync('input/6', 'UTF-8').split('')

const stageOne = input.findIndex((letter, i) => {
    if (i < 3) return false
    const block = input.slice(i - 3, i + 1)
    return new Set(block).size === block.length
}) + 1

console.log('Stage 1: ' + stageOne)

const stageTwo = input.findIndex((letter, i) => {
    if (i < 13) return false
    const block = input.slice(i - 13, i + 1)
    return new Set(block).size === block.length
}) + 1

console.log('Stage 2: ' + stageTwo)