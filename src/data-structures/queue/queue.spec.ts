import { describe, it } from 'node:test';
import assert from 'assert'

import { Queue } from './queue';

describe('Queue data structure', () => {
  const queue = new Queue<number>();

  queue.enqueue(5);
  queue.enqueue(7);
  queue.enqueue(9);

  it('should return the first value enqueued when dequeuing', () => {
    assert.strictEqual(queue.dequeue(), 5);
  });

  it('should update the length of the queue when dequeuing', () => {
    assert.strictEqual(queue.length, 2);
  });

  it('should update the length of the queue when enqueueing', () => {
    queue.enqueue(11);
    assert.strictEqual(queue.length, 3);
  });

  it('should peek the head value', () => {
    queue.dequeue();
    queue.dequeue();
    assert.strictEqual(queue.peek(), 11);
  });
});