class FindThirdLargestNumber {
  public static main(): void {
    let arr: number[] = [10, 15, 22, 21, 30, 10, 20];
    this.findthirdLargestNumber(arr);
  }

  public static findthirdLargestNumber(arr: number[]) {
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
      } else if (arr[i] > second && arr[i] !== largest) {
        third = second;
        second = arr[i];
      } else if (arr[i] > third && arr[i] !== largest && arr[i] !== second) {
        third = arr[i];
      }
    }
    if (third === Number.MIN_SAFE_INTEGER) {
      console.log("No Third largest number");
    } else {
      console.log("Third largest number is : ", third);
    }
  }
}

FindThirdLargestNumber.main();

//Number.MIN_SAFE_INTEGER // -9007199254740991 (negative)
