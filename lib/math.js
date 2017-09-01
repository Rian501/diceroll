'use strict;'

randomInt = (count, sides) => {
    min = count;
    max = count * sides;
    min = Math.ceil(min);
    max = Math.floor(max); //plus 1 makes inclusive upper bound
    return Math.floor(Math.random() * (max - min)) + min; 
}

module.exports = { randomInt }