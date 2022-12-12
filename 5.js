const input = require('fs').readFileSync('input/5', 'UTF-8').split('\n')

const crateInput = input
    .filter(line => line.startsWith('['))
    .map(line => line.split('').filter((letter, i) => i % 4 === 1))

const orderInput = input
    .filter(line => line.startsWith('move'))
    .map(order => order.match(/\d+/g, ''))

const stacks = []

// Fill stacks using the input
crateInput.forEach(line => {
    line.forEach((letter, i) => {
        if (!stacks[i]) stacks[i] = []
        if (letter !== ' ') stacks[i].unshift(letter)
    })
})

// Excecute the orders and return the top crate from each stack
const stageOne = () => {
    orderInput.forEach(order => {
        for (i = 0; i < order[0]; i++) {
            if (stacks[order[1] - 1].length > 0)
                stacks[order[2] - 1].push(stacks[order[1] - 1].pop())
        }
    })
    return stacks.map(crate => crate.pop()).join('')
}

console.log('Stage 1: ' + stageOne());