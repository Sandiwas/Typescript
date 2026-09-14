class CharacterSeparator {
  public static main() {
    let str = "SDFA3jdjdn3765678#$%^#";
    this.charSeprater(str);
  }
  public static charSeprater(str: string): void {
    let lowerCase: string = "";
    let upperCase: string = "";
    let number: string = "";
    let specialChar: string = "";
    for (let i = 0; i < str.length; i++) {
      let ch = str.charAt(i);
      if (ch >= "A" && ch <= "Z") {
        upperCase += ch;
      } else if (ch >= "a" && ch <= "z") {
        lowerCase = lowerCase + ch;
      } else if (ch >= "0" && ch <= "9") {
        number += ch;
      } else {
        specialChar = specialChar + ch;
      }
    }
    console.log("Upper Case char : ", upperCase);
    console.log("LowerCase Case char : ", lowerCase);
    console.log("Number Case char : ", number);
    console.log("SpecialChar Case char : ", specialChar);
  }
}

CharacterSeparator.main();
