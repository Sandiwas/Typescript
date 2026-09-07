class ReverseEachStringInSentence {
  static reverseEachStringInSentence(str: string): string {
    const arr = str.split(" ");
    let result = "";

    for (let i = 0; i < arr.length; i++) {
      const word = arr[i];
      let reverseWord = "";
      for (let j = word.length - 1; j >= 0; j--) {
        reverseWord += word.charAt(j);
      }
      result += reverseWord + " ";
    }
    return result;
  }

  static makeLowerCase(str: string): string {
    let lowerCase: string = "";

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

let str = "Automation Is Fun";
str = ReverseEachStringInSentence.makeLowerCase(str);
str = ReverseEachStringInSentence.reverseEachStringInSentence(str);
console.log(str);

// Bas ye changes hue:
// public static → static
// String → string
// length() → length
// char → let ch = str.charAt(i)

// (char)(ch + 32) →

// String.fromCharCode(ch.charCodeAt(0) + 32)
// System.out.println() → console.log()
//ch.charCodeAt(0) ==65

// console.log("A".charCodeAt(0)); // 65
// console.log("a".charCodeAt(0)); // 97
// console.log("Z".charCodeAt(0)); // 90

// console.log(String.fromCharCode(65)); // A
// console.log(String.fromCharCode(97)); // a
// console.log(String.fromCharCode(90)); // Z
