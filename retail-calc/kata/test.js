const chai = require("chai");
const calculator = require('./index');
const assert = chai.assert;

describe('Calculates total price with discount', function() {

    // Add your test cases here
    // Use Chai Assertion Library: https://www.chaijs.com/api/assert/

    it('Throws error if no argument was given', function() {
        assert.throws(() => calculator(), Error);
    });

});
