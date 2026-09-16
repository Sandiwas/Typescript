class SmallestAndLaregstNumber {
  public static main(): void {
    let arr: number[] = [5, 6, 4, 3, 2, 7, 1];
    this.printSmallestAndLargestNum(arr);
  }
  public static printSmallestAndLargestNum(arr: number[]): void {
    let smallest: number = arr[0];
    let largest: number = arr[0];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < smallest) {
        smallest = arr[i];
      } else if (arr[i] > largest) {
        largest = arr[i];
      }
    }
    console.log("Smallest number in array : ", smallest);
    console.log("Largest number in array : ", largest);
  }
}

SmallestAndLaregstNumber.main();
