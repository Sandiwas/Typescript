class ReverseString {
  static reverseString(str: string): string {
    let reverse: string = "";
    for (let i = str.length - 1; i >= 0; i--) {
      reverse = reverse + str.charAt(i);
    }
    return reverse;
  }

  static removeSpaceMakeLowerCase(str: string): string {
    let lowerCase: string = "";
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

let str: string = "Auto mation";
str=ReverseString.removeSpaceMakeLowerCase(str)
str=ReverseString.reverseString(str)
console.log(str)
