import { it, expect } from 'vitest';

it('toBe with primitive values', () => {
  const a = 1;
  const b = 1;
  expect(a).toBe(b); // true
  expect(a).toEqual(b); // true
});

it('toEqual with objects', () => {
  const obj1 = { a: 1, b: 2 };
  const obj2 = { a: 1, b: 2 };
  // expect(obj1).toBe(obj2); // false
  expect(obj1).toEqual(obj2); // true
});

it('toCloseTo with floating point numbers', () => {
  const a = 0.1 + 0.2;
  // expect(a).toBe(0.3); // false
  expect(a).toBeCloseTo(0.3); // true
});

it('toMatchObject and toHaveProperty', () => {
  const obj1 = { a: 1, b: 2 };
  const obj2 = { a: 1 };
  // expect(obj1).toEqual(obj2); // false
  expect(obj1).toMatchObject(obj2); // true
  expect(obj1).toHaveProperty('b'); // true
});

it('toContain and toHaveLength', () => {
  const arr = [1, 2, 3];
  arr.push(5);
  expect(arr).toContain(5); // true
  expect(arr).toHaveLength(4); // true
});

it('too loose assertion', () => {
  const sum = 1 + 2;
  expect(sum).toBeDefined(); // Always pass because it only checks if the value is defined
  expect(typeof sum).toBe('number'); // Always pass because it only checks if the type is correct
  // Should be checked with strict equality
  expect(sum).toBe(3);
});

it('too tight assertion', () => {
  const errorMsg = 'Page not found';
  expect(errorMsg).toBe('Page not found'); // Pass if the error message is exactly the same
  // Should be checked with regular expression
  // It will pass even if the error message is 'Page not found' or 'Page not found.' or 'Page not found!'
  expect(errorMsg).toMatch(/not found/i);
});
