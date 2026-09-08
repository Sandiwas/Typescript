class KeepSpaceReverseString {
  public static main(): void {
    let str: string = "Automaton is Fun";
    str = KeepSpaceReverseString.makeLowerCase(str);
    console.log("lower case sentence is  : ", str);
    str = KeepSpaceReverseString.reverseStrinKeepSpace(str);
    console.log("Reverse Sentemce and keep space as it is : ", str);
  }
  public static reverseStrinKeepSpace(str: string): string {
    let arr: string[] = str.split("");
    let result: string[] = new Array(arr.length);
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === ' ') {
        result[i] = arr[i];
      }
    }
    let j = arr.length - 1;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== ' ') {
        while (arr[j] === ' ') {
          j--;
        }
        result[j] = arr[i];
        j--;
      }
    }
    return result.join("");
  }
  public static makeLowerCase(str: string): string {
    let lowerCase = "";
    for (let i = 0; i < str.length; i++) {
      let ch = str.charAt(i);
      if (ch >= "A" && ch <= "Z") {
        ch = String.fromCharCode(ch.charCodeAt(0) + 32);
      }
      lowerCase += ch;
    }
    return lowerCase;
  }
}

KeepSpaceReverseString.main();

/* 
| Java                                   | TypeScript                                     |
| -------------------------------------- | ---------------------------------------------- |
| `String`                               | `string`                                       |
| `char[]`                               | `string[]`                                     |
| `str.toCharArray()`                    | `str.split("")`                                |
| `char[] result = new char[arr.length]` | `let result: string[] = new Array(arr.length)` |
| `char`                                 | `string`                                       |
| `int`                                  | `number`                                       |
| `arr[i] != ' '`                        | `arr[i] !== " "`                               |
| `arr[i] == ' '`                        | `arr[i] === " "`                               |
| `(char)(ch + 32)`                      | `String.fromCharCode(ch.charCodeAt(0) + 32)`   |
| `new String(result)`                   | `result.join("")`                              |
| `System.out.println()`                 | `console.log()`                                |
| `public static void main()`            | `public static main(): void`                   |
| `public static String method()`        | `public static method(): string`               |
 */
/* 
Bhai, join("") ka purpose array ke saare elements ko ek single string mein combine karna hai.
new Array create :

let result: string[] = [];

Haan bhai, agar array ka length pehle se specify karna hai, to aise dena bilkul correct hai:
let result: string[] = new Array(arr.length);
 */