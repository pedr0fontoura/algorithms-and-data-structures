import { describe, it } from 'node:test';
import assert from 'assert'

import { binarySearch } from './binary-search';

// https://github.com/ThePrimeagen/kata-machine for the test cases

describe('Binary search algorithm', () => {
  const foo = [1, 3, 4, 69, 71, 81, 90, 99, 420, 1337, 69420];

  it('should return the right index if the value was found', () => {
    assert.strictEqual(binarySearch(foo, 69), 3);
    assert.strictEqual(binarySearch(foo, 69420), 10);
    assert.strictEqual(binarySearch(foo, 1), 0);
  });

  it('should return -1 if the value was not found', () => {
    assert.strictEqual(binarySearch(foo, 0), -1);
  });
});