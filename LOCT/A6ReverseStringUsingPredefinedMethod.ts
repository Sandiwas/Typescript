class ReverseString {
  public static main(): void {
    let str: string = "java";
    str = this.reverseString(str);
    console.log(str);
  }

  public static reverseString(str: string): string {
    let result = "";
    result = str.split("").reverse().join("").trim();
    return result;
  }
}

ReverseString.main();
