class SmallestNumberInArray {
  public static main(): void {
    let arr: number[] = [5, 6, 4, 3, 2, 7, 1];
    this.findSmallestNumberInArray(arr);
  }
  public static findSmallestNumberInArray(arr: number[]) {
    let smallest: number = arr[0];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < smallest) {
        smallest = arr[i];
      }
    }
    console.log("Smallest number in array is : " + smallest);
  }
}

SmallestNumberInArray.main();
