class RemoveDuplucareStringInUsingFor2ndWay {
  public static main(): void {
    let arr: string[] = [
      "pune",
      "pu   ne",
      "mumbai",
      "mumb ai",
      "che nnai",
      "che nnai",
    ];

    arr = this.removeSpaceMakeLowerCase(arr);
    console.log(arr);
    arr = this.removeDuplicateString(arr);
    console.log(arr);
  }

  public static removeDuplicateString(arr: string[]): string[] {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === "0") {
        continue;
      }
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
          arr[j] = "0";
        }
      }
    }

    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== "0") {
        count++;
      }
    }

    let result: string[] = new Array(count);
    let index: number = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] !== "0") {
        result[index++] = arr[j];
      }
    }
    return result;
  }

  public static removeSpaceMakeLowerCase(arr: string[]): string[] {
    for (let i = 0; i < arr.length; i++) {
      let word: string = arr[i];
      let lowerCase: string = "";
      for (let j = 0; j < word.length; j++) {
        let ch = word.charAt(j);
        if (ch !== " ") {
          if (ch >= "A" && ch <= "Z") {
            ch = String.fromCharCode(ch.charCodeAt(0) + 32);
          }
          lowerCase += ch;
        }
      }
      arr[i] = lowerCase;
    }
    return arr;
  }
}

RemoveDuplucareStringInUsingFor2ndWay.main();
