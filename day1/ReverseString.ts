function reverseString(str: String): String {
  let reversedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str.charAt(i);
  }
  return reversedStr;
}

let input: String = "sandip";
let result: String = reverseString(input);
console.log(result);
