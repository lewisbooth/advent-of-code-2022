const input = require('fs').readFileSync('input/1', 'UTF-8').split('\n\n')

// Break input into sorted totals per elf
const elves = input  
  .map(elf => elf
    .split('\n')
    .map(line => parseInt(line))
    .reduce((a, b) => a + b))
  .sort((a, b) => a - b)

// The maximum number of calories that any elf is carrying
console.log('Stage 1: ' + elves.slice(-1))    

// The sum of calories carried by the top 3 elves
console.log('Stage 2: ' + elves.slice(-3).reduce((a, b) => a + b))