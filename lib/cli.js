'use strict'

process.title = 'Dice Roll'

const { argv: [,, ...args] } = process;
const { count, sides } = require('./parse-args')(args);
const { roll, toDiceNotation } = require('./dice');


const dice = toDiceNotation({count, sides});
const total = roll(dice);

console.log("Rolling", count, "dice with", sides, "sides.");
console.log("You rolled a total of", total,"!");
