class P5 {
  public static main() {
    for (let i = 1; i <= 4; i++) {
      let ch = i % 2 == 0 ? "*" : "#";
      let line = "";
      for (let j = 3; j >= i; j--) {
        line += " ";
      }
      for (let k = 1; k <= i; k++) {
        line += ch;
      }
      console.log(line);
    }
  }
}

P5.main();
