class DuplicateElementInUsingFor {
  public static main(): void {
    let arr: number[] = [1, 2, 3, 4, 5, 2, 6, 3, 2, 1, 1];
    this.finddupicateElement(arr);
  }
  public static finddupicateElement(arr: number[]) {
    for (let i = 0; i < arr.length; i++) {
      let count = 1;
      if (arr[i] === -1) {
        continue;
      }
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
          count++;
          arr[j] = -1;
        }
      }
      if (count > 1 && arr[i] !== -1) {
        console.log(arr[i] + " = " + count);
      }
    }
  }
}

DuplicateElementInUsingFor.main();
