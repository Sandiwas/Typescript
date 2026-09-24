class P1 {
  public static main(): void {
    for (let i = 1; i <= 4; i++) {
      let ch = i % 2 == 0 ? "*" : "&";
      let line = "";
      for (let j = 1; j <= 4; j++) {
        line += ch;
      }
      console.log(line);
    }
  }
}

P1.main();
