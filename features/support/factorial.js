const assert = require('assert')
const { When, Then } = require('@cucumber/cucumber')
const { factorial } = require('../../src/factorial')

When('I ask for factorial {int}', function(x) {
    this.argument = x
});

Then('I should get the result {int}', function(expectedResult) {
    assert.equal(factorial(this.argument), expectedResult)
});

 When('I ask for factorials', function () { });

Then('I should get the results', function (table) {
    for (let i = 0; i < table.hashes().length; i++) {
        let h = table.hashes()[i]
        console.log(h)
        let x = h['argument']
        let r = h['result']
        assert.equal(r, factorial(x))
    }
});

