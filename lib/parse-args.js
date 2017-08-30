'use strict;'

module.exports = (argsArray) => {
    let dice = {
        count: 1,
        sides: 6
    }; 
    if (argsArray[1]) {
        dice.count = parseInt(argsArray[0]);
        dice.sides = parseInt(argsArray[1]);
    } else if (argsArray[0]) {
        dice.sides = parseInt(argsArray[0]);
    } 
    return dice;
};
