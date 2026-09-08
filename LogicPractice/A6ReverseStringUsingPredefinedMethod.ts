class ReverseString {
  public static main() {
    let str = "Aut omation";
    str = ReverseString.removeSpaceMakeLowerCase(str);
    console.log(str);
    str = ReverseString.reverseString(str);
    console.log(str);
  }

  public static reverseString(str: string): string {
    return str.split("").reverse().join("");
  }

  public static removeSpaceMakeLowerCase(str: string) {
    let lowerCase: string = "";
    for (let i = 0; i < str.length; i++) {
      let ch = str.charAt(i);
      if (ch !== " ") {
        if (ch >= "A" && ch <= "Z") {
          ch = String.fromCharCode(ch.charCodeAt(0) + 32);
        }
        lowerCase = lowerCase + ch;
      }
    }
    return lowerCase;
  }
}

ReverseString.main();
