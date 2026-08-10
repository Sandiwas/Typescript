const str: string = "Automation is fun";

function reverseSentence(input: string): string {
  const words = input.split(" ");
  let reverse = "";
  for (let i = words.length - 1; i >= 0; i--) {
    reverse = reverse + words[i] + " ";
  }
  return reverse.trim();
}

console.log(reverseSentence(str));
