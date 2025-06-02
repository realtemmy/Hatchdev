// Write 10 array functions in javascript
// length, push, pop, shift, unshift,indexOf, join, includes, reverse, splice, filter, foreach, map, slice,fill,every,some

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
  unShift(...values) {
    this.array = [...values, ...this.array];
    return this.array.length;
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
  slice(start = 0, end = this.array.length) {
    const newArr = [];
    let index = 0;

    if (start < 0) start += this.array.length;
    if (end < 0) end += this.array.length;

    while (start < end) {
      newArr[index] = this.array[start];

      index++;
      start++;
    }
    return newArr;
  }
  splice(start = 0, deleteCount, ...replacements) {
    // In place
    if (start < 0) start += this.array.length;

    const before = this.slice(0, start);
    const after = this.slice(start + deleteCount);
    this.array = [...before, ...replacements, ...after];

    return this.array;
  }
  with(index, value) {
    if (index > this.array.length) {
      throw new Error("Something exceeded sha");
    }
    const newArr = [...this.array];
    newArr[index] = value;
    return newArr;
  }
  fill(value, start = 0, end = this.array.length) {
    if (start < 0) start += this.array.length;
    if (end < 0) end += this.array.length;

    while (start < end) {
      this.array[start] = value;
      start++;
    }

    return this.array;
  }
  every(cb) {
    for (let i = 0; i < this.array.length; i++) {
      if (!cb(this.array[i])) {
        return false;
      }
    }
    return true;
  }
  findLastIndex(cb) {
    for (let i = this.array.length - 1; i >= 0; i--) {
      if (cb(this.array[i])) {
        return i;
      }
    }
    return -1;
  }

  flat(nestedArr) {
    let flat = [];
    const handleFlat = function (arr) {
      for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
          handleFlat(arr[i]);
        } else {
          flat.push(arr[i]);
        }
      }
    };
    handleFlat(nestedArr);
    return flat;
  }
  join(concat = ",") {
    let string = this.array[0];
    for (let i = 1; i < this.array.length; i++) {
      string = string + concat + this.array[i];
    }

    return string;
  }
  some(cb) {
    // Decided to try reverse loop so I won't forget the syntax
    for (let i = this.array.length - 1; i >= 0; i--) {
      if (cb(this.array[i])) {
        return true;
      }
    }
    return false;
  }
  sort() {}
  toLocaleString() {
    
  }
}

const myFunc = new arrayFunctions();
myFunc.push("Temi");
myFunc.push("Tobi");
myFunc.push("Adebisi");
myFunc.push("Oreoluwa");
// console.log(myFunc.unShift("Olaotan", "Gabriel"))
// console.log(myFunc.indexOf("Temi"))
// console.log(myFunc.includes("Temi"));
// console.log(myFunc.reverse());
// console.log(myFunc.forEach());
// console.log(myFunc.map((element) => element + "s"));
// console.log(myFunc.filter((word) => word.length > 3));
// console.log(myFunc.find((word) => word.length >= 7));
// console.log(myFunc.slice(2, -1));
// console.log(myFunc.splice(1, 0, "Ore", "Jackson", "David", "Deolu"));
// console.log(myFunc.with(0, "Temiloluwa"));
// console.log(myFunc.fill("Temiloluwa"))
// console.log(myFunc.every((value) => value.length > 4));
// console.log(myFunc.findLastIndex((value) => value.length < 5));
// console.log(myFunc.join("-"));
// console.log(myFunc.some((value) => value.length === 4));
console.log(myFunc.flat([1, 2, 3, [4, 5, [6, 7, [8, 9, [10]]]]]));
