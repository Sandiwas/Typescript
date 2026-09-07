class MoveZeroEnd {
  static moveZeroEnd(arr) {
    let index = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] != 0) {
        arr[index++] = arr[i];
      }
    }
    for (let i = index; i < arr.length; i++) {
      arr[i] = 0;
    }
    return arr;
  }
}

let arr = [1, 0, 3, 0, 5];
arr = MoveZeroEnd.moveZeroEnd(arr);
console.log(arr);
