import { describe, it, expect } from 'vitest';
import { sum } from '../sum';

// describe() is a test suite
describe('sum', () => {
  // it() is a test case
  it('should adds positive numbers correctly', () => {
    // expect() is an assertion
    expect(sum(1, 2)).toBe(3);
  });

  it('should adds negative numbers correctly', () => {
    expect(sum(-1, -2)).toBe(-3);
  });
});
