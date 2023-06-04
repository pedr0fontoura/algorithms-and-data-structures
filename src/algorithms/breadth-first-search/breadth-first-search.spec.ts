import { describe, it } from 'node:test';
import assert from 'assert'

import { tree } from './tree';
import { BFS } from './breadth-first-search';

describe('Binary Tree breadth first search', () => {
  it('should find a value in the tree', () => {
    assert.deepEqual(BFS(tree, 7), true);
  });
}); 