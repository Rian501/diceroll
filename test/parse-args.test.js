'use strict;'

const { assert: { property, equal, deepEqual, notEqual, isFunction, isObject, hasAllKeys, isNumber } } = require('chai');


describe('parse-args', () => {
    const parseArgsFunc = require('../lib/parse-args.js')
    describe('parse-args is a function', () => {
      it('should exist', () => {
        isFunction(parseArgsFunc);
      });
  
      it('should return an object',  () => {
        isObject(parseArgsFunc(['array', 'of', 'args'], "Hooray! It's a bouncing baby obj")
        )
      });
  
    it("should contain two properties, count and sides", () => {
        hasAllKeys(parseArgsFunc(['array', 'of', 'args']), ["count", "sides"]);
        });

    it("should contain a number as the value of count", () => {
        isNumber(parseArgsFunc(['array', 'of', 'args']).count);
    });

    it("should contain a number as the value of sides", () => {
        isNumber(parseArgsFunc(['array', 'of', 'args']).count);
    });

});
   
});