class LNode {
  value: number;
  next: LNode | null;
  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  head: LNode | null;
  length: number;

  constructor() {
    this.head = null;
    this.length = 0;
  }

  addFirst(value: number) {
    const newNode = new LNode(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  addLast(value: number) {
    const newNode = new LNode(value);
    let currentNode = this.head;
    if (!currentNode) {
      this.head = newNode;
      this.length++;
      return;
    }
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = newNode;
    this.length++;
  }

  add(index: number, value: number) {
    if (index === 0) {
      this.addFirst(value);
      return;
    }

    const newNode = new LNode(value);
    let prevNode = null;
    let currentIndex = 0;
    let currentNode = this.head;
    while (currentIndex < index && currentNode) {
      prevNode = currentNode;
      currentNode = currentNode.next;
      currentIndex++;
    }

    if (currentIndex !== index || prevNode === null) {
      throw new Error("Index out of bounds");
    }

    prevNode.next = newNode;
    newNode.next = currentNode;
    this.length++;
  }

  get(index: number) {
    let currentNode = this.head;
    while (index > 0 && currentNode) {
      currentNode = currentNode.next;
      index--;
    }
    return currentNode;
  }
  removeFirst() {
    if (this.head) {
      this.head = this.head.next;
      this.length--;
    }
  }
  removeLast() {
    if (!this.head) return;
    if (!this.head.next) {
      this.head = null;
      this.length--;
      return;
    }
    let currentNode = this.head;
    let prevNode = null;

    while (currentNode.next) {
      prevNode = currentNode;
      currentNode = currentNode.next;
    }
    if (prevNode) prevNode.next = null;
    this.length--;
  }
  remove(index: number) {
    if (index === 0) {
      this.removeFirst();
      return;
    }

    let currentIndex = 0,
      prevNode = null,
      currentNode = this.head;

    while (currentNode && currentIndex < index) {
      prevNode = currentNode;
      currentNode = currentNode.next;
      currentIndex++;
    }

    if (!currentNode || !prevNode) {
      throw new Error("Index out of bounds");
    }

    prevNode.next = currentNode.next;
    this.length--;
  }
  size(): number {
    return this.length;
  }
  contains(value: number): boolean {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === value) {
        return true;
      }

      currentNode = currentNode.next;
    }
    return false;
  }
  isEmpty(): boolean {
    return !this.head;
  }
  clear() {
    this.head = null;
    this.length = 0;
  }
  toArray(): number[] {
    const array: number[] = [];
    let currentNode = this.head;
    while (currentNode) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return array;
  }
}

const list = new LinkedList();
list.addLast(1);
list.addLast(2);
list.addFirst(0);
// list.add(1, 4);
// list.removeFirst();
// list.remove(1)
// list.removeLast();
// list.clear()

console.log(list);
// console.log(list.get(0));
// console.log(list.contains(0)
// console.log(list.isEmpty())
// console.log(list.toArray());
console.log(list.size());
