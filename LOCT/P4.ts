class P4 {
  public static main() {
    for (let i = 1; i <= 4; i++) {
      let ch = i % 2 == 0 ? "*" : "&";
      let line = "";
      for (let j = 2; j <= i; j++) {
        line += " ";
      }
      for (let k = 4; k >= i; k--) {
        line += ch;
      }
      console.log(line);
    }
  }
}

P4.main();
