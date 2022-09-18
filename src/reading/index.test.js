const { enrichReading } = require('.');

describe('enrichReading', () => {
  const inputReading = { customer: 'Ivan', quantity: 10, month: 5, year: 2017 };

  it('should return a copy of the original object', () => {
    const resultingReading = enrichReading(inputReading);
    expect(resultingReading.customer).toEqual(inputReading.customer);
    expect(resultingReading.month).toEqual(inputReading.month);
    expect(resultingReading.year).toEqual(inputReading.year);
    expect(resultingReading.quantity).toEqual(inputReading.quantity);
  });

  it('should enrich the reading with the base charge', () => {
    const resultingReading = enrichReading(inputReading);
    expect(typeof resultingReading.baseCharge).toBe('number');
  });
});
