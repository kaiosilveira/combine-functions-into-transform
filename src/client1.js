const { acquireReading } = require('./reading');
const { baseRate } = require('./tax-utils');

const aReading = acquireReading();
const baseCharge = baseRate(aReading.month, aReading.year) * aReading.quantity;

console.log(`base charge is ${baseCharge}`);
