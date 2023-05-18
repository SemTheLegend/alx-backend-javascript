const chai = require('chai');
const expect = chai.expect;
const calculateNumber = require('./2-calcul.js');

describe('Tests calculateNumber: 2', function () {
  it('Tests the if the type === SUM', function () {
    expect(calculateNumber('SUM', 4, 9)).to.be.equal(13);
    expect(calculateNumber('SUM', 1.4, 4.5)).to.be.equal(6);
    expect(calculateNumber('SUM', 6.8, -5.6)).to.be.equal(1);
  });
  it('Tests if the type === SUBTRACT', function () {
    expect(calculateNumber('SUBTRACT', 7, 9)).to.be.equal(-2);
    expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.be.equal(-4);
  });
  it('Tests if the type === DIVIDE', function () {
    expect(calculateNumber('DIVIDE', 10, 2)).to.be.equal(5);
    expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.be.equal(0.2);
  });
  it('Tests if the type === DIVIDE && b is zero', function () {
    expect(calculateNumber('DIVIDE', 10, 0)).to.be.equal('Error');
  });
});
