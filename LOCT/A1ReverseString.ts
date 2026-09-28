class ReverseString {
  public static main() {
    let str: string = "Automat ion";
    str = this.removeSpaceMakeLowerCase(str);
    str = this.reverseString(str);
    console.log("Reverse String is : ", str);
  }

  public static reverseString(str: string) {
    let result = "";
    for (let i = str.length - 1; i >= 0; i--) {
      result = result + str.charAt(i);
    }
    return result;
  }

  public static removeSpaceMakeLowerCase(str: string): string {
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

ReverseString.main();
