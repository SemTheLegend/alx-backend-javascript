const calculateNumber = require('./1-calcul.js');
const assert = require('assert');

describe('calculateNumber : 1', function () {
  it('Tests the if the type === SUM', function () {
    assert.equal(calculateNumber('SUM', 4, 9), 13);
    assert.equal(calculateNumber('SUM', 1.4, 4.5), 6);
    assert.equal(calculateNumber('SUM', 6.8, -5.6), 1);
  });
  it('Tests if the type === SUBTRACT', function () {
    assert.equal(calculateNumber('SUBTRACT', 7, 9), -2);
    assert.equal(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
  });
  it('Tests if the type === DIVIDE', function () {
    assert.equal(calculateNumber('DIVIDE', 10, 2), 5);
    assert.equal(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
  });
  it('Tests if the type === DIVIDE && b is zero', function () {
    assert.equal(calculateNumber('DIVIDE', 10, 0), 'Error');
  });
});
