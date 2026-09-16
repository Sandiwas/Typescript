class EvenAndOddNum {
  public static main(): void {
    let arr: number[] = [5, 6, 4, 3, 2, 7, 1];
    this.printEvenAndOddNum(arr);
  }

  public static printEvenAndOddNum(arr: number[]) {
    let even: Array<number> = [];
    let odd: number[] = [];

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        even.push(arr[i]);
      } else {
        odd.push(arr[i]);
      }
    }
    console.log("Even number are : ", even.join(" "));
    console.log("Odd number are : ", odd.join(" "));
  }
}

EvenAndOddNum.main();

/* 
| Java                      | TypeScript                       |
| ------------------------- | -------------------------------- |
| `int[] arr = {5,6,4,3};`  | `let arr: number[] = [5,6,4,3];` |
| `ArrayList<Integer>`      | `number[]`                       |
| `add()`                   | `push()`                         |
| `arr.length`              | `arr.length` (same)              |
| `for(int ele : even)`     | `for(let ele of even)`           |
| `System.out.print()`      | `process.stdout.write()`         |
| `System.out.println()`    | `console.log()`                  |
| `==` / `!=` commonly used | `===` / `!==` preferred          |
 */
