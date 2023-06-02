export function binarySearch(values: number[], valueToFind: number): number {

  let lower = 0;
  let upper = values.length;

  while (lower < upper) {
    const middle = Math.floor((lower + (upper - lower) / 2))
    const value = values[middle];

    if (value === valueToFind) {
      return middle;
    } else if (value > valueToFind) {
      upper = middle;
    } else if (value < valueToFind) {
      lower = middle + 1;
    }
  }
  
  return -1;
}