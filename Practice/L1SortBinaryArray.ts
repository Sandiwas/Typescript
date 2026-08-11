class SortBinaryArray {
  static sortBinaryArray(arr: number[]): number[] {
    let index: number = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === 0) {
        arr[index++] = 0;
      }
    }

    for (let i = index; i < arr.length; i++) {
      arr[i] = 1;
    }
    return arr;
  }
}

let arr: number[] = [0, 0, 0, 1, 0, 1, 0, 1];
arr = SortBinaryArray.sortBinaryArray(arr);
console.log(arr);
