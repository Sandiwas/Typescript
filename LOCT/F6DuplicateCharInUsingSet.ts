class findDuplicateCharUsing {
  public static main() {
    let str: string = "Program  ming";
    str = this.removeSpaceMakeLowerCase(str);
    console.log(str);
    this.findDuplicateChar(str);
  }

  public static findDuplicateChar(str: string) {
    let mySet: Set<string> = new Set<string>();
    let result: string[] = [];
    let arr: string[] = str.split("");
    for (let ele of arr) {
      if (!mySet.has(ele)) {
        mySet.add(ele);
      } else {
        result.push(ele);
      }
    }
    console.log("Duplicate Char string : ",result.join(" "));
    console.log(Array.from(arr));
    
    
  }

  public static removeSpaceMakeLowerCase(str: string): string {
    let lowerCase = "";
    for (let i = 0; i < str.length; i++) {
      let ch: string = str.charAt(i);
      if (ch !== " ") {
        if (ch >= "A" && ch <= "Z") {
          ch = String.fromCharCode(ch.charCodeAt(0) + 32);
        }
        lowerCase += ch;
      }
    }
    return lowerCase;
  }
}

findDuplicateCharUsing.main();
