const { acquireReading, enrichReading } = require('./reading');

const rawReading = acquireReading();
const aReading = enrichReading(rawReading);
const basicChargeAmount = aReading.baseCharge;

console.log(`basic charge amount is ${basicChargeAmount}`);
