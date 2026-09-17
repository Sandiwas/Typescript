class FindThirdLargestNumber {
  public static main(): void {
    let arr: number[] = [10, 15, 22, 21, 30, 10, 20];
    this.findThirdLargestNumber(arr);
  }

  public static findThirdLargestNumber(arr: number[]): void {
    if (arr.length < 3) {
      console.log("Invalid Input");
      return;
    }

    let largest: number = Number.MIN_SAFE_INTEGER;
    let second: number = Number.MIN_SAFE_INTEGER;
    let third: number = Number.MIN_SAFE_INTEGER;
    
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > largest) {
        third = second;
        second = largest;
        largest = arr[i];
      } else if (arr[i] > second && largest !== arr[i]) {
        third = second;
        second = arr[i];
      } else if (arr[i] > second && largest !== arr[i] && second !== arr[i]) {
        third = second;
        second = arr[i];
      }
    }
    if (third == Number.MIN_SAFE_INTEGER) {
      console.log("No third largest number");
    } else {
      console.log("Third largest number is : " + third);
    }
  }
}

FindThirdLargestNumber.main();
