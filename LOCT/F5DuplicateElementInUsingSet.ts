class DuplicateElementUsingSet {
  public static main() {
    const arr: number[] = [1, 2, 3, 4, 5, 2, 6, 3, 1];
    this.findDuplicateNumberUsingSet(arr);
  }

  public static findDuplicateNumberUsingSet(arr: number[]) {
    const mySet: Set<number> = new Set<number>();
    const result: number[] = [];
    for (let ele of arr) {
      if (!mySet.has(ele)) {
        mySet.add(ele);
      } else {
        result.push(ele);
      }
    }
    console.log("Duplicate Element in Array : ", result.join(" "));
    console.log(mySet);
    console.log(Array.from(mySet));
  }
}

DuplicateElementUsingSet.main();
