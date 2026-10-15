class SumOfDigit {
  public static main() {
    let n: number = 1234;
    this.sum(n);
  }
  public static sum(n: number) {
    let digit: number = 0;
    let sum: number = 0;
    while (n > 0) {
      digit = n % 10;
      n = Math.floor(n / 10);
      sum = sum + digit;
    }
    console.log("sum of number of digit ", sum);
  }
}

SumOfDigit.main();
