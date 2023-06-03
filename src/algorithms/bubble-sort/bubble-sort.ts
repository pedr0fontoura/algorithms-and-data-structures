export function bubbleSort(values: number[]): void {
  for(let i = 0; i < values.length; i++) {
    for (let j = 0; j < values.length - i - 1; j++) {
      const value = values[j];

      if (value > values[j + 1]) {
        values[j] = values[j + 1];
        values[j + 1] = value;
      }
    }
  }
}