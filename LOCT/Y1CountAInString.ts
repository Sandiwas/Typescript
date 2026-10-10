class removeAfromString {
  public static main(): void {
    let str = "Sandip Gahudas Wasekar";
    str = this.removeAFromString(str);
    console.log(str);
  }

  public static removeAFromString(str: string): string {
    let lowerCase: string = "";
    let result: string = "";
    for (let i = 0; i < str.length; i++) {
      let ch: string = str.charAt(i);
      if (ch != " ") {
        if (ch >= "A" && ch <= "Z") {
          ch = String.fromCharCode(ch.charCodeAt(0) + 32);
        }
        if (ch !== "a") {
          result += ch;
        }
      }
    }
    return result;
  }
}

removeAfromString.main();
