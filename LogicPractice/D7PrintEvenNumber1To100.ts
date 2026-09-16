class PrintOddNumber1To100 {
  public static main(): void {
    let n: number = 100;
    this.printOddNumber(n);
  }
  public static printOddNumber(n: number): void {
    let odd: number[] = [];
    for (let i = 0; i <= n; i++) {
      if (i % 2 !== 0) {
        odd.push(i);
      }
    }
    console.log(odd.join(" "));
  }
}

PrintOddNumber1To100.main();
