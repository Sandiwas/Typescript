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
}

let str = "automation";
FindDuplicateCharCount.findDuplicateChar(str);
