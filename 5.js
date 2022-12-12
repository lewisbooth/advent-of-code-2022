const input = require('fs').readFileSync('input/5', 'UTF-8').split('\n')

// Parse the orders and adjust for off-by-one errors
const orderInput = input
    .filter(line => line.startsWith('move'))
    .map(order => order.match(/\d+/g, ''))
    .map(order => [parseInt(order[0]), order[1] - 1, order[2] - 1])

// Parse the starting input into a workable 2D array
const crateInput = input
    .filter(line => line.startsWith('['))
    .map(line => line.split('').filter((letter, i) => i % 4 === 1))

const stacks = []

// Fill stacks using the input
crateInput.forEach(line => {
    line.forEach((letter, i) => {
        if (!stacks[i]) stacks[i] = []
        if (letter !== ' ') stacks[i].unshift(letter)
    })
})

// Excecute Stage 1 orders and return the top crate from each stack
const stageOne = () => {
    const s1Stacks = JSON.parse(JSON.stringify(stacks))
    orderInput.forEach(order => {
        const [amount, from, to] = [...order]
        s1Stacks[to] = s1Stacks[to].concat(s1Stacks[from].splice(-amount).reverse())
    })
    return s1Stacks.map(crate => crate.pop()).join('')
}

console.log('Stage 1: ' + stageOne())

// Excecute Stage 2 orders and return the top crate from each stack
const stageTwo = () => {
    const s2Stacks = JSON.parse(JSON.stringify(stacks))
    orderInput.forEach(order => {
        const [amount, from, to] = [...order]
        s2Stacks[to] = s2Stacks[to].concat(s2Stacks[from].splice(-amount))
    })
    return s2Stacks.map(stack => stack.pop()).join('')
}

console.log('Stage 2: ' + stageTwo())