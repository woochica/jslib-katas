const chai = require("chai");
const calculator = require('./index');
const assert = chai.assert;

describe('Calculates total price with discount', function() {

    // Use Chai Assertion Library: https://www.chaijs.com/api/assert/

    it('Throws error if no argument was given', function() {
        assert.throws(() => calculator(), Error);
    });

    it('Takes quantity and unit price and calculates total', function() {
        assert.equal(246, calculator(12, 20.5));
    });

    it('Gets 3% discount over $1000 total', function() {
        assert.equal(989.4, calculator(100, 10.2));
    });

    // Add more test cases here

});
