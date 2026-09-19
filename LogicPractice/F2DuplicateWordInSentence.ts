class DuplicateWordInSentence {
  public static main(): void {
    let str: string = "I am Learning learning Java java";
    str = this.makeLowerCase(str);
    console.log(str);
    this.findDuplicateWordOccurances(str);
  }

  public static findDuplicateWordOccurances(str: string) {
    const arr: Array<string> = str.split(" ");
    const map: Map<string, number> = new Map<string, number>();
    let count = 1;
    for (let i = 0; i < arr.length; i++) {
      if (!map.has(arr[i])) {
        map.set(arr[i], count);
      } else {
        map.set(arr[i], map.get(arr[i])! + count);
      }
    }
    for (let key of map.keys()) {
      if (map.get(key)! > 1) {
        console.log(key + " = ", map.get(key));
      }
    }
  }

  public static makeLowerCase(str: string): string {
    let lowerCase = "";
    for (let i = 0; i < str.length; i++) {
      let ch = str.charAt(i);
      if (ch >= "A" && ch < "Z") {
        ch = String.fromCharCode(ch.charCodeAt(0) + 32);
      }
      lowerCase += ch;
    }
    return lowerCase;
  }
}

DuplicateWordInSentence.main();
