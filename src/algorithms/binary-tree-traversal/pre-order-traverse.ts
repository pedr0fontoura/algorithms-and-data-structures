import type { BinaryNode } from './tree';

function walk(node: BinaryNode<number> | undefined, out: number[]): number[] {
  if (!node) {
    return out;
  }

  out.push(node.value);
  walk(node.left, out);
  walk(node.right, out);

  return out;
}

export function preOrderTraverse(node: BinaryNode<number>): number[] {
  return walk(node, []);
}