class ReverseSentenceAndEachString {
  static reverseEachWordInSentence(str: string): string {
    const arr = str.split(" ");
    let result = "";
    for (let i = arr.length - 1; i >= 0; i--) {
      const word = arr[i];
      let reverseWord = "";
      for (let j = word.length - 1; j >= 0; j--) {
        reverseWord = reverseWord + word.charAt(j);
      }
      result = result + reverseWord + " ";
    }
    return result;
  }

  static makeLowerCase(str: string): string {
    let lowerCase = "";
    for (let i = 0; i < str.length; i++) {
      let ch = str.charAt(i);
      if (ch >= "A" && ch <= "Z") {
        ch = String.fromCharCode(ch.charCodeAt(0) + 32);
      }
      lowerCase = lowerCase + ch;
    }
    return lowerCase;
  }
}

let str = "Automation Is Fun";
str = ReverseSentenceAndEachString.makeLowerCase(str);
str = ReverseSentenceAndEachString.reverseEachWordInSentence(str);
console.log(str);
