class ReverseString {
  static reverseString(input: string): string {
    let result = "";
    for (let i = input.length - 1; i >= 0; i--) {
      result = result + input.charAt(i);
    }
    return result;
  }
}

const str = "java";
console.log(ReverseString.reverseString(str));
