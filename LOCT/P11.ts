class P11 {
  public static main() {
    for (let i = 1; i <= 4; i++) {
      let ch = i % 2 == 0 ? "&" : "*";
      let line = "";
      for (let j = 2; j <= i; j++) {
        line += " ";
      }
      for (let k = 4; k >= i; k--) {
        line += ch;
      }
      for (let l = 3; l >= i; l--) {
        line += ch;
      }
      console.log(line);
    }
  }
}

P11.main();
