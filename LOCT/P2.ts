class P2 {
  public static main() {
    for (let i = 0; i <= 4; i++) {
      let ch = (i % 2 == 0) ? "&" : "*";
      let line = "";
      for (let j = 0; j <= i; j++) {
        line += ch;
      }
      console.log(line);
    }
  }
}


P2.main();