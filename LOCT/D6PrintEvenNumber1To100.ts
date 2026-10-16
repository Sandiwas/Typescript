class D6PrintEvenNumber1To100 {
  public static main() {
    let n: number = 100;
    let result=this.printEvenNumber(n);
    console.log(result);
    
  }

  public static printEvenNumber(n: number):String {
    let result:number[]=[];
    for (let i = 1; i <= n; i++) {
      if (i % 2 == 0) {
      result.push(i)
      }
    }
    return result.join(" ");
  }
}


D6PrintEvenNumber1To100.main();