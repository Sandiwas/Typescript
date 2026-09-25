class PP2 {
  public static main(): void {
    for (let i = 1; i <= 4; i++) {
      let list = "";
      for (let j = 1; j <= i; j++) {
        list += "*";
      }
      console.log(list);
    }
  }
}

PP2.main();
