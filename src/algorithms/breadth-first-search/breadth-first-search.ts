import { Queue } from '../../data-structures/queue/queue';

import { BinaryNode } from './tree';

export function BFS(head: BinaryNode<number>, value: number): boolean {
  const queue = new Queue<BinaryNode<number>>();

  queue.enqueue(head);

  while (queue.length > 0) {
    const node = queue.dequeue();
    if (!node) continue;

    if (node.value === value) {
      return true;
    }

    if (node.left) {
      queue.enqueue(node.left);
    }

    if (node.right) {
      queue.enqueue(node.right);
    }
  }

  return false;
}