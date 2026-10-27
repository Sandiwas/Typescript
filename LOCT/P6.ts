class P6 {
  public static main(): void {
    for (let i = 0; i <= 4; i++) {
      let ch = i % 2 == 0 ? "&" : "*";
      let line = "";
      for (let j = 1; j <= i; j++) {
        line += ch;
      }
      console.log(line);
    }
    for (let i = 1; i <= 3; i++) {
      let ch = i % 2 == 0 ? "&" : "*";
      let line = "";
      for (let j = 3; j >= i; j--) {
        line += ch;
      }
      console.log(line);
    }
  }
}

P6.main();
