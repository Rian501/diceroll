let { randomInt } = require('./math');
toDiceNotation = (rollObj) => {
    let diceNoteString = `${rollObj.count}d${rollObj.sides}`;
    return diceNoteString;
}

roll = (diceNotatationString) => {
    let splitPoint = diceNotatationString.indexOf('d');
    let count = parseInt(diceNotatationString.slice(0, splitPoint));
    let sides = parseInt(diceNotatationString.slice(splitPoint+1));
     return randomInt(count, sides);
}

module.exports = { toDiceNotation, roll }