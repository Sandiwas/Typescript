class MoveZeroEnd {
  public static main(): void {
    let arr: number[] = [1, 0, 0, 3, 0, 5];
    this.moveZeroToEnd(arr);
  }

  public static moveZeroToEnd(arr: number[]) {
    let index = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== 0) {
        arr[index++] = arr[i];
      }
    }

    for (let j = index; j < arr.length; j++) {
      arr[j] = 0;
    }

    console.log(arr);
  }
}

MoveZeroEnd.main();
