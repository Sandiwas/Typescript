class PalindromeString {
  static reverseString(str: string): string {
    let result: string = "";
    for (let i = str.length - 1; i >= 0; i--) {
      result = result + str.charAt(i);
    }
    return result;
  }

  static isPlaindrome(str:string){
  if(str === this.reverseString(str)){
    console.log("String is palindrome");
  }else{
      console.log("String is not palindrome");
  }
}
  static removeSpaceMakeLowerCase(str: string): string {
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
let str: string = "Mad am";
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


//Your TypeScript code is correct:
/* static isPlaindrome(str: string) {
    if (str === this.reverseString(str)) {
        console.log("String is palindrome");
    } else {
        console.log("String is not palindrome");
    }
}
 */

//This is the TypeScript equivalent of the Java code:
/* static void isPalindrome(String str) {
    if (str.equals(reverseString(str))) {
        System.out.println("String is palindrome");
    } else {
        System.out.println("String is not palindrome");
    }
}
 */