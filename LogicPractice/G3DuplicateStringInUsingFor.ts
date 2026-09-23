class DuplicateStringInUsingFor {
  public static main(): void {
    let arr: string[] = [
      "pune",
      "pune",
      "mum bai",
      "mu m bai",
      "chen nai",
      "chennai",
    ];

    arr = this.removeSpaceMakeLowerCase(arr);
    console.log(arr);
    this.findDuplicateWord(arr);
  }

  public static findDuplicateWord(arr: string[]): void {
    for (let i = 0; i < arr.length; i++) {
      let count = 1;
      if (arr[i] === "0") {
      }
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

  public static removeSpaceMakeLowerCase(arr: string[]): string[] {
    for (let i = 0; i < arr.length; i++) {
      let lowerCase: string = "";
      let word: string = arr[i];
      for (let j = 0; j < word.length; j++) {
        let ch: string = word.charAt(j);
        if (ch !== " ") {
          if (ch >= "A" && ch <= "Z") {
            ch = String.fromCharCode(ch.charCodeAt(0) + 32);
          }
          lowerCase = lowerCase + ch;
        }
        arr[i] = lowerCase;
      }
    }
    return arr;
  }
}

DuplicateStringInUsingFor.main();
