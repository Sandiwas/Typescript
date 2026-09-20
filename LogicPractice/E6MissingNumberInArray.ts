class MissingNumberInArray {
  public static main(): void {
    let arr: number[] = [ 5, 2, 1, 6, 5, 3 ];
    arr=this.sort(arr);
    this.findMissingNumber(arr);
  }

  public static findMissingNumber(arr: number[]):void {
    if (arr.length < 2) {
      console.log("Invalid Input");
      return;
    }
    let missing = 1;
    for (let i = 0; i < arr.length; i++) {
      if (i > 0 && arr[i] === arr[i - 1]) {
        continue;
      }
      if (missing !== arr[i]) {
        console.log("Missing number is : " , missing);
        return;
      }
      missing++;  
    }
    console.log("Missing number is if not in array ", missing);
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

MissingNumberInArray.main();
