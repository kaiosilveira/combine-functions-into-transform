const { acquireReading, enrichReading } = require('./reading');
const { taxThreshold } = require('./tax-utils');

const rawReading = acquireReading();
const aReading = enrichReading(rawReading);
const base = aReading.baseCharge;
const taxableCharge = Math.max(0, base - taxThreshold(aReading.year));

console.log(`base charge is ${base}`);
console.log(`taxable charge is ${taxableCharge}`);
