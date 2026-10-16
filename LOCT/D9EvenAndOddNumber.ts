class EvenAndOddNumber {
  public static main() {
    let n: number = 100;
    this.printEvenAndOddNumber(n);
  }

  public static printEvenAndOddNumber(n: number) {
    let even: number[] = [];
    let odd: number[] = [];
    for (let i = 1; i < n; i++) {
      if (i % 2 === 0) {
        even.push(i);
      } else {
        odd.push(i);
      }
    }
    console.log(even.join(" "));
    console.log(odd.join(" "));
  }
}

EvenAndOddNumber.main();
