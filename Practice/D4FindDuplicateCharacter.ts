class FindDuplicateCharCount {
  static findDuplicateChar(str: string) {
    const arr = str.split("");
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === "0") {
        continue;
      }
      let count = 1;
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
          count++;
          arr[j] = "0";
        }
      }
      if (count > 1 && arr[i] !== "0") {
        console.log(arr[i] + " = " + count);
      }
    }
  }
  static makeLowerCase(str: string): string {
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

let str = "Au tomation";
str = FindDuplicateCharCount.makeLowerCase(str);
FindDuplicateCharCount.findDuplicateChar(str);
