const { enrichReading } = require('.');

describe('enrichReading', () => {
  it('should return a copy of the original object', () => {
    const inputReading = { customer: 'Ivan', quantity: 10, month: 5, year: 2017 };

    const resultingReading = enrichReading(inputReading);

    expect(resultingReading.customer).toEqual(inputReading.customer);
    expect(resultingReading.month).toEqual(inputReading.month);
    expect(resultingReading.year).toEqual(inputReading.year);
    expect(resultingReading.quantity).toEqual(inputReading.quantity);
  });
});
