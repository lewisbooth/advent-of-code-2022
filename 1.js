const fs = require('fs')
const input = fs.readFileSync('input/1', 'UTF-8').split('\n')

const elves = []
let currentTotal = 0

// Break input into individual totals per elf
input.forEach(line => {
    const num = parseInt(line)
    if (!num) {
        elves.push(currentTotal)
        currentTotal = 0
    } else {
        currentTotal += num
    }
})

const sortedElves = elves.sort((a, b) => a - b)

// The maximum number of calories that any elf is carrying
console.log('Stage 1: ' + sortedElves.slice(-1))    

// The sum of calories carried by the top 3 elves
console.log('Stage 2: ' + sortedElves.slice(-3).reduce((a, b) => a + b))

