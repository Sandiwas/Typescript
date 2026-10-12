class EvenAndOddNum {
  public static main(): void {
    let arr: number[] = [5, 6, 4, 3, 2, 7, 1];
    this.findEvenAddOddNum(arr);
  }

  public static findEvenAddOddNum(arr: number[]) {
    let even: number[] = [];
    let odd: Array<number> = new Array<number>();
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 == 0) {
        even.push(arr[i]);
      } else {
        odd.push(arr[i]);
      }
    }
 console.log("Even number are : ",even);
  console.log("odd number are : ",odd);
 
  }
}


EvenAndOddNum.main();
