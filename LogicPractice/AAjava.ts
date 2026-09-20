/* 
| Concept            | Java                                         | TypeScript                               |
| ------------------ | -------------------------------------------- | ---------------------------------------- |
| Print Output       | `System.out.println("Hello");`               | `console.log("Hello");`                  |
| Variable           | `int a = 10;`                                | `let a: number = 10;`                    |
| String             | `String name = "Alex";`                      | `let name: string = "Alex";`             |
| Boolean            | `boolean flag = true;`                       | `let flag: boolean = true;`              |
| Array              | `int[] arr = {1,2,3};`                       | `let arr: number[] = [1,2,3];`           |
| For Loop           | `for(int i=0;i<arr.length;i++)`              | `for(let i=0;i<arr.length;i++)`          |
| For Each           | `for(int n : arr)`                           | `for(const n of arr)`                    |
| Method             | `public static int add(int a,int b)`         | `function add(a:number,b:number):number` |
| Class              | `class Test {}`                              | `class Test {}`                          |
| Object Creation    | `Student s = new Student();`                 | `const s = new Student();`               |
| List/ArrayList     | `List<Integer> list = new ArrayList<>();`    | `let list: number[] = [];`               |
| Map                | `Map<String,Integer> map = new HashMap<>();` | `const map = new Map<string, number>();` |
| Set                | `Set<Integer> set = new HashSet<>();`        | `const set = new Set<number>();`         |
| Add to Set         | `set.add(10);`                               | `set.add(10);`                           |
| Check Exists       | `set.contains(10)`                           | `set.has(10)`                            |
| Map Put            | `map.put("A",1)`                             | `map.set("A",1)`                         |
| Map Get            | `map.get("A")`                               | `map.get("A")`                           |
| Exception Handling | `try{} catch(Exception e){}`                 | `try{} catch(error){}`                   |
| Null Check         | `if(obj != null)`                            | `if(obj !== null)`                       |
 */

/* 
| Program Concept   | Java                                       | TypeScript                               |
| ----------------- | ------------------------------------------ | ---------------------------------------- |
| Print Hello World | `System.out.println("Hello");`             | `console.log("Hello");`                  |
| Variable          | `int a = 10;`                              | `let a: number = 10;`                    |
| Array             | `int[] arr = {1,2,3};`                     | `const arr = [1,2,3];`                   |
| For Loop          | `for(int i=0;i<arr.length;i++)`            | `for(let i=0;i<arr.length;i++)`          |
| For Each Loop     | `for(int n : arr)`                         | `for(const n of arr)`                    |
| Function          | `public static int add(int a,int b)`       | `function add(a:number,b:number):number` |
| String Reverse    | `new StringBuilder(str).reverse()`         | `str.split('').reverse().join('')`       |
| ArrayList         | `List<Integer> list=new ArrayList<>();`    | `const list:number[]=[];`                |
| Add Element       | `list.add(10);`                            | `list.push(10);`                         |
| HashSet           | `Set<Integer> set=new HashSet<>();`        | `const set=new Set<number>();`           |
| Contains in Set   | `set.contains(10)`                         | `set.has(10)`                            |
| HashMap           | `Map<String,Integer> map=new HashMap<>();` | `const map=new Map<string,number>();`    |
| Put in Map        | `map.put("A",100)`                         | `map.set("A",100)`                       |
| Get from Map      | `map.get("A")`                             | `map.get("A")`                           |
| Check Key         | `map.containsKey("A")`                     | `map.has("A")`                           |
| Sort Array        | `Arrays.sort(arr);`                        | `arr.sort((a,b)=>a-b);`                  |
 */



/* | Java                                            | TypeScript                                   |
| ----------------------------------------------- | -------------------------------------------- |
| `HashMap<Character, Integer>`                   | `Map<string, number>`                        |
| `Map<Character, Integer> map = new HashMap<>()` | `const map: Map<string, number> = new Map()` |
| `char[] arr = str.toCharArray()`                | `const arr = str.split("")`                  |
| `map.containsKey(ch)`                           | `map.has(ch)`                                |
| `map.put(ch, 1)`                                | `map.set(ch, 1)`                             |
| `map.put(ch, map.get(ch) + 1)`                  | `map.set(ch, map.get(ch)! + 1)`              |
| `map.get(ch)`                                   | `map.get(ch)`                                |
| `for(Character key : map.keySet())`             | `for (const key of map.keys())`              |
| `String str = "automation"`                     | `let str: string = "automation"`             |
| `str.charAt(i)`                                 | `str.charAt(i)` or `str[i]`                  |
| `str.length()`                                  | `str.length`                                 |
| `StringBuffer`                                  | `string[] + join("")`                        |
| `System.out.println()`                          | `console.log()`                              |
| `if(ch != ' ')`                                 | `if(ch !== " ")`                             |
| `return;`                                       | `return;`                                    |
| `public static void main(String[] args)`        | `public static main(): void`                 |
 */

/* 
| Java                             | TypeScript                  |
| -------------------------------- | --------------------------- |
| `ArrayList<Character>`           | `string[]`                  |
| `ArrayList<Integer>`             | `number[]`                  |
| `HashSet<Character>`             | `Set<string>`               |
| `LinkedHashSet<Character>`       | `Set<string>`               |
| `HashMap<Character,Integer>`     | `Map<string, number>`       |
| `list.contains(ele)`             | `list.includes(ele)`        |
| `list.add(ele)`                  | `list.push(ele)`            |
| `set.add(ele)`                   | `set.add(ele)`              |
| `set.contains(ele)`              | `set.has(ele)`              |
| `map.containsKey(key)`           | `map.has(key)`              |
| `map.put(key,value)`             | `map.set(key,value)`        |
| `StringBuffer`                   | `string[] + join("")`       |
| `char[] arr = str.toCharArray()` | `const arr = str.split("")` |
| `String.valueOf(ch)`             | `String(ch)`                |
| `Character.isDigit(ch)`          | `/[0-9]/.test(ch)`          |
| `Character.isLetter(ch)`         | `/[a-zA-Z]/.test(ch)`       |
| `Character.toLowerCase(ch)`      | `ch.toLowerCase()`          |
| `Character.toUpperCase(ch)`      | `ch.toUpperCase()`          |
 */