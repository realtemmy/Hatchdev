class DNode {
  value: number;
  next: DNode | null;
  prev: DNode | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  head: DNode | null;
  length: number;
  constructor() {
    this.head = null;
    this.length = 0;
  }

  addFirst(value: number) {
    const newNode = new DNode(value);
    if (!this.head) {
      this.length++;
      return (this.head = newNode);
    }
    this.head.prev = newNode;
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }
  addLast(value: number) {
    const newNode = new DNode(value);

    if (!this.head) {
      this.head = newNode;
    } else {
      let currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
      newNode.prev = currentNode;
    }

    this.length++;
  }

  removeFirst() {
    if (!this.head) return;
    this.head = this.head.next;
    this.length--;
  }
  removeLast() {
    if (!this.head) return;
    if (!this.head.next) {
      this.length = 0;
      return (this.head = null);
    }
    let currentNode = this.head,
      prevNode = null;
    while (currentNode.next) {
      prevNode = currentNode;
      currentNode = currentNode.next;
    }
    if (prevNode) prevNode.next = null;
    this.length--;
  }
  find(value: number): boolean {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === value) return true;
      currentNode = currentNode.next;
    }

    return false;
  }
  remove(index: number) {
    if (!this.head || index < 0 || index >= this.length) return;

    if (index === 0) {
      return this.removeFirst();
    }
    let currentIndex = 0,
      currentNode = this.head;

    while (currentIndex < index) {
      currentNode = currentNode.next!;
      currentIndex++;
    }

    if (currentNode.prev) currentNode.prev.next = currentNode.next;
    if (currentNode.next) currentNode.next.prev = currentNode.prev;
    this.length--;
  }
  reverse() {}
  sort() {}
}

const Dlist = new DoublyLinkedList();
Dlist.addFirst(0);
Dlist.addLast(1);
Dlist.addLast(2);
// Dlist.removeFirst();
// Dlist.removeLast();
// console.log(Dlist.find(1));
Dlist.remove(1);

console.log(Dlist);
