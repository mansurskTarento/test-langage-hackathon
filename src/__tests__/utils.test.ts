/**
 * Unit tests for utility functions
 */

import { add, subtract, multiply, divide } from '../utils/math';
import { capitalize, toCamelCase, toSnakeCase } from '../utils/string';

describe('Math Utils', () => {
  test('add should return sum of two numbers', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('subtract should return difference', () => {
    expect(subtract(5, 3)).toBe(2);
  });

  test('multiply should return product', () => {
    expect(multiply(4, 5)).toBe(20);
  });

  test('divide should return quotient', () => {
    expect(divide(10, 2)).toBe(5);
  });

  test('divide by zero should throw error', () => {
    expect(() => divide(10, 0)).toThrow('Division by zero');
  });
});

describe('String Utils', () => {
  test('capitalize should uppercase first letter', () => {
    expect(capitalize('hello')).toBe('Hello');
  });

  test('toCamelCase should convert to camelCase', () => {
    expect(toCamelCase('hello_world')).toBe('helloWorld');
  });

  test('toSnakeCase should convert to snake_case', () => {
    expect(toSnakeCase('helloWorld')).toBe('hello_world');
  });
});
