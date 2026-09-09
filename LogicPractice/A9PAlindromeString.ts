class PlaindromeString {
  public static main(): void {
    let str: string = "Rad ar";
    str = this.removeSpaceMakelowerCase(str);
    this.isPalindromeString(str);
  }

  public static isPalindromeString(str: string): void {
    if (str === this.reverseString(str)) {
      console.log("Givcen string is Palindrome");
    } else {
      console.log("Given string is not Palindrome");
    }
  }

  public static reverseString(str: string): string {
    let result: string = "";
    for (let i = str.length - 1; i >= 0; i--) {
      result = result + str.charAt(i);
    }
    return result;
  }

  public static removeSpaceMakelowerCase(str: string): string {
    let lowerCase: string = "";
    for (let i = 0; i < str.length; i++) {
      let ch = str.charAt(i);
      if (ch != " ") {
        if (ch >= "A" && ch <= "Z") {
          ch = String.fromCharCode(ch.charCodeAt(0) + 32);
        }
        lowerCase += ch;
      }
    }
    return lowerCase;
  }
}

PlaindromeString.main();

/* 
| Java                                                | TypeScript                                            |
| --------------------------------------------------- | ----------------------------------------------------- |
| `String str = "Rad ar";`                            | `let str: string = "Rad ar";`                         |
| `public static void main(String[] args)`            | `public static main(): void`                          |
| `public static void isPalindromeString(String str)` | `public static isPalindromeString(str: string): void` |
| `public static String reverseString(String str)`    | `public static reverseString(str: string): string`    |
| `str.length()`                                      | `str.length`                                          |
| `str.equals(this.reverseString(str))`               | `str === this.reverseString(str)`                     |
| `System.out.println("...")`                         | `console.log("...")`                                  |
| `String result = "";`                               | `let result: string = "";`                            |
| `String ch = str.charAt(i);`                        | `let ch = str.charAt(i);`                             |
| `(char)(ch + 32)`                                   | `String.fromCharCode(ch.charCodeAt(0) + 32)`          |
| `PalindromeString.main(args);`                      | `PalindromeString.main();`                            | 
*/
