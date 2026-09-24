class P3 {
  public static main(): void {
    for (let i = 1; i <= 4; i++) {
      let ch = i % 2 == 0 ? "*" : "&";
      let list = "";
      for (let j = 4; j >= i; j--) {
        list += ch;
      }
      console.log(list);
    }
  }
}

P3.main();
