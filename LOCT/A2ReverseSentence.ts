class ReverseSentence {
  public static main(): void {
    let str: string = "Automation is Fun";
    str = this.makeLowerCase(str);
    console.log(str);
    str = this.reverseSentence(str);
    console.log(str);
  }

  public static reverseSentence(str: string): string {
    let result: string = "";
    let arr: string[] = str.split(" ");
    for (let i = arr.length - 1; i >= 0; i--) {
      result += arr[i] + " ";
    }
    return result;
  }

  public static makeLowerCase(str: string): string {
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

ReverseSentence.main();
