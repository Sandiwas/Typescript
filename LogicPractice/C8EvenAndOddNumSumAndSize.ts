class EvenAddOddNumberSumAndSize {
  public static main(): void {
    let arr: number[] = [5, 6, 4, 3, 2, 7, 1];
    this.printEvenAndOddNum(arr);
  }
  public static printEvenAndOddNum(arr: number[]): void {
    let even: number[] = [];
    let odd: number[] = new Array();

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        even.push(arr[i]);
      } else {
        odd.push(arr[i]);
      }
    }
    let sumOfEven = 0;
    let sunOfOdd = 0;
    for (let ele of even) {
      sumOfEven += ele;
    }

    console.log("Even number are : ", even.join(" "));
    console.log("Sum of all even number is : ", sumOfEven);
    console.log("Size of all even number is : ", even.length);

    for (let ele of odd) {
      sunOfOdd += ele;
    }

    console.log("Odd number are : ", odd.join(" "));
    console.log("Sum of all odd number is : ", sunOfOdd);
    console.log("Size of all odd number is : ", odd.length);
  }
}

EvenAddOddNumberSumAndSize.main();

//Important Java → TypeScript Differences Only
/* 
| Java                                           | TypeScript                     |
| ---------------------------------------------- | ------------------------------ |
| `int[] arr = {1,2,3};`                         | `let arr: number[] = [1,2,3];` |
| `ArrayList<Integer> list = new ArrayList<>();` | `let list: number[] = [];`     |
| `list.add(x);`                                 | `list.push(x);`                |
| `list.size();`                                 | `list.length;`                 |
| `for(int ele : list)`                          | `for(let ele of list)`         |
| `int sum = 0;`                                 | `let sum: number = 0;`         |
| `System.out.println();`                        | `console.log();`               |
| `==`                                           | `===` (preferred)              |
 */
