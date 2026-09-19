class DuplicateStringInSentenceUsingSet {
  public static main(): void {
    let str: string = "I am learning learning java java";
    let arr= this.makeLowerCase(str);
    console.log(arr)
    this.findDuplicateStringInSentence(arr);
  }
  public static findDuplicateStringInSentence(arr: string[]): void {
    const mySet: Set<string> = new Set<string>();
    let duplictae: string[] = [];
    for (let ele of arr) {
      if (mySet.has(ele)) {
        duplictae.push(ele);
      } else {
        mySet.add(ele);
      }
    }
    console.log("Duplicate String In Sentence is : ",duplictae.join(" "));
    console.log(Array.from(mySet));
  }

  public static makeLowerCase(str: string): string[] {
    const arr: string[] = str.split(" ");
    for (let i = 0; i < arr.length; i++) {
      let word: string = arr[i];
      let lowerCase: string = "";
      for (let j = 0; j < word.length; j++) {
        let ch = word.charAt(j);
        if (ch >= "A" && ch <= "Z") {
          ch = String.fromCharCode(ch.charCodeAt(i) + 32);
        }
        lowerCase += ch;
      }
      arr[i]=lowerCase;
    }
    return arr;
  }
}

DuplicateStringInSentenceUsingSet.main();
