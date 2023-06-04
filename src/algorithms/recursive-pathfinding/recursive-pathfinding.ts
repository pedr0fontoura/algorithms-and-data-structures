export type Point = {
  x: number;
  y: number;
}

const directions: Point[] = [
  { x: 0, y: 1 },
  { x: 1, y: 0 },
  { x: 0, y: -1 },
  { x: -1, y: 0 },
];

function walk(map: string[], wall: string, visited: boolean[][], position: Point, end: Point, path: Point[]): boolean {
  if (
    (position.x < 0 || position.x >= map[0].length) ||
    (position.y < 0 || position.y >= map.length)
  ) {
    return false;
  }

  if (map[position.y][position.x] === wall) {
    return false;
  }

  if (visited[position.y][position.x]) {
    return false;
  }

  path.push(position);

  if (position.x === end.x && position.y === end.y) {
    return true;
  }

  visited[position.y][position.x] = true;

  for (let i = 0; i < directions.length; i++) {
    const delta = directions[i];
    const x = position.x + delta.x;
    const y = position.y + delta.y;
  
    if (walk(map, wall, visited, { x, y }, end, path)) {
      return true;
    }
  }

  path.pop();

  return false;
};


export function pathfind(map: string[], wall: string, start: Point, end: Point): Point[] {
  const visited = [];

  for (let i = 0; i < map.length; i++) {
    visited.push(
      Array(map[0].length).fill(false)
    )
  }

  const path: Point[] = [];

  walk(map, wall, visited, start, end, path);

  return path;
}