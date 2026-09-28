class PP3 {
  public static main() {
    for (let i = 1; i <= 4; i++) {
      let list = "";
      for (let j = 4; j >= i; j--) {
        list += "*";
      }
      console.log(list);
    }
  }
}

PP3.main();
