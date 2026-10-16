class SortBinaryArray {
  public static main() {
    let arr: number[] = [0, 0, 0, 1, 0, 1, 0, 1];
    this.sort(arr);
  }

  public static sort(arr: number[]) {
    let n: number = arr.length;
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
    console.log(arr);
  }
}

SortBinaryArray.main();
