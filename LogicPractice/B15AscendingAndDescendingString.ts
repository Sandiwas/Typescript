class AscendingAndDescendingString {
  public static main(): void {
    let str = "ajdhfuwykdADFNDJ";
    let acending = this.acendingOrderString(str);
    console.log(acending);
    let deconding = this.decendingOrder(str);
    console.log(deconding);
  }

  public static acendingOrderString(str: string): string {
    const arr: string[] = str.split("");
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
    const arr: string[] = str.split("");
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

AscendingAndDescendingString.main();

/* 
| Java                   | TypeScript                  |
| ---------------------- | --------------------------- |
| `String str`           | `let str: string`           |
| `char[] arr`           | `string[] arr`              |
| `str.toCharArray()`    | `str.split("")`             |
| `new String(arr)`      | `arr.join("")`              |
| `int n`                | `let n: number`             |
| `System.out.println()` | `console.log()`             |
| `public static void`   | `public static ...(): void` |
 */