class MakeLowerCaseUpperCaseUpperCaseLowerChar {
  public static main(): void {
    let str: string = "PrOgRaM2mIn3G";
    str=this.toggleCase(str);
    console.log("Toggle Case ",str)
  }

  public static toggleCase(str: string): string {
    let result = "";
    for (let i = 0; i < str.length; i++) {
      let ch = str.charAt(i);
      if (ch >= "A" && ch <= "Z") {
        result = result + String.fromCharCode(ch.charCodeAt(0) + 32);
      } else if (ch >= "a" && ch <= "z") {
        result = result + String.fromCharCode(ch.charCodeAt(0) - 32);
      } else {
        result = result + ch;
      }
    }
    return result;
  }
}

MakeLowerCaseUpperCaseUpperCaseLowerChar.main()