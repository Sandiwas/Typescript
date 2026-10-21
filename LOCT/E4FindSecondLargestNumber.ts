class SecondLargestNumber {
  public static main(): void {
    let arr: number[] = [10, 15, 22, 21, 30, 10, 20];
    this.findSecondLargestNumber(arr);
  }
  public static findSecondLargestNumber(arr: number[]) {
    if (arr.length < 2) {
      console.log("Invalid Input");
    }

    let largest: number = Number.MIN_SAFE_INTEGER;
    let secondLargest: number = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > largest) {
        secondLargest = largest;
        largest = arr[i];
      } else if (arr[i] > secondLargest && largest !== arr[i]) {
        secondLargest = arr[i];
      }
    }
    
    if (secondLargest === Number.MIN_SAFE_INTEGER) {
      console.log("Second largest number is not found");
    } else {
      console.log("Second largest number is ", secondLargest);
    }
  }
}

SecondLargestNumber.main();
