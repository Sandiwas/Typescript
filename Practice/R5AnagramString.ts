class AnagramString {
  static removeSpaceMakeLowerCase(str: string): string {
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

  static sort(arr: string[]): void {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          const temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
  }

  static isEquals(arr1: string[], arr2: string[]): boolean {
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

  static isAnagramString(arr1: string[], arr2: string[]): void {
    if (this.isEquals(arr1, arr2)) {
      console.log("String is Anagram");
    } else {
      console.log("String is Not Anagram");
    }
  }
}

const str1 = "sile nT";
const str2 = "lis teN";

const arr1 = AnagramString.removeSpaceMakeLowerCase(str1).split("");
const arr2 = AnagramString.removeSpaceMakeLowerCase(str2).split("");

AnagramString.sort(arr1);
AnagramString.sort(arr2);

AnagramString.isAnagramString(arr1, arr2);

// | Java                              | TypeScript                                   |
// | --------------------------------- | -------------------------------------------- |
// | `char[] arr = str.toCharArray();` | `const arr = str.split("");`                 |
// | `char ch`                         | `let ch: string`                             |
// | `(char)(ch + 32)`                 | `String.fromCharCode(ch.charCodeAt(0) + 32)` |
// | `System.out.println()`            | `console.log()`                              |
// | `charAt(i)`                       | `charAt(i)`                                  |
//this. refrence to current class 
//str.split("") == str.toCharArray();
