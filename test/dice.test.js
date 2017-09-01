"use strict;"


const { assert: { isDefined, isString, isFunction } } = require('chai');
const { toDiceNotation, roll } = require('../lib/dice.js');


describe('dice functions', () => {
  
    describe('toDiceNotation is a function', ()=>{
    it('should exist', () => {
      isFunction(toDiceNotation);
    });
  });

  describe('toDiceNotation should return a string', ()=>{
    it('should return a string given an object', () => {
      isString(toDiceNotation({}));
    });
  });

  describe('roll should be a function',()=>{
    it('should exist', ()=> {
        isFunction(roll);
    });
  });

  describe('roll should return an integer, given a string containing two numbers separated by a "d"', ()=>{
    it('should be defined', () => {
      isDefined(roll('23d6'));
    });
    
    it('should return a number as the result of calling randomInt', () => {
        isFinite(roll('1d6'));
        isFinite(roll('8d11'));
        isFinite(roll('some string'));
        isFinite(roll('somedstring'));
        isFinite(roll('76445'));
      });
  });




});