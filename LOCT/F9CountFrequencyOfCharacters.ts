class CountFrequencyOfEachChar {
  public static main(): void {
    let str: string = "Automa tion";
    str=this.removeSpaceMakeLowerCase(str);
    console.log(str);
    this.findFrequencyOfEachChar(str);
    
  }

  public static findFrequencyOfEachChar(str:string){
 
    let map:Map<string,number>=new Map<string,number>();
    let arr:string[]=str.split("");
    let count:number=1;
    for(let i=0;i<arr.length;i++){
        if(!map.has(arr[i])){
            map.set(arr[i],count);
        }else{
            map.set(arr[i],map.get(arr[i])!+count);
        }
    }
    for(let key of map.keys()){
          console.log(key," = ",map.get(key));
    }
  }

  public static removeSpaceMakeLowerCase(str: string):string {
    let lowerCase = "";
    for (let i = 0; i < str.length; i++) {
      let ch: string = str.charAt(i);
      if (ch != " ") {
        if (ch >= "A" && ch <= "Z") {
          ch = String.fromCharCode(ch.charCodeAt(0) + 32);
        }
        lowerCase += ch;
      }
    }
    return lowerCase;
  }
}


CountFrequencyOfEachChar.main();

/* 

/* The most important part
map.set(ch, map.get(ch)! + count);

Remember:
map.get(ch) → number | undefined

Because the else executes only when the key already exists, you know the value is there.
So:
map.get(ch)!
means:
"Treat the result as a number, not undefined." 
It will tell typescript that is number what we are getting from map not undifted 
*/




