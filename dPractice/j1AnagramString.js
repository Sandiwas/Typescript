class AnagramString {
  static removeSpaceMakeLowerCase(str) {
    let lowerCase = "";
    for (let i = 0; i < str.length; i++) {
      let ch = str.charAt(i);
      if (ch != " ") {
        if (ch >= "A" && ch <= "Z") {
          ch = String.fromCharCode(ch.charCodeAt(0) + 32);
        }
        lowerCase = lowerCase + ch;
      }
    }
    return lowerCase;
  }

  static sort(arr) {
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
  static isEquals(arr1, arr2) {
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
  static isAnagram(arr1, arr2) {
    if (this.isEquals(arr1, arr2)) {
      console.log("String is Anagram");
    } else {
      console.log("String is not Anagram");
    }
  }
}

const str1 = "sile nT";
const str2 = "lis teN";
const arr1 = AnagramString.removeSpaceMakeLowerCase(str1).split("");
const arr2 = AnagramString.removeSpaceMakeLowerCase(str2).split("");

AnagramString.sort(arr1);
AnagramString.sort(arr2);

AnagramString.isAnagram(arr1, arr2);
