class ReverseSEachStringSentence {
  public static main(): void {
    let str = "Automation Is Fun";
    str = ReverseSEachStringSentence.makeLowerCase(str);
    console.log("Lower Case String is :", str);
    str=ReverseSEachStringSentence.reverseStringAndEachWord(str);
    console.log("Reverse Sentence and Each word : ", str )
  }

  public static reverseStringAndEachWord(str: string):string {
    let arr = str.split(" ");
    let result = "";
    for (let i = 0; i<arr.length; i++) {
      let word = arr[i];
      let reverseWord = "";
      for (let j = word.length - 1; j >= 0; j--) {
        reverseWord = reverseWord + word.charAt(j);
      }
      result = result + reverseWord + " ";
    }
    return result.trim();
  }

  public static makeLowerCase(str: string): string {
    let lowerCase: string = "";
    for (let i = 0; i < str.length; i++) {
      let ch: string = str.charAt(i);
      if (ch >= "A" && ch <= "Z") {
        ch = String.fromCharCode(ch.charCodeAt(0) + 32);
      }
      lowerCase = lowerCase + ch;
    }
    return lowerCase;
  }
}

ReverseSEachStringSentence.main();
