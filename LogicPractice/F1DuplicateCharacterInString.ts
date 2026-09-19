class F1DuplicateCharacterInString {
  public static main(): void {
    let str: string = "Au tomation";
    str = this.removeSpaceMakeLowerCase(str);
    this.findDuplicateChar(str);
  }

  public static findDuplicateChar(str: string): void {
    const map: Map<string, number> = new Map<string, number>();
    let arr: string[] = str.split("");
    let count: number = 1;
    for (let i = 0; i < arr.length; i++) {
      if (!map.has(arr[i])) {
        map.set(arr[i], count);
      } else {
        map.set(arr[i], map.get(arr[i])! + count);
      }
    }
    for (let key of map.keys()) {
      if (map.get(key)! > 1) {
        console.log(key + " = " +map.get(key));
      }
    }
  }
  public static removeSpaceMakeLowerCase(str: string): string {
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

F1DuplicateCharacterInString.main();

/* 
Java                         TypeScript
------------------------------------------------
String                       string
char[]                       string[]
toCharArray()                split("")
Map<Character,Integer>       Map<string,number>
containsKey()                has()
put()                        set()
get()                        get()
keySet()                     keys()
System.out.println()         console.log() 
*/

/* The most important part
map.set(ch, map.get(ch)! + count);

Remember:
map.get(ch) → number | undefined

Because the else executes only when the key already exists, you know the value is there.
So:
map.get(ch)!
means:
"Treat the result as a number, not undefined."
 */
