class AlternateAtoZ {
  public static alternet() {
    let result: string = "";
    for (let ch = "A".charCodeAt(0); ch <= "Z".charCodeAt(0); ch ++) {
      result = result + String.fromCharCode(ch) + " ";
    }
    console.log(result);
  }
}

AlternateAtoZ.alternet();

/* 
| Method                    | Conversion             |
| ------------------------- | ---------------------- |
| `'A'.charCodeAt(0)`       | **Character → Number** |
| `String.fromCharCode(65)` | **Number → Character** |
 */
