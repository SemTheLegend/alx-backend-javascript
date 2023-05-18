const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('Tests the calculateNumber function', function () {
  it('Tests addition of positive integers', function () {
    assert.equal(calculateNumber(4, 5), 9);
  });
  it('Tests the addition of 0 and 0', function () {
    assert.equal(calculateNumber(0, 0), 0);
  })
  it('Tests addition of float numbers', function () {
    assert.equal(calculateNumber(1.3, 1, 3), 2);
  });
  it('Tests addition of float and integer', function () {
    assert.equal(calculateNumber(9.9, 9), 19);
  });
  it('Tests addition of negative integers', function () {
    assert.equal(calculateNumber(-4, -10), -14);
  });
  it('Tests  addition of negative floats', function () {
    assert.equal(calculateNumber(-1.6, -6.3), -8);
  });
  it('Tests addition of a negative float with a positive float', function () {
    assert.equal(calculateNumber(-5.9, 10.8), 5);
  });
  it('Tests the addition of booleans', function () {
    assert.equal(calculateNumber(true, true), 2);
    assert.equal(calculateNumber(false, false), 0);
    assert.equal(calculateNumber(false, true), 1);
    assert.equal(calculateNumber(true, false), 1);
  });
});
