class RevrseString {
  public static main(): void {
    let str: string = "Auto mation";
    str = RevrseString.removeSpaceMakelowerCase(str);
    console.log("Without Space and LowerCase String is : automation : ", str);
    str = RevrseString.reverseString(str);
    console.log("Reverse String is : ", str);
  }

  public static reverseString(str: string): string {
    let result = "";
    for (let i = str.length - 1; i >= 0; i--) {
      result += str.charAt(i);
    }
    return result;
  }

  public static removeSpaceMakelowerCase(str: string): string {
    let lowerCase: string = "";
    for (let i = 0; i < str.length; i++) {
      let ch: string = str.charAt(i);
      if (ch !== " ") {
        if (ch >= "A" && ch <= "Z") {
          ch = String.fromCharCode(ch.charCodeAt(0) + 32);
        }
        lowerCase += ch;
      }
    }
    return lowerCase;
  }
}

RevrseString.main();

/* 
Java → TypeScript main changes
| Java                        | TypeScript                                   |
| --------------------------- | -------------------------------------------- |
| `String`                    | `string`                                     |
| `char`                      | `string`                                     |
| `charAt(i)`                 | `charAt(i)`                                  |
| `(char)(ch + 32)`           | `String.fromCharCode(ch.charCodeAt(0) + 32)` |
| `System.out.println()`      | `console.log()`                              |
| `public static void main()` | `public static main(): void`                 |
 */

// Interviewer agar pooche: "Why charCodeAt()?"
// Tum bol sakte ho:
// "I am manually converting uppercase characters to lowercase using their ASCII/Unicode character codes. The difference between uppercase and lowercase English letters is 32."
