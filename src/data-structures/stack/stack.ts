type Node<T> = {
  value: T;
  previous?: Node<T>;
};

export class Stack<T> {
  public length: number;

  private head?: Node<T>;

  constructor() {
    this.head = undefined;
    this.length = 0;
  }

  public push(value: T): void {
    const node: Node<T> = {
      value,
    };

    this.length++;

    if (!this.head) {
      this.head = node;
      return;
    }

    node.previous = this.head;
    this.head = node;
  }

  public pop(): T | undefined {
    if (!this.head) {
      return undefined;
    }
    
    this.length--;

    const head = this.head;
    this.head = this.head.previous;

    return head.value;
  }

  public peek(): T | undefined {
    return this.head?.value;
  }
}