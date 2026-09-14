class AscendingAndDescendingString {
  public static main(): void {
    let str: string = "ajdhfuwykdADFNDJ";

    let acending = this.acendingOrder(str);
    let decending = this.decedingOrder(str);
    console.log("Acending order string : ", acending);
    console.log("Decending order string : ", decending);
  }

  public static acendingOrder(str: string): string {
    const arr: string[] = str.split("");
    const n: number = arr.length;
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
    let ascending = "";
    for (let ch of arr) {
      ascending += ch;
    }
    return ascending;
  }

  public static decedingOrder(str: string) {
    const arr: string[] = str.split("");
    const n: number = arr.length;
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (arr[j] < arr[j + 1]) {
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
    let decending: string = "";
    for (let ch of arr) {
      decending += ch;
    }
    return decending;
  }
}

AscendingAndDescendingString.main();
