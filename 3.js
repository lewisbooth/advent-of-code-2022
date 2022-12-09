const elves = require('fs').readFileSync('input/3', 'UTF-8').split('\n').map(elf => elf.split(''))

// Pad start so the letters line up to the priority value
const itemMap = '_abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

// Sum the priorities of the misplaced items
const stageOne = elves.reduce((a, items) => {
    const right = items.slice(items.length / 2, items.length)
    const missing = items.find(item => right.includes(item))
    return a + itemMap.indexOf(missing)
}, 0)

console.log('Stage 1: ' + stageOne)

// Organise elves into groups of 3
const groups = []

for (i = 3; i <= elves.length; i += 3) 
    groups.push(elves.slice(i - 3, i))

const stageTwo = groups.reduce((a, group) => {
    const common = group[0].find(item => group[1].includes(item) && group[2].includes(item))
    return a + itemMap.indexOf(common)
}, 0)

console.log('Stage 2: ' + stageTwo)