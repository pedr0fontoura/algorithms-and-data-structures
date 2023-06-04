import { describe, it } from 'node:test';
import assert from 'assert'

import { pathfind } from './recursive-pathfinding';

describe('Recursive pathfinding algorithm', () => {
  it('should return the path to the exit of the maze', () => {
    const map = [
      "#### #",
      "#    #",
      "# ####",
      "#    #",
      "## ###",
    ]
    
    const path = pathfind(map, '#', { x: 4, y: 0 }, { x: 2, y: 4 });

    assert.deepEqual(path, [
      { x: 4, y: 0 },
      { x: 4, y: 1 },
      { x: 3, y: 1 },
      { x: 2, y: 1 },
      { x: 1, y: 1 },
      { x: 1, y: 2 },
      { x: 1, y: 3 },
      { x: 2, y: 3 },
      { x: 2, y: 4 },
    ]);
  });
});