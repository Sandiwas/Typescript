class FindMissingNumber {
  public static main() {
    let arr: number[] = [5, 2, 1, 6, 5, 4, 3];
    arr = this.sort(arr);
    console.log(arr);
    this.missingNumber(arr);
  }

  public static missingNumber(arr: number[]) {
    if (arr.length < 2) {
      console.log("Invalid input");
      return;
    }

    let missing = 1;
    for (let i = 0; i < arr.length; i++) {
      // Skip duplicates
      if (i > 0 && arr[i] === arr[i - 1]) {
        continue;
      }
      if (arr[i] !== missing) {
        console.log("Missing number is ", missing);
        return;
      }
      missing++;
    }
    console.log("Missing number is out of array : ", missing);
  }

  public static sort(arr: number[]): number[] {
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
    return arr;
  }
}

FindMissingNumber.main();
