class A3ReversEachStringinSentence {
  public static main(): void {
    let str: string = "Automation Is Fun";
    str = this.removeSpaceMakeLowerCase(str);
    str = this.reverseString(str);
    console.log(str);
  }

  public static reverseString(str: string): string {
    let result: string = "";
    let arr: string[] = str.split(" ");
    for (let i = 0; i < arr.length; i++) {
      let word: string = arr[i];
      let reverseString: string = "";
      for (let j = word.length - 1; j >= 0; j--) {
        reverseString += word.charAt(j);
      }
      result += reverseString + " ";
    }
    return result;
  }
  public static removeSpaceMakeLowerCase(str: string): string {
    let lowerCase: string = "";
    for (let i = 0; i < str.length; i++) {
      let ch: string = str.charAt(i);
      if (ch >= "A" && ch <= "Z") {
        ch = String.fromCharCode(ch.charCodeAt(0) + 32);
      }
      lowerCase += ch;
    }
    return lowerCase;
  }
}

A3ReversEachStringinSentence.main();

// Lower Case String is : automation is fun
// Reverse Sentence and Each word :  noitamotua si nuf
