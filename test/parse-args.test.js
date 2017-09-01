'use strict;'

const { assert: { property, equal, deepEqual, notEqual, isFunction, isObject, hasAllKeys, isFinite } } = require('chai');


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
        hasAllKeys(parseArgsFunc(['array', 'of', '3','4']), ["count", "sides"]);
        });

    it("should contain a number as the value of count", () => {
        isFinite(parseArgsFunc(['array', 'of', 'args']).count);
        isFinite(parseArgsFunc(['array', 'of', 'args', 'other stuff', 'whatevs']).count);
        isFinite(parseArgsFunc(['array', 'of', '3','4', '7']).count);
        isFinite(parseArgsFunc(['array', 'of', '3','4']).count);
        isFinite(parseArgsFunc(['array', 'of', '3']).count);
    });

    it("should contain a number as the value of sides", () => {
        isFinite(parseArgsFunc(['array', 'of', 'args']).sides);
        isFinite(parseArgsFunc(['array', 'of', '3','4']).sides);
    });

});
   
});