class P3 {
  public static main() {
    for (let i = 1; i <= 4; i++) {
      let ch = i % 2 == 0 ? "#" : "*";
      let line = "";
      for (let j = 4; j >= i; j--) {
        line += ch;
      }
      console.log(line);
    }
  }
}

P3.main();
