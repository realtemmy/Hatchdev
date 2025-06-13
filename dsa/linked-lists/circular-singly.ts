class CNode {
  value: number;
  next: CNode | null;
  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

class CircularSingly {
  head: CNode | null;
  length: number;

  constructor() {
    this.head = null;
    this.length = 0;
  }

  addFirst(value: number) {
    const newNode = new CNode(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }
  addLast(value: number): void {
    const newNode = new CNode(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.length++;
  }

  addAt(index: number, value: number): void {
    if (index < 0 || index > this.length) {
      throw new Error("Index out of bounds");
    }

    if (index === 0) {
      this.addFirst(value);
      return;
    }

    const newNode = new CNode(value);
    let currentNode = this.head;
    let prevNode: CNode | null = null;
    let currentIndex = 0;

    while (currentIndex < index) {
      prevNode = currentNode;
      currentNode = currentNode!.next;
      currentIndex++;
    }

    newNode.next = currentNode;
    prevNode!.next = newNode;
    this.length++;
  }

  removeFirst() {
    
  }
}

const Clist = new CircularSingly();
// Clist.addFirst(1);
Clist.addFirst(2);
Clist.addLast(3)
Clist.addAt(0,5)

console.log(Clist);
