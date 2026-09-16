class C5SwapNum {
  public static main(): void {
    let x = 100;
    let y = 200;
    this.swap(x, y);
  }

  public static swap(x: number, y: number) {
    let z;
    z = x;
    x = y;
    y = z;
    console.log("x : ", x);
    console.log("y : ", y);
  }
}

C5SwapNum.main();
