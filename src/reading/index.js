const { cloneDeep } = require('lodash');

const reading = { customer: 'Ivan', quantity: 10, month: 5, year: 2017 };

function acquireReading() {
  return reading;
}

function enrichReading(aReading) {
  const result = cloneDeep(aReading);
  return result;
}

module.exports = { acquireReading, enrichReading };
