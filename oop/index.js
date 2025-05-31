// Write 10 array functions in javascript
// length, push, pop, shift, unshift,indexOf, join, includes, reverse, splice, filter, foreach, map, slice

class arrayFunctions {
  constructor(value) {
    this.value = value;
    this.array = [];
  }

  length(value) {
    return value.length;
  }

  push(value) {
    this.array[this.length(this.array)] = value;
    return this.array;
  }
  pop() {
    const newArr = [];
    let last;
    for (let i = 0; i < this.array.length; i++) {
      if (i === this.array.length - 1) {
        last = this.array[i];
        break;
      }
      newArr[i] = this.array[i];
    }

    this.array = newArr;

    return last;
  }
  shift() {
    const first = this.array[0];
    const newArr = [];
    for (let i = 1; i < this.array.length; i++) {
      newArr[i - 1] = this.array[i];
    }
    this.array = newArr;
    return first;
  }
  indexOf(value) {
    for (let i = 0; i < this.array.length; i++) {
      if (this.array[i] === value) {
        return i;
      }
    }
    return -1;
  }
  includes(value) {
    for (let i = 0; i < this.array.length; i++) {
      if (this.array[i] === value) {
        return true;
      }
    }
    return false;
  }
  reverse() {
    if (this.array.length === 0) return this.array;
    
    let left = 0,
      right = this.array.length - 1;
    while (left < right) {
      // Swap
      let temp = this.array[left];
      this.array[left] = this.array[right];
      this.array[right] = temp;

      left++;
      right--;
    }

    return this.array;
  }

  forEach(cb) {
    for (let i = 0; i < this.array.length; i++) {
      cb(this.array[i]);
    }

    function cb(element) {
      console.log(element);
    }
  }

  map(cb) {
    const newArr = [];
    for (let i = 0; i < this.array.length; i++) {
      const newEL = cb(this.array[i]);
      newArr.push(newEL);
    }

    return newArr;
  }
  filter(cb) {
    const newArr = [];
    for (let i = 0; i < this.array.length; i++) {
      if (cb(this.array[i])) {
        newArr.push(this.array[i]);
      }
    }
    return newArr;
  }
  find(cb) {
    for (let i = 0; i < this.array.length; i++) {
      if (cb(this.array[i])) {
        return this.array[i];
      }
    }

    return [];
  }
  slice(start, end = this.array.length) {
    if (start < 0) start += this.array.length;
  }
}

const myFunc = new arrayFunctions();
myFunc.push("Temi");
myFunc.push("Tobi");
myFunc.push("Adebisi");
myFunc.push("Oreoluwa");
// console.log(myFunc.indexOf("Temi"))
// console.log(myFunc.includes("Temi"));
console.log(myFunc.reverse())
// console.log(myFunc.forEach());
// console.log(myFunc.map((element) => element + "s"));
// console.log(myFunc.filter((word) => word.length > 3));
// console.log(myFunc.find((word) => word.length >= 7));
