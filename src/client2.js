const { acquireReading, enrichReading } = require('./reading');

const rawReading = acquireReading();
const aReading = enrichReading(rawReading);
const base = aReading.baseCharge;
const taxableCharge = aReading.taxableCharge;

console.log(`base charge is ${base}`);
console.log(`taxable charge is ${taxableCharge}`);
