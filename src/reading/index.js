const { cloneDeep } = require('lodash');
const { baseRate } = require('../tax-utils');

const reading = { customer: 'Ivan', quantity: 10, month: 5, year: 2017 };

function acquireReading() {
  return reading;
}

function enrichReading(aReading) {
  const result = cloneDeep(aReading);
  result.baseCharge = calculateBaseCharge(result);
  return result;
}

function calculateBaseCharge(aReading) {
  return baseRate(aReading.month, aReading.year) * aReading.quantity;
}

module.exports = { acquireReading, enrichReading };
