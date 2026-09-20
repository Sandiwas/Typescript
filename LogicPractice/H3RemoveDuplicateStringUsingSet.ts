class RemoveDuplicateStringUsingSet {
  public static main(): void {
    let str: string = "Progra mming";
    str = this.removeSpaceMakeLowerCase(str);
    console.log("After remoeving Space lowre Case String : ", str);
    this.removeDuplicateChar(str);
  }
  public static removeDuplicateChar(str: string): void {
    const arr: string[] = str.split("");
    let mySet: Set<string> = new Set<string>();
    let result: string = "";
    for (let ele of arr) {
      if (mySet.has(ele)) {
        result += ele;
      } else {
        mySet.add(ele);
      }
    }

    console.log(
      "After removing duplicate char in string : ",
      Array.from(mySet).join(""),
    );
    console.log("Deplicate char in string : ", result);
  }

  public static removeSpaceMakeLowerCase(str: string): string {
    let lowerCase = "";
    for (let i = 0; i < str.length; i++) {
      let ch: string = str.charAt(i);
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

RemoveDuplicateStringUsingSet.main();

/* | Java                                         | TypeScript                                   |
| -------------------------------------------- | -------------------------------------------- |
| `String`                                     | `string`                                     |
| `Set<Character>`                             | `Set<string>`                                |
| `LinkedHashSet<Character>()`                 | `Set<string>()`                              |
| `char[] arr = str.toCharArray()`             | `str.split("")`                              |
| `for (char ele : arr)`                       | `for (const ele of arr)`                     |
| `Iterator<Character> itr = mySet.iterator()` | `for (const ele of mySet)`                   |
| `while (itr.hasNext())`                      | `for (const ele of mySet)`                   |
| `char ele = itr.next()`                      | `const ele of mySet`                         |
| `str.length()`                               | `str.length`                                 |
| `(char)(ch + 32)`                            | `String.fromCharCode(ch.charCodeAt(0) + 32)` |
| `System.out.println()`                       | `console.log()`                              |
| `public static void main(String[] args)`     | `public static main(): void`                 |
 */
