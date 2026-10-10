class CountVowelsAndConsonants {
  public static main(): void {
    let str: string = "Sandip Gahudas Wasekar";
    str = this.removeSpaceMakeLowerCase(str);
    console.log(str);
    this.countVowelsAndConsonants(str);
  }

  public static countVowelsAndConsonants(str: string) {
    let vowelsCount: number = 0;
    let consonantsCount: number = 0;
    let vowels: string = "";
    let consonats: string = "";
    for (let i = 0; i < str.length; i++) {
      let ch: string = str.charAt(i);
      if (ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u") {
        vowels += ch;
        vowelsCount++;
      } else {
        consonats += ch;
        consonantsCount++;
      }
    }
    console.log("vowels : ", vowels);
    console.log("consonants : ", consonats);
    console.log("count vowels : ", vowelsCount);
    console.log("count Consonants : ", consonantsCount);
  }

  public static removeSpaceMakeLowerCase(str: string): string {
    let lowerCase: string = "";
    for (let i = 0; i < str.length; i++) {
      let ch: string = str.charAt(i);
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

CountVowelsAndConsonants.main();
