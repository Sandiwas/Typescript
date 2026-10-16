class FibonacciSeries {
  public static main() {
    let n: number = 10;
    this.printFibonacciiSeries(n);
  }
  public static printFibonacciiSeries(n: number) {
    let first: number = 0;
    let second: number = 1;
    let third: number;
    let result: number[] = [];
    for (let i = 0; i < n; i++) {
      result.push(first);
      console.log(first);
      third = first + second;
      first = second;
      second = third;
    }
    console.log(result.join(" "));
  }
}

FibonacciSeries.main();
