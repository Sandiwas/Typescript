class FindDuplictaeString {
  public static main() {
    let str: string = "I am learning learning java java";
    str = this.removeSpaceMakeLowerCase(str);
    this.findDuplictaeString(str);
  }

  public static findDuplictaeString(str: string) {
    const mySet: Set<string> = new Set<string>();
    let result: string[] = [];
    let arr: string[] =str.split(" ");
    for (let i = 0; i < arr.length; i++) {
      if (!mySet.has(arr[i])) {
        mySet.add(arr[i]);
      }else{
        result.push(arr[i]);
      }
    }
    console.log("Duplictae string in array : ",result.join(" "));
    console.log(Array.from(mySet));
    
    
  }

  public static removeSpaceMakeLowerCase(str: string): string {
    let lowerCase = "";
    for (let i = 0; i < str.length; i++) {
      let ch = str.charAt(i);
      if (ch != " ") {
        if (ch >= "A" && ch <= "Z")
          ch = String.fromCharCode(ch.charCodeAt(0) + 32);
      }
      lowerCase += ch;
    }
    return lowerCase;
  }
}

FindDuplictaeString.main();
