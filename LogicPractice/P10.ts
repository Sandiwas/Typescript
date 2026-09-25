class P10 {
  public static main(): void {
    for (let i = 1; i <= 4; i++) {
      let list = "";
      for (let j = 2; j <= i; j++) {
        list += " ";
      }
      let ch = i % 2 == 0 ? "&" : "*";
      for (let k = 4; k >= i; k--) {
        list += ch;
      }
      for (let l = 3; l >= i; l--) {
        list += ch;
      }
      console.log(list);
    }
  }
}

P10.main();
