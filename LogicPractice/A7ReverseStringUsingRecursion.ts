class ReverseStringUsingRecursive {
  public static main(): void {
    let str: string = "Automation";
    str = ReverseStringUsingRecursive.reverseString(str);
    console.log(str);
  }

  public static reverseString(str: string): string {
    if (str.length === 0) {
      return str;
    }
    return (
      ReverseStringUsingRecursive.reverseString(str.substring(1)) +
      str.charAt(0)
    );
  }
}

ReverseStringUsingRecursive.main();
