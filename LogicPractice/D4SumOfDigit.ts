class SumOfDigit {
  public static main(): void {
    const n: number = 12234;
    this.sumOfDigit(n);
  }
  public static sumOfDigit(n: number): void {
    let digit: number = 0;
    let sum: number = 0;
    const temp: number = n;
    while (n > 0) {
      digit = n % 10;
      n = Math.floor(n / 10);
      sum = sum + digit;
    }
    console.log("sum of digit of number is :", sum);
  }
}

SumOfDigit.main();
