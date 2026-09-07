class SortArray {
  static moveZeroEnd(arr: number[]): number[] {
    let index: number = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== 0) {
        arr[index++] = arr[i];
      }
    }
    for (let i = index; i < arr.length; i++) {
      arr[i] = 0;
    }
    return arr;
  }
}

let arr: number[] = [1, 0, 3, 0, 5];
arr = SortArray.moveZeroEnd(arr);
console.log(arr);
