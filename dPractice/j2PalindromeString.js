class PalindromeString {
  static reverseString(str) {
    let result = "";
    for (let i = str.length - 1; i >= 0; i--) {
      result = result + str.charAt(i);
    }
    return result;
  }
  static isPlaindrome(str) {
    if (str === this.reverseString(str)) {
      console.log("String is palindrome");
    } else {
      console.log("String is not palindrome");
    }
  }
  static removeSpaceMakeLowerCase(str) {
    let lowerCase = "";
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
let str = "Mad Km";
str = PalindromeString.removeSpaceMakeLowerCase(str);
PalindromeString.isPlaindrome(str);




/* 
| Java                            | TypeScript                                                         |
| ------------------------------- | ------------------------------------------------------------------ |
| `str.equals(str2)`              | `str === str2`                                                     |
| `reverseString(str)`            | `this.reverseString(str)` or `PalindromeString.reverseString(str)` |
| `==` compares object references | `===` compares string values                                       |
| `String` is an object           | `string` is a primitive type                                       |
 */
