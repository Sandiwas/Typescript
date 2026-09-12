class SwapStringUsingWithoutUsingThirdVarible {
  public static main(): void {
    let s1: string = "Hello";
    let s2: string = "World";
    this.swapString(s1, s2);
  }

  public static swapString(s1: string, s2: string) {
    s1 = s1 + s2;
    s2 = s1.substring(0, s1.length - s2.length);
    s1 = s1.substring(s2.length);

    console.log(`s1 : ${s1}`);
    console.log(`s2 : ${s2}`);
  }
}

SwapStringUsingWithoutUsingThirdVarible.main();

/* 
| Java                     | TypeScript                        |
| ------------------------ | --------------------------------- |
| `public class ClassName` | `class ClassName`                 |
| `public static void`     | `static` with return type `void`  |
| `String`                 | `string`                          |
| `System.out.println()`   | `console.log()`                   |
| `String s1 = "Hello"`    | `let s1: string = "Hello"`        |
| `main()` method          | Direct execution or function call |
 */