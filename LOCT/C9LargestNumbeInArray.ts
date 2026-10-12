class LargetNumberInArray {
  public static main(): void {
    let arr: number[] = [5, 6, 4, 3, 2, 7, 1];
    this.findLargestNumberInArray(arr);
  }
  public static findLargestNumberInArray(arr: number[]) {
    let largest: number = arr[0];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > largest) {
        largest = arr[i];
      }
    }
    console.log("Largest number in array is : ",largest);
    
  }
}


LargetNumberInArray.main();