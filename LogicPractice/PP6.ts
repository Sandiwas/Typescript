class PP6 {
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

    for (let i = 1; i <= 3; i++) {
      let list = "";
      for (let j = 1; j <= i; j++) {
        list += " ";
      }

      for (let k = 3; k >= i; k--) {
        list += "*";
      }
      console.log(list);
    }
  }
}

PP6.main();
