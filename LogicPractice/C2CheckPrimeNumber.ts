class CheckPrimeNumber {
  public static main(): void {
    if (this.isPrime(3)) {
      console.log("Given number is prime number");
    } else {
      console.log("Given number is prime number");
    }
  }

  public static isPrime(n: number): boolean {
    if (n <= 1) {
      return false;
    }
    for (let i = 2; i < n; i++) {
      if (n % i == 0) {
        return false;
      }
    }
    return true;
  }
}

CheckPrimeNumber.main();
