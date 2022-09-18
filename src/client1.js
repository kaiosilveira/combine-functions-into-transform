const { acquireReading, enrichReading } = require('./reading');

const rawReading = acquireReading();
const aReading = enrichReading(rawReading);
const baseCharge = aReading.baseCharge;

console.log(`base charge is ${baseCharge}`);
