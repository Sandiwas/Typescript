class P8 {
  public static main() {
    for (let i = 1; i <= 4; i++) {
      let line = "";
      let ch = i % 2 == 0 ? "*" : "&";
      for (let j = 3; j >= i; j--) {
        line += " ";
      }
      for (let k = 1; k <= i; k++) {
        line += ch + " ";
      }
      console.log(line);
    }
  }
}

P8.main();
