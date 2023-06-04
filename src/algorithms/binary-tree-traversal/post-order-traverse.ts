import type { BinaryNode } from './tree';

function walk(node: BinaryNode<number> | undefined, out: number[]): number[] {
  if (!node) {
    return out;
  }

  walk(node.left, out);
  walk(node.right, out);
  out.push(node.value);

  return out;
}

export function postOrderTraverse(node: BinaryNode<number>): number[] {
  return walk(node, []);
}