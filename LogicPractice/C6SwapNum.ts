class SwapNum {
  public static main(): void {
    let x = 100;
    let y = 200;
    this.swap(x, y);
  }
  public static swap(x: number, y: number): void {
    x = x + y;
    y = x - y;
    x = x - y;
    console.log("x = " + x);
    console.log("y = " + y);
  }
}

SwapNum.main();
