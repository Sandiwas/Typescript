class EvenAndOddNumber {
  public static main(): void {
    let n: number = 100;
    this.printEvenAndOddNum(n);
  }
  public static printEvenAndOddNum(n: number): void {
    let even: number[] = [];
    let odd: number[] = [];

    for (let i = 1; i <= n; i++) {
      if (i % 2 === 0) {
        even.push(i);
      } else if (i % 2 !== 0) {
        odd.push(i);
      }
    }
    console.log(even.join(" "));
    console.log(odd.join(" "));
  }
}

EvenAndOddNumber.main();
