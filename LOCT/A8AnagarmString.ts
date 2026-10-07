class AnagarmString {
  public static main() {
    let str1: string = "Lis ten";
    let str2: string = "Sile nt";

    str1 = this.removeSpaceMakeLowerCase(str1);
    str2 = this.removeSpaceMakeLowerCase(str2);
    console.log("str1 : ", str1);
    console.log("str2 : ", str2);
    let arr1: string[] = str1.split("");
    let arr2: string[] = str1.split("");
    this.sort(arr1);
    this.sort(arr2);
    this.isAnagram(arr1, arr2);
  }

  public static isAnagram(arr1: string[], arr2: string[]) {
    if (this.isEquals(arr1, arr2)) {
      console.log("Given string is anagram");
    } else {
      console.log("Givem string is not anagram");
    }
  }

  public static isEquals(arr1: string[], arr2: string[]): boolean {
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

  public static sort(arr: string[]) {
    let n: number = arr.length;
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
      let ch: string = str.charAt(i);
      if (ch !== " ") {
        if (ch >= "A" && ch <= "Z") {
          ch = String.fromCharCode(ch.charCodeAt(0) + 32);
        }
        lowerCase = lowerCase + ch;
      }
    }
    return lowerCase;
  }
}

AnagarmString.main();
