class G1DuplicateCharacterInStringFor {
  public static main(): void {
    let str: string = "Auto mation";
    str = this.removeSpaceMakeLowerCase(str);
    console.log(str);
    this.findDuplicateChar(str);
  }

  public static findDuplicateChar(str: string) {
    let arr: string[] = str.split("");

    for (let i = 0; i < str.length; i++) {
      let count = 1;
      if (arr[i] === "0") {
        continue;
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
  public static removeSpaceMakeLowerCase(str: string): string {
    let lowerCase = "";
    for (let i = 0; i < str.length; i++) {
      let ch = str.charAt(i);
      if (ch != " ") {
        if (ch >= "A" && ch <= "Z") {
          ch = String.fromCharCode(ch.charCodeAt(0) + 32);
        }
        lowerCase = lowerCase + ch;
      }
    }
    return lowerCase;
  }
}

G1DuplicateCharacterInStringFor.main();
