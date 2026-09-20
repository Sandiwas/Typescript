class findPairOfSum {
  public static main(): void {
    let arr: number[] = [2, 2, 7, 5, 3, 8];
    let target: number = 10;
    this.sort(arr);
    this.pairOfSum(arr, target);
  }
  public static pairOfSum(arr: number[], target: number) {
    if (arr === null || arr.length < 2) {
      console.log("Invalid Input");
      return;
    }
    for (let i = 0; i < arr.length; i++) {
      if (i > 0 && arr[i] == arr[i - 1]) {
        continue;
      }
      for (let j = i + 1; j < arr.length; j++) {
        if (j > i + 1 && arr[j] == arr[j + 1]) {
          continue;
        }
        if (arr[i] + arr[j] == target) {
          console.log(`${arr[i]} + ${arr[j]} = ${target} `);
        }
      }
    }
  }
  public static sort(arr: number[]) {
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
  }
}

findPairOfSum.main();
