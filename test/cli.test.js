"use strict;"


const { assert: { isDefined, isFinite, isFunction, isObject, isString } } = require('chai');
const {dice, total} = require('../lib/cli.js');


describe('cli integration', () => {
    
    describe('toDiceNotation is a function', ()=>{
      it('should exist', () => {
        isFunction(toDiceNotation);
      });
    });
  
    describe('roll should be a function',()=>{
      it('should exist', ()=> {
          isFunction(roll);
      });
    });

    describe('parse-args should be a function that returns an object with two properties, count and sides',()=>{
        it('should exist', ()=> {
            isFunction(require('../lib/parse-args'));
        });

        it('should return an object', ()=>{
            isObject(require('../lib/parse-args')(['two','autoargs']))
        });

        it('the object should have the keys sides and count', ()=>{
            isObject(require('../lib/parse-args')(['two','autoargs']), ['count', 'sides'])
        });
      });

    describe('count should have a value that is a number',()=>{
        it('should exist', ()=> {
            isDefined(require('../lib/parse-args')(['two','autoargs']).count);
        });
        it('should be a number', ()=> {
            isFinite(require('../lib/parse-args')(['two','autoargs']).count);
        });
      });

      describe('sides should have a value that is a number',()=>{
        it('should exist', ()=> {
            isDefined(require('../lib/parse-args')(['two','autoargs']).sides);
        });
        it('should be a number', ()=> {
            isFinite(require('../lib/parse-args')(['two','autoargs']).sides);
        });
      });

      describe('dice the constant', ()=> {
          it('is defined', () =>{
              isDefined(dice);
          });
          it('is a string', () =>{
              isString(dice);
          });
      });
      describe('total the constant', ()=> {
          it('is defined', () =>{
              isDefined(total);
          });
          it('is an integer', () =>{
              isFinite(total);
        });
    });
});
    
  
