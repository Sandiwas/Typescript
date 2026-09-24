class P4 {
  public static main(): void {
    for (let i = 1; i <= 4; i++) {
      let ch = i % 2 == 0 ? "*" : "&";
      let list = "";
      for (let j = 3; j >= i; j--) {
        list += " ";
      }
      for (let k = 1; k <= i; k++) {
        list += ch;
      }
      console.log(list);
    }
  }
}



P4.main();