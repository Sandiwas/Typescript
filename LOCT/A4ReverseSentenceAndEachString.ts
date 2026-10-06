class ReverseSentenceAndEachString {
  public static main() {
    let str = "Automation Is Fun";
    str = this.reverseStringAndSentence(str);
    console.log(str);
  }

  public static reverseStringAndSentence(str: string): string {
    let result: string = "";
    let arr: string[] = str.split(" ");
    for (let i = arr.length - 1; i >= 0; i--) {
      let word = arr[i];
      let reverseString = "";
      for (let j = word.length - 1; j >= 0; j--) {
        reverseString += word.charAt(j);
      }
    }
    return result;
  }
}

ReverseSentenceAndEachString.main();
