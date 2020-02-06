const assert = require('assert');
const split = require('./kata');


describe('Splits string into elements and returns array', function() {

    it('Returns an array', function() {
        const arr = split("hello world");
        assert.equal(Array.isArray(arr), true);
    });

    it('Splits word by space', function() {
        assert.deepEqual(split("hello world", " "), ["hello", "world"]);
    });

});

describe('Can be invoked on String object', function() {

    it('mySplit is a function', function() {
        assert.equal(typeof "hello world".mySplit, "function");
    });

});
