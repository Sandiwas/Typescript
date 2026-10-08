class CharacterSeparator {
  public static main(): void {
    let str: string = "SDFA3jdjdn3765678#$%^#";
    this.charSeprater(str);
  }

  public static charSeprater(str: string) {
    let lowerCase: string = "";
    let upperCase: string = "";
    let specialChar: string = "";
    let numbers: string = "";

    for (let i = 0; i < str.length; i++) {
      let ch = str.charAt(i);
      if (ch >= "A" && ch <= "Z") {
        upperCase += ch;
      } else if (ch >= "a" && ch <= "z") {
        lowerCase += ch;
      } else if (ch >= "0" && ch <= "9") {
        numbers += ch;
      } else {
        specialChar += ch;
      }
    }
    console.log(`UpperCase : ${upperCase}`);
    console.log(`LowerCase : ${lowerCase}`);
    console.log(`SpecialChar : ${specialChar}`);
    console.log(`Numbers : ${numbers}`);
  }
}

CharacterSeparator.main();
