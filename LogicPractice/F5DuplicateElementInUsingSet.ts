class DuplicateElementUsingSet {
  public static main(): void {
    const arr: number[] = [1, 2, 3, 4, 5, 2, 6, 3, 1];
    this.findDuplicareEle(arr);
  }
  public static findDuplicareEle(arr: number[]) {
    const mySet: Set<number> = new Set<number>();
    const duplicate: number[] = [];

    for (let ele of arr) {
      if (mySet.has(ele)) {
        duplicate.push(ele);
      } else {
        mySet.add(ele);
      }
    }
    console.log(duplicate.join(" "));
    console.log(mySet);
    console.log(Array.from(mySet));
  }
}

DuplicateElementUsingSet.main();

// Java: set.add(ele) returns true if the element is added, false if it's already present.
// TypeScript: set.add(ele) returns the Set object, not true/false. Use set.has(ele) to check for duplicates. ✅

/* | Java                                          | TypeScript                         |
| --------------------------------------------- | ---------------------------------- |
| `Set<Integer> mySet = new LinkedHashSet<>();` | `const mySet = new Set<number>();` |
| `for (int ele : arr)`                         | `for (const ele of arr)`           |
| `mySet.add(ele)` returns `true/false`         | `Set.add()` returns the Set itself |
| `if (!mySet.add(ele))`                        | `if (mySet.has(ele))`              |
| `System.out.print(ele + " ");`                | `process.stdout.write(ele + " ");` |
| `System.out.println();`                       | `console.log();`                   |
| `System.out.println(mySet);`                  | `console.log([...mySet]);`         |
| `LinkedHashSet` preserves insertion order     | `Set` preserves insertion order    |
 */

// LinkedHashSet<Integer> → Set<number>
// for(int n : arr) → for(const n of arr)
// System.out.println() → console.log()
// !set.add(x) → set.has(x) then set.add(x)

//const demo:Array<number>=new Array<number>(5)
