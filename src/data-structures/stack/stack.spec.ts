import { describe, it } from 'node:test';
import assert from 'assert'

import { Stack } from './stack';

describe('Stack data structure', () => {
  const stack = new Stack<number>();

  stack.push(1);
  stack.push(2);
  stack.push(5);

  it('should return the last value pushed into the stack on pop', () => {
    assert.strictEqual(stack.pop(), 5);
  });

  it('should update the length when removing a value from the stack', () => {
    assert.strictEqual(stack.length, 2);
  });

  it('should update the length when pushing a value into the stack', () => {
    stack.push(5);
    assert.strictEqual(stack.length, 3);
  });

  it('should return the last value pushed into the stack on peek', () => {
    assert.strictEqual(stack.peek(), 5);
  });

  it('should return undefined on pop if the stack is empty', () => {
    stack.pop();
    stack.pop();
    stack.pop();
    assert.strictEqual(stack.pop(), undefined);
  });
});