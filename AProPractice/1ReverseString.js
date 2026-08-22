class ReverseString {
   static reverseString(str) {
    let result = "";
    for (let i = str.length - 1; i >= 0; i--) {
      result += str.charAt(i);
    }
    return result;
  }

   static RemoveSpaceMakeLowerCase(str) {
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

let str = "ja va";
str = ReverseString.RemoveSpaceMakeLowerCase(str);
console.log(`string without space with lowerCase : ${str}`);
console.log(ReverseString.reverseString(str));
