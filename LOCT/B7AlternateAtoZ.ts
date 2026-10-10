class AlternetAlpabets {
  public static main(): void {
    let str = this.alternetA2Z();
    console.log(str);
  }
  public static alternetA2Z():string {
    let result: string = "";
    for (let ch = "A".charCodeAt(0); ch <= "Z".charCodeAt(0); ch ++) {
      result = result + String.fromCharCode(ch)+" ";
    }
    return result;
  }
}

AlternetAlpabets.main();
