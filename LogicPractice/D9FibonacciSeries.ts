class FibonacciSeries {
  public static main(): void {
    let n: number = 10;
    this.fibonacci(n);
  }
  public static fibonacci(n: number): void {
    let fibonacci: number[] = [];
    let first: number = 0;
    let second: number = 1;
    let third: number;
    for (let i = 0; i < n; i++) {
      fibonacci.push(first);
      third = first + second;
      first = second;
      second = third;
    }
    console.log(fibonacci.join(" "));
  }
}

FibonacciSeries.main();
