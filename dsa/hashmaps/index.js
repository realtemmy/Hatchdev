// Build your hashmap, handle your own collision and create your own hash function

// ========= Using separate chaining(linked lists) ============ //

class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashMap {
  array = [];
  constructor(capacity) {
    this.capacity = capacity;
    this.length = 0;
  }

  _hash(hashKey) {
    let sum = 0;
    for (let letter in hashKey) {
      sum += hashKey.charCodeAt(letter);
    }
    return sum % this.capacity;
  }

  set(key, value) {
    const hashedKey = this._hash(key);
    const newNode = new Node(key, value);
    // Check if a node exist in that position
    if (!this.array[hashedKey]) {
      this.array[hashedKey] = newNode;
    } else {
      // chain the nodes
      let currentNode = this.array[hashedKey];
      while (currentNode.next) {
        currentNode = currentNode.next;
      }

      currentNode.next = newNode;
    }

    this.length++;
    return this.array;
  }

  get(key) {
    const hashedKey = this._hash(key);
    let currentNode = this.array[hashedKey];
    while (currentNode && currentNode.key !== key) {
      currentNode = currentNode.next;
    }

    return currentNode?.value;
  }
  has(key) {
    const hashedKey = this._hash(key);
    let currentNode = this.array[hashedKey];
    while (currentNode) {
      if (currentNode.key === key) {
        return true;
      }
      currentNode = currentNode.next;
    }

    return false;
  }
  delete(key) {
    const hashedKey = this._hash(key);
    let currentNode = this.array[hashedKey];
    let prevNode = null;
    while (currentNode) {
      if (currentNode.key === key) {
        // delete node
        if (prevNode === null) {
          this.array[hashedKey] = currentNode.next;
        } else {
          prevNode.next = currentNode.next;
        }
        this.length--;
        return true;
      }
      prevNode = currentNode;
      currentNode = currentNode.next;
    }
    return false;
  }
  clear() {
    this.array = [];
    this.length = 0;
  }
  size() {
    return this.length;
  }
  keys() {
    const keys = [];
    for (let i = 0; i < this.array.length; i++) {
      let currentNode = this.array[i];
      while (currentNode) {
        keys.push(currentNode.key);
        currentNode = currentNode.next;
      }
    }

    return keys;
  }
  values() {
    const values = [];
    for (let i = 0; i < this.array.length; i++) {
      let currentNode = this.array[i];
      while (currentNode) {
        values.push(currentNode.value);
        currentNode = currentNode.next;
      }
    }

    return values;
  }
}

const map = new HashMap(5);
map.set("date", 5);
map.set("abc", 3);
map.set("acb", 4);
// map.delete("date");
// console.log(map.size());

// console.log(map.get("ab"));
// console.log(map.has("acb"))
// console.log(map.keys());
// console.log(map.values())

// console.log(map.array);

map.clear();
console.log(map);
