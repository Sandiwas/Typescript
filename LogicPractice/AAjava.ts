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