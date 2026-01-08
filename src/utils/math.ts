/**
 * Utility functions for the application
 */

/**
 * Add two numbers
 */
export function add(a: number, b: number): number {
  return a + b;
}

/**
 * Subtract two numbers
 */
export function subtract(a: number, b: number): number {
  return a - b;
}

/**
 * Multiply two numbers
 */
export function multiply(a: number, b: number): number {
  return a * b;
}

/**
 * Divide two numbers
 */
export function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error('Division by zero');
  }
  return a / b;
}

/**
 * Calculate factorial
 */
export function factorial(n: number): number {
  if (n < 0) {
    throw new Error('Factorial of negative number');
  }
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

/**
 * Check if a number is prime
 */
export function isPrime(num: number): boolean {
  if (num <= 1) {
    return false;
  }
  if (num <= 3) {
    return true;
  }
  if (num % 2 === 0 || num % 3 === 0) {
    return false;
  }
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) {
      return false;
    }
  }
  return true;
}

/**
 * Get array sum
 */
export function arraySum(arr: number[]): number {
  return arr.reduce((sum: number, num: number) => sum + num, 0);
}

/**
 * Get array average
 */
export function arrayAverage(arr: number[]): number {
  if (arr.length === 0) {
    throw new Error('Cannot calculate average of empty array');
  }
  return arraySum(arr) / arr.length;
}

/**
 * Reverse a string
 */
export function reverseString(str: string): string {
  return str.split('').reverse().join('');
}

/**
 * Check if string is palindrome
 */
export function isPalindrome(str: string): boolean {
  const cleaned: string = str.toLowerCase().replace(/\s/g, '');
  return cleaned === reverseString(cleaned);
}
