class FirstNonRepeatedCharacterUsingMap {
  public static main(): void {
    let str: string = "autoM ation";
    str = this.removeSpaceMakeLowerCase(str);
    console.log(str);
    this.findNoRepeatedFirstChar(str);
  }

  public static findNoRepeatedFirstChar(str: string) {
    let map: Map<string, number> = new Map<string, number>();
    let arr: string[] = str.split("");
    let count: number = 1;
    for (let i = 0; i < arr.length; i++) {
      if (!map.has(arr[i])) {
        map.set(arr[i], count);
      } else {
        map.set(arr[i], map.get(arr[i])! + count);
      }
    }
    for (let key of map.keys()) {
      if (map.get(key)! === 1) {
        console.log("first non repeted char in string  ", key);
        return;
      }
    }
  }
  public static removeSpaceMakeLowerCase(str: string) {
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

FirstNonRepeatedCharacterUsingMap.main();
