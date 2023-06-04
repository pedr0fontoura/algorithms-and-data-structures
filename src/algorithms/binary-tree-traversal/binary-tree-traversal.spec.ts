import { describe, it } from 'node:test';
import assert from 'assert'

import { tree } from './tree';
import { preOrderTraverse } from './pre-order-traverse';
import { inOrderTraverse } from './in-order-traverse';
import { postOrderTraverse } from './post-order-traverse';

describe('Binary Tree traversal algorithms', () => {
  it('should pre order traverse the binary tree', () => {
    assert.deepEqual(preOrderTraverse(tree), [20, 10, 5, 7, 15, 50, 30, 29, 45, 100]);
  });

  it('should in order traverse the binary tree', () => {
    assert.deepEqual(inOrderTraverse(tree), [5, 7, 10, 15, 20, 29, 30, 45, 50, 100]);
  });

  it('should post order traverse the binary tree', () => {
    assert.deepEqual(postOrderTraverse(tree), [7, 5, 15, 10, 29, 45, 30, 100, 50, 20]);
  });
});