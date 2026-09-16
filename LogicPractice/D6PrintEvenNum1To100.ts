class PrintEvenNumber1To100 {
  public static main(): void {
    let n: number = 100;
    this.printEvenNum(n);
  }
  public static printEvenNum(n: number) {
    let even: number[] = [];
    for (let i = 1; i <= n; i++) {
      if (i % 2 === 0) {
        even.push(i);
      }
    }
    console.log(even.join(" "));
  }
}

PrintEvenNumber1To100.main();
