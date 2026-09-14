class AlternateAtoZ {
  public static alternetAToZ(): string {
    let result: string = "";
    for (let ch = "a".charCodeAt(0); ch <= "z".charCodeAt(0); ch += 2) {
      result += String.fromCharCode(ch) + " ";
    }
    return result;
  }
}

let result = AlternateAtoZ.alternetAToZ();
console.log(result);
