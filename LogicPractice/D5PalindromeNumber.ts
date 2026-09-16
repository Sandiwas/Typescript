class PalindromeNumber {
  public static main(): void {
    let n: number = 121;
    this.checkPlaindromeNum(n);
  }
  public static checkPlaindromeNum(n: number): void {
    let remainder: number = 0;
    let reverse: number = 0;
    let temp: number = n;
    while (n > 0) {
      remainder = n % 10;
      reverse = reverse * 10 + remainder;
      n = Math.floor(n / 10);
    }
    if (temp === reverse) {
      console.log(`${temp} is palindrome number`);
    } else {
      console.log(`${temp} is not palindrome number`);
    }
  }
}

PalindromeNumber.main();

/* 
| Feature          | TypeScript                                    | Java                                                       |
| ---------------- | --------------------------------------------- | ---------------------------------------------------------- |
| Method Entry     | Custom `main()` method                        | Standard `public static void main(String[] args)`          |
| Data Types       | `number`                                      | `int`, `double`, etc.                                      |
| Output           | `console.log()`                               | `System.out.println()`                                     |
| Equality         | `===` (strict comparison)                     | `==` for primitive types                                   |
| Integer Division | `Math.floor(n / 10)`                          | `n / 10` automatically performs integer division for `int` |
| Execution        | Runs via JavaScript runtime (Node.js/browser) | Runs on JVM                                                |
 */
