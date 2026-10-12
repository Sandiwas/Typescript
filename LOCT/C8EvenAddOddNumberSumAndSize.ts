class EvenAddOddNumberSumAndSize {
  public static main() {
    let arr: number[] = [5, 6, 4, 3, 2, 7, 1];
    this.evenAndOddNum(arr);
  }

  public static evenAndOddNum(arr: number[]) {
    let even: number[] = [];
    let odd: number[] = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 == 0) {
        even.push(arr[i]);
      } else {
        odd.push(arr[i]);
      }
    }
    let sumOfeven = 0;
    let sumOfOdd = 0;

    for (let n of even) {
      sumOfeven += n;
    }
    console.log("Even number in array are : ", even);
    console.log("Sum of all  Odd number :  : ", sumOfeven);
    console.log("Size of even number array : ", even.length);
    for (let n of odd) {
      sumOfOdd += n;
    }
    console.log("Odd number in array are : ", odd);
    console.log("Sum of all  even number :  : ", sumOfOdd);
    console.log("Size of odd number array : ", odd.length);
  }
}

EvenAddOddNumberSumAndSize.main();