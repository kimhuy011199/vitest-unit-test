import { sum } from './sum.js';

const it = (description, test) => {
  try {
    test();
    console.log(`✅ ${description}`);
  } catch (error) {
    console.error(`❌ ${description}`);
    console.error(error);
  }
};

const expect = (value) => ({
  toBe: (expected) => {
    if (value !== expected) {
      throw new Error(`Expected ${value} to be ${expected}`);
    }
  },
});

it('should add two positive numbers correctly', () => {
  const result = sum(1, 2);
  expect(result).toBe(3);
});

it('should add two negative numbers correctly', () => {
  const result = sum(-1, -2);
  expect(result).toBe(-3);
});
