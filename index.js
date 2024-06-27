const {every} = require('@sitek94/example-legacy-package')

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const areAllNumbersEven = every(numbers, n => n % 2 === 0)

console.log('Are all numbers even?', areAllNumbersEven)
