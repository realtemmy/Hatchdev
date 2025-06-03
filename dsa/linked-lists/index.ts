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

  constructor() {
    this.head = null;
  }

  add(value: number) {
    const newNode = new LNode(value);
    let currentNode = this.head;
    if (!currentNode) {
      this.head = newNode;
      return;
    }
    while (currentNode && currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = newNode;
  }
}
