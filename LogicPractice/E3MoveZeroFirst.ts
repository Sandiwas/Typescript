class MoveZeroFirst {
  public static main() {
    let arr: number[] = [1, 0, 0, 3, 0, 5];
    arr = this.moveZeroFirst(arr);
    console.log(arr);
  }
  public static moveZeroFirst(arr: number[]) {
    let index = arr.length - 1;
    for (let i = arr.length - 1; i >= 0; i--) {
      if (arr[i] !== 0) {
        arr[index--] = arr[i];
      }
    }
    for (let j = index; j >= 0; j--) {
      arr[j] = 0;
    }
    return arr;
  }
}

MoveZeroFirst.main();
