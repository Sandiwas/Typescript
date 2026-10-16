class PrintOddNumber1To100 {
  public static main() {
    let n: number = 100;
    console.log(this.printOddNumber(n));
  }
  public static printOddNumber(n: number): string {
    let result: number[] = [];
    for (let i = 1; i <= n; i++) {
      if (i % 2 !== 0) {
        result.push(i);
      }
    }
    return result.join(" ");
  }
}

PrintOddNumber1To100.main();
