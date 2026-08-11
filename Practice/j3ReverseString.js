class ReverseString {
  static reverseString(str) {
    let result = "";
    for (let i = str.length - 1; i >= 0; i--) {
      result = result + str.charAt(i);
    }
    return result;
  }
}
let str = "java";
str = ReverseString.reverseString(str);
console.log(`${str}`);
