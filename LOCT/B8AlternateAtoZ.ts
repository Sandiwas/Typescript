class B8AlternateAtoZ {
  public static alternetChar() {
    let result: string = "";
    for (let ch = "A".charCodeAt(0); ch <= "Z".charCodeAt(0); ch += 2) {
      result = result + String.fromCharCode(ch) + " ";
    }
    console.log(result);
  }
}

B8AlternateAtoZ.alternetChar();
