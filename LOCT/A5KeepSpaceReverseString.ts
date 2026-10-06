class KeepSpaceReverseString {
  static main(): void {
    let str: string = "Automaton is Fun";
    str = this.reverseString(str);
    str = this.makeLowerCase(str);
    console.log(str);
  }

  public static reverseString(str: string): string {
    let result: string[] = new Array<string>(str.length);
    let arr: string[] = str.split("");

    for (let i = 0; i < str.length; i++) {
      if (arr[i] === " ") {
        result[i] = arr[i];
      }
    }
    let j = str.length - 1;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== " ") {
        while (arr[j] === " ") {
          j--;
        }
        result[j] = arr[i];
        j--;
      }
    }
    return result.join("");
  }

  public static makeLowerCase(str: string): string {
    let lowerCase: string = "";
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

KeepSpaceReverseString.main();
