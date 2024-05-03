import { describe, it, expect, test } from 'vitest';
import { isLuckyNumber } from '../positive-negative';

describe('isLuckyNumber', () => {
  // // Positive test cases
  // it('should return true if the number is between 1 and 8', () => {
  //   expect(isLuckyNumber(4)).toBe(true);
  // });
  // // Boundary value positive test cases
  // it('should return true if the number is 1', () => {
  //   expect(isLuckyNumber(1)).toBe(true);
  // });
  // it('should return true if the number is 8', () => {
  //   expect(isLuckyNumber(8)).toBe(true);
  // });

  // // Negative test cases
  // it('should return false if the number is not between 1 and 8', () => {
  //   expect(isLuckyNumber(-20)).toBe(false);
  //   expect(isLuckyNumber(20)).toBe(false);
  // });
  // // Boundary value negative test cases
  // it('should return false if the number is less than 1', () => {
  //   expect(isLuckyNumber(0)).toBe(false);
  // });
  // it('should return false if the number is greater than 8', () => {
  //   expect(isLuckyNumber(9)).toBe(false);
  // });

  // Parameterized tests
  test.each([
    { input: 1, scenario: '1', expected: true },
    { input: 4, scenario: 'between 1 and 8', expected: true },
    { input: 8, scenario: '8', expected: true },
    { input: -20, scenario: 'not between 1 and 8', expected: false },
    { input: 0, scenario: 'less than 1', expected: false },
    { input: 9, scenario: 'greater than 8', expected: false },
    { input: 20, scenario: 'not between 1 and 8', expected: false },
  ])(
    'should return $expected if the number is $scenario',
    ({ input, expected }) => {
      expect(isLuckyNumber(input)).toBe(expected);
    }
  );

  // Negative test cases for invalid input
  it('should return false if the input is not a number', () => {
    expect(isLuckyNumber('1')).toBe(false);
    expect(isLuckyNumber(null)).toBe(false);
  });
});
