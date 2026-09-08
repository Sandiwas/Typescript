class ReverseSentenceAndEachString {
  public static main(): void {
    let str = "Automation Is Fun";
    str = ReverseSentenceAndEachString.makeLowerCase(str);
    console.log("Lower Case Sentence : ", str);
    str = ReverseSentenceAndEachString.reverseSentenceAndEachString(str);
    console.log("Reverse Sentence and Each String : ", str);
  }

  public static reverseSentenceAndEachString(str: string): string {
    let result: string = "";
    let arr: string[] = str.split(" ");
    for (let i = arr.length - 1; i >= 0; i--) {
      let word = arr[i];
      let reverseWord = "";
      for (let j = word.length - 1; j >= 0; j--) {
        reverseWord = reverseWord + word.charAt(j);
      }
      result = result + reverseWord + " ";
    }
    return result.trim();
  }

  public static makeLowerCase(str: string): string {
    let lowerCase = "";
    for (let i = 0; i < str.length; i++) {
      let ch = str.charAt(i);
      if (ch >= "A" && ch <= "Z") {
        ch = String.fromCharCode(ch.charCodeAt(0) + 32);
      }
      lowerCase += ch;
    }
    return lowerCase;
  }
}

ReverseSentenceAndEachString.main();


/* 
| Java                        | TypeScript                                   |
| --------------------------- | -------------------------------------------- |
| `String`                    | `string`                                     |
| `char`                      | `string`                                     |
| `String[]`                  | `string[]`                                   |
| `word.length()`             | `word.length`                                |
| `(char)(ch + 32)`           | `String.fromCharCode(ch.charCodeAt(0) + 32)` |
| `System.out.println()`      | `console.log()`                              |
| `public static void main()` | `public static main(): void`                 |
 */