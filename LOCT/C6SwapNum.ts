class SwapNumberWithoutUsingVariable {
  public static main() {
    let x: number = 100;
    let y: number = 200;
    this.swapNumber(x, y);
  }

  public static swapNumber(x: number, y: number) {
    x = x + y;
    y = x - y;
    x = x - y;
    console.log("x = ", x);
    console.log("y = ", y);
  }
}

SwapNumberWithoutUsingVariable.main();
