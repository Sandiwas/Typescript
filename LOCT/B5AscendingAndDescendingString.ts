class AcendingAndDecendingOrder {
  public static main(): void {
    let str: string = "ajdhfuwykdADFNDJ";
    let acending = this.acendingOrder(str);
    console.log(acending);
    let decending = this.decendingOrder(str);
    console.log(decending);
  }

  public static acendingOrder(str: string): string {
    let arr: string[] = str.split("");
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
    return arr.join("");
  }

  public static decendingOrder(str: string): string {
    let arr: string[] = str.split("");
    let n: number = arr.length;
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (arr[j] < arr[j + 1]) {
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
    return arr.join("");
  }
}

AcendingAndDecendingOrder.main();
