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


// reverseString("java")
//     ↓
// reverseString("ava") + "j"
//     ↓
// reverseString("va") + "a"
//     ↓
// reverseString("a") + "v"
//     ↓
// reverseString("") + "a"
//     ↓
// ""

// Now returning back:

// "" + "a"      = "a"
// "a" + "v"     = "av"
// "av" + "a"    = "ava"
// "ava" + "j"   = "avaj"