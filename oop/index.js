// Write 10 array functions in javascript
// length, push, pop, shift, unshift,indexOf, join, includes, reverse, splice

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
}

const myFunc = new arrayFunctions();
// console.log(myFunc.length("name"));
console.log(myFunc.push("tobi"));
console.log(myFunc.push("temi"));
// console.log(myFunc.pop());
console.log(myFunc.shift());
