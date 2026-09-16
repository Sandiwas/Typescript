class LargestNumberInarray {
  public static main(): void {
    let arr: number[] = [5, 6, 4, 3, 2, 7, 1];
    this.printLargestNumberInArray(arr);
  }
  public static printLargestNumberInArray(arr: number[]): void {
    let largest = arr[0];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > largest) {
        largest = arr[i];
      }
    }
    console.log("Largest number in array : ", largest);
  }
}

LargestNumberInarray.main();
