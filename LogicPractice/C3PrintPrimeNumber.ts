class PrintPrimeNumber {
  public static main(): void {
    let n: number = 100;
    this.printPrimeNumber(n);
  }

  public static printPrimeNumber(n: number) {
    let prime: number[] = [];
    let s;
    for (let i = 2; i < n; i++) {
      s = 0;
      for (let j = 2; j < i; j++) {
        if (i % j == 0) {
          s = 1;
          break;
        }
      }
      if (s == 0) {
        prime.push(i);
      }
    }
    console.log(prime.join(" "));
  }
}

PrintPrimeNumber.main();
