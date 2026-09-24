class P6 {
  public static main() {
    for (let i = 1; i <= 4; i++) {
      let list = "";
      for (let j = 3; j >= i; j--) {
        list += " ";
      }
      let ch = i % 2 == 0 ? "*" : "&";
      for (let k = 1; k <= i; k++) {
        list += ch;
      }
      console.log(list);
    }
    for (let i = 1; i <= 3; i++) {
      let list = "";
      for (let j = 1; j <= i; j++) {
        list += " ";
      }
      let ch = i % 2 == 0 ? "*" : "&";
      for (let k = 3; k >= i; k--) {
        list += ch;
      }
      console.log(list);
    }
  }
}

P6.main();
