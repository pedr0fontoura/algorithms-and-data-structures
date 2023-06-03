import { describe, it } from 'node:test';
import assert from 'assert'

import { bubbleSort } from './bubble-sort';

describe('Bubble Sort algorithm', () => {
  it('should sort the array values in place', () => {
    const foo = [1, 3, 7, 4, 2];
    
    bubbleSort(foo);

    assert.deepEqual(foo, [1, 2, 3, 4, 7]);
  });
});