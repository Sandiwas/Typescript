class ReverseSentence {
  public static main(): void {
    let str: string = "Automation is Fun";
    str=this.makeLowerCase(str)
  }

  public static makeLowerCase(str: string):string {
    let lowerCase: string = "";
    for (let i = 0; i < structuredClone.length; i++) {
      let ch = str.charAt(i);
      if (ch >= "A" && ch <= "Z") {
        ch = String.fromCharCode(ch.charCodeAt(0) + 32);
      }
      lowerCase += ch;
    }
    return lowerCase;
  }
}


ReverseSentence.main()