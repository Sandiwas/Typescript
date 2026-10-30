class P10 {
  public static main(): void {
    for (let i = 1; i <= 4; i++) {
      let ch = i % 2 == 0 ? "*" : "&";
      let line = "";
      for (let j = 3; j >= i; j--) {
        line += " ";
      }
      for (let k = 1; k <= i; k++) {
        line += ch;
      }
      for (let l = 2; l <= i; l++) {
        line += ch;
      }
      console.log(line);
    }
  }
}

P10.main();
