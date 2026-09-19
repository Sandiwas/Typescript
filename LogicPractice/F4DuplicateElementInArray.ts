class DuplicateElementInArray {
  public static main(): void {
    const arr: number[] = [5, 1, 2, 3, 4, 1, 5, 2, 6, 3, 1, 5];
    this.findDuplicteElement(arr);
  }
  public static findDuplicteElement(arr: number[]) {
    const map: Map<number, number> = new Map<number, number>();
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
        console.log(key + " = " + map.get(key));
      }
    }
  }
}

DuplicateElementInArray.main();
