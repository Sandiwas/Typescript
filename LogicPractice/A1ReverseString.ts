class RevrseString {
  public static main(): void {
    let str: string = "Auto mation";
    str=RevrseString.removeSpaceMakelowerCase(str);
    str=RevrseString.reverseString(str);
    console.log("Reverse String is : ",str)
  }

  public static reverseString(str: string): string {
    let result = "";
    for (let i = str.length - 1; i >= 0; i--) {
      result += str.charAt(i);
    }
    return result;
  }

  public static removeSpaceMakelowerCase(str: string) {
    let lowerCase = "";
    for (let i = 0; i < str.length; i++) {
      let ch = str.charAt(i);
      if (ch !== " ") {
        if (ch >= "A" && ch <= "Z") {
          ch = String.fromCharCode(ch.charCodeAt(0) + 32);
        }
        lowerCase += ch;
      }
    }
    return lowerCase;
  }
}


RevrseString.main();