class FindDuplicateChar {
   static findDuplicateCharCount(str) {
    const arr = str.split("");
    let map = new Map();

    let count = 1;
    for (let i = 0; i < arr.length; i++) {
      if (!map.has(arr[i])) {
        map.set(arr[i], count);
      } else {
        map.set(arr[i], map.get(arr[i]) + count);
      }
    }

    for (let key of map.keys()) {
      if (map.get(key) > 1) {
        console.log(key+" = "+map.get(key))
      }
    }
  }
}


let str="automation";
FindDuplicateChar.findDuplicateCharCount(str)
