class DuplicateCharInUsingSet {
  public static main(): void {
    let str: string = "Program  ming";
    str=this.removeSpaceMakeLowerCase(str)
    this.DuplicateCharInUsingSet(str)
  }
  public static DuplicateCharInUsingSet(str: string): void {
    let arr: string[] = str.split("");
    const mySet: Set<string> = new Set<string>();
    let duplicate: string[] = [];
    for (let ele of arr) {
      if (mySet.has(ele)) {
        duplicate.push(ele);
      } else {
        mySet.add(ele);
      }
    }
    console.log("Duplicate Char in string : ",duplicate.join(" "));
    console.log(Array.from(mySet));
  }

  public static removeSpaceMakeLowerCase(str: string): string {
    let lowerCase = "";
    for (let i = 0; i < str.length; i++) {
      let ch = str.charAt(i);
      if (ch != " ") {
        if (ch >= "A" && ch <= "Z") {
          ch = String.fromCharCode(ch.charCodeAt(0) + 32);
        }
        lowerCase = lowerCase + ch;
      }
    }
    return lowerCase;
  }
}

DuplicateCharInUsingSet.main();