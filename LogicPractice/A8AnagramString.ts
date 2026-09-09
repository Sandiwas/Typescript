class AnagarmString {  
  public static main() {
    const str1: string = "Sile nt";
    const str2: string = "Li sten";
    const arr1: string[] = this.removeSpaceMakeLowerCase(str1).split("");
    const arr2: string[] = this.removeSpaceMakeLowerCase(str2).split("");
    this.sort(arr1);
    this.sort(arr2);
    this.isAnagram(arr1, arr2);
  }

  public static isAnagram(arr1: string[], arr2: string[]) {
    if (this.isEqual(arr1, arr2)) {
      console.log("Given String is Anagram");
    } else {
      console.log("Given String is not anagram");
    }
  }

  public static isEqual(arr1: string[], arr2: string[]): boolean {
    if (arr1.length !== arr2.length) {
      return false;
    }
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }

    return true;
  }

  public static sort(arr: string[]): void {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
  }

  public static removeSpaceMakeLowerCase(str: string): string {
    let lowerCase = "";
    for (let i = 0; i < str.length; i++) {
      let ch = str.charAt(i);
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
AnagarmString.main();





// | Java                   | TypeScript                  | Reason                                                |
// | ---------------------- | --------------------------- | ----------------------------------------------------- |
// | `System.out.println()` | `console.log()`             | Used for output in TypeScript/JavaScript              |
// | `char[]`               | `string[]`                  | No separate `char` type in TypeScript                 |
// | `char`                 | `string` (single character) | TypeScript treats a character as a string of length 1 |
// | `String`               | `string`                    | Primitive type in TypeScript                          |
// | `str.toCharArray()`    | `str.split("")`             | Converts string to array of characters                |
// | `public static`        | `static`                    | Access modifiers are optional                         |
// | `boolean`              | `boolean`                   | Same in both                                          |
// | `int`                  | `number`                    | TypeScript has only `number`                          |
// | `!=`                   | `!==`                       | Strict comparison preferred                           |
// | `==`                   | `===`                       | Strict equality preferred                             |
// | Package declaration    | Not required                | TypeScript has modules instead                        |
// | `main()` entry point   | Function call               | Call the function/class method directly               |
