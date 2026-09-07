class ReverseSentence {
  public static main(): void {
    let str: string = "Automation Is Fun";
    str = ReverseSentence.makeLowerCase(str);
    console.log("Lower Case sentnece is : ", str);
    str = ReverseSentence.reverseSentence(str);
    console.log("Reverse Sentence is : ", str);
  }

  public static reverseSentence(str: string): string {
    let result:string ="";
    let arr: string[] = str.split(" ");
    for (let i = arr.length - 1; i >= 0; i--) {
      result = result + arr[i] + " ";
    }
    return result.trim();
  }

  public static makeLowerCase(str: string): string {
    let lowerCase = "";
    for (let i = 0; i < str.length; i++) {
      let ch: string = str.charAt(i);
      if (ch >= "A" && ch <= "Z") {
        ch = String.fromCharCode(ch.charCodeAt(0) + 32);
      }
      lowerCase = lowerCase + ch;
    }
    return lowerCase;
  }
}

ReverseSentence.main();

/* 
| Java                            | TypeScript                                   |
| ------------------------------- | -------------------------------------------- |
| `String`                        | `string`                                     |
| `char`                          | `string`                                     |
| `String[]`                      | `string[]`                                   |
| `int`                           | `number`                                     |
| `(char)(ch + 32)`               | `String.fromCharCode(ch.charCodeAt(0) + 32)` |
| `System.out.println()`          | `console.log()`                              |
| `public static void main()`     | `public static main(): void`                 |
| `public static String method()` | `public static method(): string`             |
| `for (int i = 0; ...)`          | `for (let i: number = 0; ...)`               |
| `String result = ""`            | `let result: string = ""`                    |
 */