class RemoveDuplicateCharUsingFor {
  public static main(): void {
    let str = "AutO mation";
    str = this.removeSpaceMakeLowerCase(str);
    console.log(str);
    str = this.removeDuplicareChar(str);
    console.log(str);
  }
  public static removeDuplicareChar(str: string): string {
    let result = "";
    const arr: string[] = str.split("");
    let n: number = arr.length;

    for (let i = 0; i < arr.length; i++) {
      let count = 1;
      if (arr[i] === "0") {
        continue;
      }
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
          arr[j] = "0";
        }
      }

      if (arr[i] !== "0") {
        result += arr[i];
      }
    }
    return result;
  }
  public static removeSpaceMakeLowerCase(str: string): string {
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

RemoveDuplicateCharUsingFor.main();
