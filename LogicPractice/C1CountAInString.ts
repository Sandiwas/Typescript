class CountAInString {
  public static main(): void {
    let str = "Sandip Gahudas Wasekar";
    str = this.removeSpaceAndMakeLowerCase(str);
    console.log("Lower case count is :", str);
    let countOfa = this.countaInString(str);
    console.log("Count if a is ", countOfa);
  }

  public static countaInString(str: string): number {
    let counta = 0;
    for (let i = 0; i < str.length; i++) {
      let ch = str.charAt(i);
      if (ch === "a") {
        counta++;
      }
    }
    return counta;
  }

  public static removeSpaceAndMakeLowerCase(str: string): string {
    let lowerCase = "";
    for (let i = 0; i < str.length; i++) {
      let ch = str.charAt(i);
      if (ch !== " ") {
        if (ch >= "A" && ch <= "Z") {
          ch = String.fromCharCode(ch.charCodeAt(0) + 32);
        }
        lowerCase = lowerCase + ch;
      }
    }
    return lowerCase;
  }
}

CountAInString.main();
