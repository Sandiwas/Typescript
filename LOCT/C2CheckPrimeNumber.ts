class PrimeNumber {
  public static main(): void {
    if (this.isPrime(3)) {
      console.log("Given number is Prime");
    } else {
      console.log("Given number is not prime");
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

PrimeNumber.main();
