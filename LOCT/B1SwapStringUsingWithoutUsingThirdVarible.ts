class SwapString {
  public static main(): void {
    let s1: string = "Hello";
    let s2: string = "World";

    this.swap(s1, s2);
  }

  public static swap(s1: string, s2: string) {
    s1 = s1 + s2;
    s2 = s1.substring(0, s1.length - s2.length);
    s1 = s1.substring(s2.length);

    console.log(`s1 : ${s1}`);
    console.log(`s2 : ${s2}`);
  }
}

SwapString.main();
