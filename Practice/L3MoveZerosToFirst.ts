class MoveZeroFirst {
  static moveZerofirst(arr:number[]):number[] {
    let index: number = arr.length - 1;
    for (let i = arr.length - 1; i >= 0; i--) {
      if (arr[i] != 0) {
        arr[index--] = arr[i];
      }
    }
    for (let i = index; i >= 0; i--) {
      arr[i] = 0;
    }
    return arr;
  }
}

let arr = [1, 0, 3, 0, 5];
arr=MoveZeroFirst.moveZerofirst(arr);
console.log(arr);