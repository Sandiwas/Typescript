class SubstringMethod {
  public static main(): void {
    let str: string = "Automation";
    str = this.subString(str, 0, 5);
    console.log("Substring is : ", str);
  }

  public static subString(str: string, start: number, end: number): string {
    let result: string = "";
    if (str.length === 0) {
      throw new Error("Input String is Null");
    }
    if (start < 0 || start > end || end > str.length) {
      throw new Error("Invalid Indexes");
    }

    for (let i = start; i < end; i++) {
      result = result + str.charAt(i);
    }
    return result;
  }
}

SubstringMethod.main();
