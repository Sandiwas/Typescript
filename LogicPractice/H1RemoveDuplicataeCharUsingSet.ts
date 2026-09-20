class RemoveDuplicateCharUsingSet {
  public static main():void {
    let str: string = "Automat ion";
    console.log("After removing spaces and converting to lowercase:", str);
    str = this.removeSpaceMakeLowerCase(str);
    this.removeDuplicateChar(str);
  }

  public static removeDuplicateChar(str: string):void {
    let arr: string[] = str.split("");
    let result: string = "";

    const mySet: Set<string> = new Set<string>();
    for (let ele of arr) {
      
      if (mySet.has(ele)) {
        result += ele;
      } else {
        mySet.add(ele);
      }
    }
    console.log("After removing duplicate characters :  ",Array.from(mySet).join(""));
    console.log("Duplicate characters :",result);
    
  }
  public static removeSpaceMakeLowerCase(str: string) {
    let lowerCase: string = "";
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

RemoveDuplicateCharUsingSet.main();


/* 
| Java                                     | TypeScript                                   |
| ---------------------------------------- | -------------------------------------------- |
| `String`                                 | `string`                                     |
| `Set<Character>`                         | `Set<string>`                                |
| `LinkedHashSet<Character>()`             | `Set<string>()`                              |
| `char[] arr = str.toCharArray()`         | `str.split("")`                              |
| `for (char ele : arr)`                   | `for (const ele of arr)`                     |
| `StringBuffer`                           | `string[]`                                   |
| `sb.append(ele)`                         | `result.push(ele)`                           |
| `sb.toString()`                          | `result.join("")`                            |
| `str.length()`                           | `str.length`                                 |
| `(char)(ch + 32)`                        | `String.fromCharCode(ch.charCodeAt(0) + 32)` |
| `System.out.println()`                   | `console.log()`                              |
| `public static void main(String[] args)` | `public static main(): void`                 |
 */