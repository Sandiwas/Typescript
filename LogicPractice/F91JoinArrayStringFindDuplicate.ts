class JoinArrayStringFindDuplicate {
  public static main() {
    let arr1: string[] = ["a", "b", "c", "d"];
    let arr2: string[] = ["c", "q", "d", "f"];
    let merged: string[] = this.merge(arr1, arr2);
    console.log(merged.join(" "));
    this.findDuplicateCount(merged);
  }

  public static findDuplicateCount(arr: string[]) {
    let map: Map<string, number> = new Map<string, number>();
    let count = 1;
    for (let i = 0; i < arr.length; i++) {
      if (!map.has(arr[i])) {
        map.set(arr[i], count);
      } else {
        map.set(arr[i], map.get(arr[i])! + count);
      }
    }
    for (let key of map.keys()) {
      if (map.get(key)! > 1) {
        console.log(key + " = ", map.get(key));
      }
    }
  }

  public static merge(arr1: string[], arr2: string[]): string[] {
    let result: string[] = new Array(arr1.length + arr2.length);

    for (let i = 0; i < arr1.length; i++) {
      result[i] = arr1[i];
    }
    for (let j = 0; j < arr2.length; j++) {
      result[arr1.length + j] = arr2[j];
    }
    return result;
  }
}
JoinArrayStringFindDuplicate.main();
