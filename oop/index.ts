// Write 10 javascript array functions

class arrFunc {
  value: string;
  array: string[];

  constructor(value: string) {
    this.value = value;
    this.array = [];
  }

  // Methods
  push(value: string): string[] {
    this.array[this.array.length] = value;
    return this.array;
  }
  pop(): string | undefined {
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
  shift(): string {
    const first = this.array[0];
    const newArr = [];
    for (let i = 1; i < this.array.length; i++) {
      newArr[i - 1] = this.array[i];
    }
    this.array = newArr;
    return first;
  }
  indexOf(value: string): number {
    for (let i = 0; i < this.array.length; i++) {
      if (this.array[i] === value) {
        return i;
      }
    }
    return -1;
  }
  includes(value: string): boolean {
    for (let i = 0; i < this.array.length; i++) {
      if (this.array[i] === value) {
        return true;
      }
    }
    return false;
  }
  reverse() {
    let left = 0,
      right = this.array.length - 1;
    while (left < right) {
      // Swap
      let temp = this.value[left];
      this.value[left] = this.array[right];
      this.value[right] = temp;

      left++;
      right--;
    }

    return this.value;
  }
  forEach(cb: any) {
    for (let i = 0; i < this.array.length; i++) {
      cb(this.array[i]);
    }

    // function cb(element) {
    //   console.log(element);
    // }
  }

  map(cb: any) {
    const newArr = [];
    for (let i = 0; i < this.array.length; i++) {
      const newEL = cb(this.array[i]);
      newArr.push(newEL);
    }

    return newArr;
  }
  filter(cb: (value: string, index: number, array: string[]) => boolean): string[] {
    const newArr: string[] = [];
    for (let i = 0; i < this.array.length; i++) {
      if (cb(this.array[i], i, this.array)) {
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
