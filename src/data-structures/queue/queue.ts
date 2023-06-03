type Node<T> = {
  value: T;
  next?: Node<T>;
};

export class Queue<T> {
  public length: number;

  private head?: Node<T>;
  private tail?: Node<T>;

  constructor() {
    this.head = this.tail = undefined;
    this.length = 0;
  }

  public enqueue(item: T): void {
    const node: Node<T> = {
      value: item,
    }

    this.length++;

    if (!this.tail) {
      this.tail = this.head = node;
      return;
    }

    this.tail.next = node;
    this.tail = node;
  }

  public dequeue(): T | undefined {
    if (!this.head) {
      return undefined;
    }

    this.length--;

    const head = this.head;
    this.head = this.head.next;

    if (this.length === 0) {
      this.head = this.tail = undefined;
    }

    return head.value;
  }

  public peek(): T | undefined {
    return this.head?.value;
  }
}