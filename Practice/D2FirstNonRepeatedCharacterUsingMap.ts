class FindNonRepetaedFirstChar {
  static findNonRepelatedFirstChar(str: string) {

    let count: number = 1;

    let map = new Map<string, number>();
    for (let i = 0; i < str.length; i++) {
        let ch:string=str.charAt(i);
      if (!map.has(ch)){
        map.set(ch, count);
      } else {
        map.set(ch, map.get(ch)! + count);
      }
    }

    for (let key of map.keys()) {
      if (map.get(key) === 1) {
        console.log(key + " = " + map.get(key)!);
        return;
      }
    }
  }
}
let str: string = "automation";
FindNonRepetaedFirstChar.findNonRepelatedFirstChar(str);




/* | Java                      | TypeScript                       |
| ------------------------- | -------------------------------- |
| `String str`              | `str: string`                    |
| `char ch = str.charAt(i)` | `let ch: string = str.charAt(i)` |
| `Map<Character, Integer>` | `Map<string, number>`            |
| `map.containsKey(ch)`     | `map.has(ch)`                    |
| `map.put(ch, count)`      | `map.set(ch, count)`             |
| `map.get(ch)`             | `map.get(ch)`                    |
| `map.keySet()`            | `map.keys()`                     |
| `System.out.println()`    | `console.log()`                  |
 */


// 1. Create Map
// 2. Read each character
// 3. If character doesn't exist → put 1
// 4. If character exists → increase count
// 5. Loop through Map in insertion order
// 6. Find first character whose count is 1
// 7. Print it and return



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