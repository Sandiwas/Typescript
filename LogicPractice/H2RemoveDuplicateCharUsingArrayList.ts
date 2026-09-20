class RemoveDuplicateCharUsingArrayList {
  public static main(): void {
    let str: string = "Program ming";
    str = this.removeSpaceMakeLowerCase(str);
    console.log("remove space make lowerCase : " + str);
    str = this.removDuplicateChar(str);
    console.log("After removing duplicate char : ", str);
  }

  public static removDuplicateChar(str: string) {
    let list: string[] = new Array<string>();
    let arr: string[] = str.split("");

    for (let ele of arr) {
      if (!list.includes(ele)) {
        list.push(ele);
      }
    }
    return list.join("");
  }

  public static removeSpaceMakeLowerCase(str: string) {
    let lowerCase = "";
    for (let i = 0; i < str.length; i++) {
      let ch: string = str.charAt(i);
      if (ch !== " ") {
        if (ch >= "A" && ch <= "Z") {
          ch = String.fromCharCode(ch.charCodeAt(0) + 32);
        }
        lowerCase = lowerCase + ch;
      }
    }
    return lowerCase;
  }
}

RemoveDuplicateCharUsingArrayList.main();

/* 
| Java                             | TypeScript                  |
| -------------------------------- | --------------------------- |
| `ArrayList<Character>`           | `string[]`                  |
| `list.contains(ele)`             | `list.includes(ele)`        |
| `list.add(ele)`                  | `list.push(ele)`            |
| `StringBuffer`                   | `string[] + join("")`       |
| `char[] arr = str.toCharArray()` | `const arr = str.split("")` |
 */
