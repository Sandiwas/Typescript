class PlaindromeString {
  public static main(): void {
    let str: string = "Ra dar";

    str = this.removespaceMakeLowerCase(str);
    console.log(str)
    this.isPalindromeString(str);
  }

  public static isPalindromeString(str: string) {
    if (str === this.reverseString(str)) {
      console.log("Given string is palindrome String");
    } else {
      console.log("Given string is not palindrome string ");
    }
  }

  public static reverseString(str: string): string {
    let result: string = "";
    for (let i = str.length - 1; i >= 0; i--) {
      result = result + str.charAt(i);
    }
    return result;
  }

  public static removespaceMakeLowerCase(str: string): string {
    let lowerCase: string = "";
    for (let i = 0; i < str.length; i++) {
      let ch: string = str.charAt(i);
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

PlaindromeString.main();
