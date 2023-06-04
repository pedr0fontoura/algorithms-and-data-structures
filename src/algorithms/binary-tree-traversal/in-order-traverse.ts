import type { BinaryNode } from './tree';

function walk(node: BinaryNode<number> | undefined, out: number[]): number[] {
  if (!node) {
    return out;
  }

  walk(node.left, out);
  out.push(node.value);
  walk(node.right, out);

  return out;
}

export function inOrderTraverse(node: BinaryNode<number>): number[] {
  return walk(node, []);
}