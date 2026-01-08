/**
 * Array utility functions
 */

/**
 * Filter array by predicate
 */
export function filterArray<T>(arr: T[], predicate: (item: T) => boolean): T[] {
  return arr.filter(predicate);
}

/**
 * Map array using function
 */
export function mapArray<T, U>(arr: T[], mapper: (item: T) => U): U[] {
  return arr.map(mapper);
}

/**
 * Sort array of numbers
 */
export function sortNumbers(arr: number[], ascending: boolean = true): number[] {
  return [...arr].sort((a: number, b: number) => (ascending ? a - b : b - a));
}

/**
 * Remove duplicates from array
 */
export function removeDuplicates<T>(arr: T[]): T[] {
  return [...new Set(arr)];
}

/**
 * Flatten nested array
 */
export function flattenArray(arr: any[]): any[] {
  return arr.reduce((flat: any[], item: any) => {
    return flat.concat(Array.isArray(item) ? flattenArray(item) : item);
  }, []);
}

/**
 * Get unique elements
 */
export function getUnique<T>(arr: T[]): T[] {
  return Array.from(new Set(arr));
}

/**
 * Check if array includes element
 */
export function includes<T>(arr: T[], element: T): boolean {
  return arr.includes(element);
}

/**
 * Find index of element
 */
export function indexOf<T>(arr: T[], element: T): number {
  return arr.indexOf(element);
}

/**
 * Reverse array
 */
export function reverseArray<T>(arr: T[]): T[] {
  return [...arr].reverse();
}

/**
 * Partition array into chunks
 */
export function chunkArray<T>(arr: T[], chunkSize: number): T[][] {
  const chunks: T[][] = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    chunks.push(arr.slice(i, i + chunkSize));
  }
  return chunks;
}
