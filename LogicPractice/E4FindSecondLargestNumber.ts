class FindSecondLargestNumber {
  public static main(): void {
    let arr: number[] = [10, 15, 22, 21, 30, 10, 20];
    this.findSecondLargestNumber(arr);
  }

  public static findSecondLargestNumber(arr: number[]): void {
    if (arr.length < 2) {
      console.log("Invalid Input");
      return;
    }
    let largest: number = Number.MIN_SAFE_INTEGER;
    let second: number = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > largest) {
        second = largest;
        largest = arr[i];
      } else if (arr[i] > second && largest !== arr[i]) {
        second = arr[i];
      }
    }
    if (second === Number.MIN_SAFE_INTEGER) {
      console.log("No second largest number");
    } else {
      console.log("Second largest number is :", second);
    }
  }
}

FindSecondLargestNumber.main();

/*
| Java                   | TypeScript                  |
| ---------------------- | --------------------------- |
| `int[] arr`            | `number[] arr`              |
| `public static void`   | `public static` ya `: void` |
| `Integer.MIN_VALUE`    | `Number.MIN_SAFE_INTEGER`   |
| `System.out.println()` | `console.log()`             |
| `arr.length`           | `arr.length` ✅ same        |
| `!=`                   | `!==` (strict comparison)   |
| `main(String[] args)`  | `main(): void`              |
 */
