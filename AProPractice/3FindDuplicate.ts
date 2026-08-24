class FindDuplicate {
  static findDuplicateChar(str: string) {
    let map = new Map<string, number>();
    let count = 1;
    for (let i = 0; i < str.length; i++) {
      let ch = str.charAt(i);
      if (!map.has(ch)) {
        map.set(ch, count);
      } else {
        map.set(ch, map.get(ch)! + count);
      }
 }
 for(let key of map.keys()){
  if(map.get(key)! >=1){
    console.log(key+" = "+map.get(key))
  }
  
 }
   
  }

  static removeSpaceMakeLowerCase(str: string): string {
    let lowerCase = "";
    for (let i = 0; i < str.length; i++) {
      let ch = str.charAt(i);
      if (ch !== " ") {
        if (ch >= "A" && ch <= "Z") {
          ch = String.fromCharCode(ch.charCodeAt(0) + 32);
        }
        lowerCase = lowerCase + ch;
      }
    }
    return lowerCase;
  }
}

let str = "Autom ation";
str = FindDuplicate.removeSpaceMakeLowerCase(str);

console.log(FindDuplicate.findDuplicateChar(str));
