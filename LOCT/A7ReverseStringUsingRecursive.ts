class ReverseStringUsingRecursive {
  public static main(): void {
    let str: string = "java";
    str = this.reverseString(str);
    console.log(str);
  }

  public static reverseString(str: string): string {
    while (str.length === 0) {
      return str;
    }
    return this.reverseString(str.substring(1)) + str.charAt(0);
  }
}

ReverseStringUsingRecursive.main();
