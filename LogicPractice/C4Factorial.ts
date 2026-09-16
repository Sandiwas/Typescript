class Factorial {
  public static main(): void {
    let n: number = 5;
    let fact: number = 1;
    this.factorial(n, fact);
  }

  public static factorial(n: number, fact: number): void {
    for (let i = 1; i <= n; i++) {
      fact = fact * i;
    }
    console.log(`Factorial of ${n} is ${fact}`);
  }
}

Factorial.main();
