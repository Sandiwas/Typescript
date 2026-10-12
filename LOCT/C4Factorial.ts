class Factorial {
  public static main(): void {
    let n: number = 5;
    let fact: number = 1;
    this.printFactorial(n, fact);
  }
  public static printFactorial(n: number, fact: number) {
    for (let i = 1; i <= n; i++) {
      fact = fact * i;
    }
    console.log(`factroial of ${n} is ${fact}`)
  }
}

Factorial.main();
