class SwapNumber {
  public static main(): void {
    let x: number = 100;
    let y: number = 200;
    this.swap(x, y);
  }
  public static swap(x: number, y: number) {
    let z: number = 0;
    z = x;
    x = y;
    y = z;
    console.log("x = " + x);
    console.log("y = " + y);
  }
}

SwapNumber.main();
