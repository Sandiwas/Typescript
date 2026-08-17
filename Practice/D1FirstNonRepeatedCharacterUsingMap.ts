class FindNonRepetaedFirstChar {
  static findNonRepelatedFirstChar(str: string) {
    const arr: string[] = str.split("");
    let count: number = 1;

    let map = new Map<string, number>();
    for (let i = 0; i < arr.length; i++) {
      if (!map.has(arr[i])) {
        map.set(arr[i], count);
      } else {
        map.set(arr[i], map.get(arr[i])! + count);
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