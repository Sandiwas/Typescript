class P9 {
  public static main(): void {
    for (let i = 1; i <= 4; i++) {
      let list = "";
      for (let j = 3; j >= i; j--) {
        list += " ";
      }
      let ch = i % 2 == 0 ? "*" : "&";
      for (let k = 1; k <= i; k++) {
        list = list + ch;
      }
      for (let l = 2; l <= i; l++) {
        list = list + ch;
      }
      console.log(list);
    }
  }
}

P9.main();
