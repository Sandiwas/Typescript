class DuplicateWordInArray {
  public static main(): void {
    let arr: string[] = [
      "pune",
      "pune",
      "mumbai",
      "mu Mbai",
      "chEn nai",
      "chen nAi",
      "chennai",
      "Nagpur",
    ];
    arr = this.removeSpaceMakeLowerCase(arr);
    console.log(arr);
    this.findDuplucareStringAndOccurancesInArray(arr);
  }

  public static findDuplucareStringAndOccurancesInArray(arr: string[]): void {
    const map: Map<string, number> = new Map<string, number>();
    let count: number = 1;
    for (let i = 0; i < arr.length; i++) {
      if (!map.has(arr[i])) {
        map.set(arr[i], count);
      } else {
        map.set(arr[i], map.get(arr[i])! + count);
      }
    }
    for (let key of map.keys()) {
      if (map.get(key)! > 1) {
        console.log(key + " = " + map.get(key));
      }
    }
  }
  public static removeSpaceMakeLowerCase(arr: string[]): string[] {
    for (let i = 0; i < arr.length; i++) {
      let word: string = arr[i];
      let lowerCase = "";
      for (let j = 0; j < word.length; j++) {
        let ch: string = word.charAt(j);
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
DuplicateWordInArray.main();
