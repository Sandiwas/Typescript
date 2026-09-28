class PP4 {
  public static main(): void {
    for (let i = 1; i <= 4; i++) {
      let list = "";
      for (let j = 3; j >= i; j--) {
        list += " ";
      }
      for (let k = 1; k <= i; k++) {
        list += "*";
      }
      console.log(list);
    }
  }
}

PP4.main();
