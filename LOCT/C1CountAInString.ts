class CountAInString {
  public static main(): void {
    let str = "Sandip Gahudas Wasekar";
    let count = this.countA(str);
    console.log(count);
  }

  public static countA(str: string): number {
    let lowerCase: string = "";
    let count: number = 0;
    for (let i = 0; i < str.length; i++) {
      let ch: string = str.charAt(i);
      if (ch != " ") {
        if (ch >= "A" && ch <= "Z") {
          ch = String.fromCharCode(ch.charCodeAt(0) + 32);
        }
        if (ch === "a") {
          count++;
        }
      }
    }
    return count;
  }
}

CountAInString.main();
