const sinon = require('sinon');
const chai = require('chai');
const expect = chai.expect;
const sendPaymentRequestToApi = require('./3-payment.js');

describe('sendPaymentRequestToApi', function () {
  it('spies the sendPaymentRequestToApi', function () {
    const spy = sinon.spy(sendPaymentRequestToApi);
    const a = 100;
    const b = 20;
    const str = 'SUM';
    sendPaymentRequestToApi(str, a, b);
    expect(spy.calledOnce).to.be.true;
  });
});
