class SubString {
  public static main() {
    let str: string = "Automation";

    str = this.substring(str, 0, 4);
    console.log(str);
  }

  public static substring(str: string, start: number, end: number) {
    if (str === null || str.length === 0) {
      throw new Error("Input string is null or empty");
    }
    if (start < 0 || start > end || end > str.length) {
      throw new Error("Invalid Indexes");
    }
    let result = "";
    for (let i = start; i < end; i++) {
      result = result + str.charAt(i);
    }
    return result;
  }
}
SubString.main();
