class CountVowels {
  public static main(): void {
    let str: string = "Sandip Gahudas Wasekar";

    str = this.removeSpaceAndMakeLowerCase(str);
    console.log("Lower case String : ", str);
    let vowelsCount = this.vowelsAndConsonantCount(str);
    console.log("vowels count is : ", vowelsCount);
  }

  public static vowelsAndConsonantCount(str: string): number {
    let vowelsCount: number = 0;
    let consonantCount: number = 0;
    for (let i = 0; i < str.length; i++) {
      let ch = str.charAt(i);
      if (ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u") {
        vowelsCount++;
      } else {
        consonantCount++;
      }
    }
    console.log("Counsonant count in string is : ", consonantCount);
    return vowelsCount;
  }

  public static removeSpaceAndMakeLowerCase(str: string): string {
    let lowerCase = "";
    for (let i = 0; i < str.length; i++) {
      let ch = str.charAt(i);
      if (ch != " ") {
        if (ch >= "A" && ch <= "Z") {
          ch = String.fromCharCode(ch.charCodeAt(0) + 32);
        }
        lowerCase += ch;
      }
    }
    return lowerCase;
  }
}

CountVowels.main();
