class MoveZeroEnd {
  static main() {
    let arr: number[] = [1, 0, 0, 3, 0, 5];
    arr=this.moveZeroEnd(arr);
    console.log(arr)
  }

  public static moveZeroEnd(arr: number[]): number[] {
    let index = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== 0) {
        arr[index++] = arr[i];
      }
    }
    for (let j = index; j < arr.length; j++) {
      arr[j] = 0;
    }
    return arr;
}
}

MoveZeroEnd.main();