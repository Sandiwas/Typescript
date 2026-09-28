class PP10 {
  public static main(): void {
    for (let i = 1; i <= 4; i++) {
      let list = "";
      for (let j = 2; j <= i; j++) {
        list += " ";
      }

      for (let k = 4; k >= i; k--) {
        list += "*";
      }
      for (let l = 3; l >= i; l--) {
        list += "*";
      }
      console.log(list);
    }
  }
}

PP10.main();
