const assert = require('assert')
const { When, Then } = require('@cucumber/cucumber')
const { factorial } = require('../../src/factorial')

When('I ask for factorial {int}', function(x) {
    this.argument = x
});

Then('I should get the result {int}', function(expectedResult) {
    assert.equal(factorial(this.argument), expectedResult)
});
