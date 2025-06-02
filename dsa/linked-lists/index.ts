class Node {
  value: number;
  next: Node | null;
  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  head: Node | null;

  constructor() {
    this.head = null;
  }

  add(value: number) {
    const newNode = new Node(value);
    let currentNode = this.head;
    if (!currentNode) {
      return currentNode = newNode;
    }
    while (currentNode && currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = newNode;
  }
}
