var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  test('The calculator should be able to add', () => {
    calculator.previousTotal = 1
    calculator.add(4)
    expect(calculator.runningTotal).toBe(5);
  });

  test('The calculator should be able to subtract', () => {
    calculator.previousTotal = 7
    calculator.subtract(4)
    expect(calculator.runningTotal).toBe(3);
  });

  test('The calculator should be able to multiply', () => {
    calculator.previousTotal = 3
    calculator.multiply(5)
    expect(calculator.runningTotal).toBe(15);
  });

  test('The calculator should be able to divide', () => {
    calculator.previousTotal = 21
    calculator.divide(7)
    expect(calculator.runningTotal).toBe(3);
  });

  test('The calculator should be able to concatenate numbers', () => {
    calculator.numberClick(1);
    calculator.numberClick(2);
    expect(calculator.runningTotal).toBe(12);
  });

  test('The calculator should be able to chain multiple operations together', () => {
    calculator.numberClick(1);
    calculator.operatorClick('+');
    calculator.numberClick(2);
    calculator.operatorClick('*');
    calculator.numberClick(3);
    calculator.operatorClick('=');
    expect(calculator.runningTotal).toBe(9);
  });

  test('The calculator should be able to clear the running total without affecting the calculation', () => {
    calculator.numberClick(1);
    calculator.operatorClick('+');
    calculator.numberClick(2);
    calculator.clearClick();
    calculator.numberClick(3);
    calculator.operatorClick('=');
    expect(calculator.runningTotal).toBe(4);
  });

});
