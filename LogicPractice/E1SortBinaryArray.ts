class SortBinaryArray {
  public static main(): void {
    let arr: number[] = [0, 0, 0, 1, 0, 1, 0, 1];
    arr = this.sortArray(arr);
    console.log("Sorted Binary array : ", arr);
  }

  public static sortArray(arr: number[]): number[] {
    let index: number = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === 0) {
        arr[index++] = arr[i];
      }
    }
    for (let j = index; j < arr.length; j++) {
      arr[j] = 1;
    }
    return arr;
  }
}

SortBinaryArray.main();
