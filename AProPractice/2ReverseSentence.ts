class ReverseSentence {
  public static reverseSentence(str: string): string {
    let reverse = "";
    const arr = str.split(" ");
    for (let i = arr.length - 1; i >= 0; i--) {
      reverse += arr[i] + " ";
    }
    return reverse;
  }
}

let str = "automation is fun";
console.log(ReverseSentence.reverseSentence(str));
