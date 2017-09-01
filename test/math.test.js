'use strict;'

const { assert: { property, equal, deepEqual, notEqual, isFunction, isObject, hasAllKeys, isNumber, isFinite } } = require('chai');
const { randomInt } = require('../lib/math.js')

describe('randomInt', () => {
    describe('randomInt is a function', () => {
      it('should exist', () => {
        isFunction(randomInt);
        })
    });

    describe('randomInt returns a number', () => {
        it('should return a number', ()=>{
            isFinite(randomInt(1, 6));
            isFinite(randomInt(3, 4));
            isFinite(randomInt(17, 555));
            isFinite(randomInt(1, 1));
        })
    })
}); 