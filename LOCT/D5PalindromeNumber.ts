class PalindromeNumber {
  public static main() {
    let n: number = 121;
    this.checkPalindromeNumber(n);
  }
  public static checkPalindromeNumber(n: number) {
    let digit: number = 0;
    let reverse: number = 0;

    while (n > 0) {
      digit = digit % 10;
      n = Math.floor(n / 10);
      reverse = reverse + digit;
    }
    if (reverse === reverse) {
      console.log("Given number is palindrome number");
    } else {
      console.log("Given number is not palindrome number ");
    }
  }
}

PalindromeNumber.main();


//returns a decimal value, so you must use: n = Math.floor(n / 10);
/* 
| Feature              | Java                                     | TypeScript                            |
| -------------------- | ---------------------------------------- | ------------------------------------- |
| Main Method          | `public static void main(String[] args)` | `public static main(): void`          |
| Variable Declaration | `int n = 153;`                           | `let n: number = 153;`                |
| Integer Division     | `n = n / 10;` → **15**                   | `n = n / 10;` → **15.3**              |
| Remove Decimal       | Not required                             | `n = Math.floor(n / 10);`             |
| Print Output         | `System.out.println();`                  | `console.log();`                      |
| Data Types           | Primitive types (`int`, `double`)        | Type annotations (`number`, `string`) |
| Execution            | JVM                                      | Browser / Node.js                     |
| Class Call           | `checkArmstrongNumber(n);`               | `this.checkArmstrongNumber(n);`       |
| String Interpolation | `"Value = " + n`                         | `` `Value = ${n}` ``                  |
| Armstrong Logic      | `n = n / 10` ✅                           | `n = Math.floor(n / 10)` ✅ 

//`Math.floor(). this method help to remove decimal `|

 */

// | Iteration | n (before) | a = n % 10 | n = Math.floor(n / 10) | c = c + a³ |
// | --------- | ---------- | ---------- | ---------------------- | ---------- |
// | Initial   | 153        | -          | -                      | 0          |
// | 1         | 153        | 3          | 15                     | 27         |
// | 2         | 15         | 5          | 1                      | 152        |
// | 3         | 1          | 1          | 0                      | 153        |
