class ArmstrnogNum {
  public static main(): void {
    const n: number = 153;
    this.checkArmstrongNumber(n);
  }
  public static checkArmstrongNumber(n: number): void {
    let a: number;
    let c: number = 0;
    let temp: number = n;
    while (n > 0) {
      a = n % 10;
      n = Math.floor(n / 10);
      c = c + a * a * a;
    }
    if (temp === c) {
      console.log(`${temp} is armstrong number `);
    } else {
      console.log(`${temp} is not armstrong number `);
    }
  }
}

ArmstrnogNum.main();

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
| Armstrong Logic      | `n = n / 10` ✅                           | `n = Math.floor(n / 10)` ✅         |

 */
