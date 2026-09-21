class RemoveDuplicateElementUsingFor {
  public static main(): void {
    let arr1: number[] = [2, 3, 4, 4];
    let arr2: number[] = [3, 5, 6, 6, 6];

    let merged: number[] = this.merge(arr1, arr2);
    console.log(merged);
    let arr = this.removeDuplicateElementUsingFor(merged);
    console.log(arr);
  }
  public static removeDuplicateElementUsingFor(arr: number[]): number[] {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === -1) {
        continue;
      }
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] == arr[j]) {
          arr[j] = -1;
        }
      }
    }
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== -1) {
        count++;
      }
    }
    let index = 0;
    let result: number[] = new Array(count);
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== -1) {
        result[index++] = arr[i];
      }
    }
    return result;
  }

  public static merge(arr1: number[], arr2: number[]): number[] {
    let result: number[] = new Array(arr1.length + arr2.length);
    for (let i = 0; i < arr1.length; i++) {
      result[i] = arr1[i];
    }
    for (let j = 0; j < arr2.length; j++) {
      result[arr1.length + j] = arr2[j];
    }
    return result;
  }
}

RemoveDuplicateElementUsingFor.main();
