const utils = require('./utils.js');
const Utils = new utils();

function sendPaymentRequestToApi(totalAmount, totalShipping) {
  const a = totalAmount;
  const b = totalShipping;
  const result = Utils.calculateNumber('SUM', a, b);
  console.log(`The total is: ${result}`);
}

module.exports = sendPaymentRequestToApi;
