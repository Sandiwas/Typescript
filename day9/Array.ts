/*
  Arrays in TypeScript
  --------------------
  - An array is a special type of variable that stores multiple values.
  - The values can be of the same data type or different data types.
  - Arrays are declared using `[]` or the generic `Array<T>` type.
  - Indexing starts from 0.
  - Arrays are an ordered collection of elements.
*/

// Approach 1: Using array literal

/* let names:string[]=[];  // Declaration

// Initializing values into the array
names[0]="sham"  // or names.push("John");
names[1]="Ram";
names[2]="Vishal"
names[3]="kamal";

console.log(names) */

// Alternative way to declare and initialize an array
/* 
let names:string[]=[ 'sham', 'Ram', 'Vishal', 'kamal' ]
console.log(names) // Output:  [ 'sham', 'Ram', 'Vishal', 'kamal' ]
console.log(names[0]) //sham
console.log(names[1]) //Ram
console.log(names[4]) //Output: undefined (index out of range)
 */
// Approach 2: Using the generic Array<T> type
/*
let empNames:Array<string>=["sham",'Ram',"kamal","vimal"]; // Only strings allowed
let empId:Array<number>=[101,102,103,104]; // Only numbers allowed
let data:Array<string|number>=[1,"john",'smith',102] // Union type (strings and numbers)
let mixedData:Array<any>=[101,"smith",null,true];   // Any type allowed (multi-type array)
*/
/* 
let empNames: string[] = ["sham", "Ram", "kamal", "vimal"]; // Only strings allowed
let empId: number[] = [101, 102, 103, 104]; // Only numbers allowed
let data: (string | number)[] = [1, "john", "smith", 102]; // Union type (strings and numbers)
let mixedData: any[] = [101, "smith", null, true]; // Any type allowed (multi-type array)

// Example 1: Iterating over an array using a traditional for loop
console.log("Employee name : ");
for (let i = 0; i < empNames.length; i++) {
  console.log(empNames[i]);
}

// Example 2: Iterating using the 'for...in' loop (indexes)
console.log("Employee name : ");
for (let index in empNames) {
  console.log(empNames[index]); // `index` represents array indices
}

// Example 3: Iterating using the 'for...of' loop (values)
console.log("Mixed Data:");
for (let value of mixedData) {
  console.log(value); // `value` represents actual array elements
} */

//Example 4: Passing an Array to the function
//Search an element in a n array using function

/* function search(ele: number, arr: number[]): boolean {
  for (let i = 0; i < arr.length; i++) {
    if (ele === arr[i]) {
      return true; // Element found
    }
  }
  return false; // Element not found
}

let arr: number[] = [10, 20, 30.4, 50];
console.log("output value is : ", search(10, arr));
console.log("output value is : ", search(100, arr));
 */
//Example 5 : A functions takes an Array and returns an array

function capitalizeWords(arr: string[]): string[] {
  let result: string[] = [];
  for (let i = 0; i < arr.length; i++) {
    result[i] = arr[i].toUpperCase();
  }
  return result;
}

// Example usage
let word: string[] = ["hello", "world", "typescript"];
console.log(capitalizeWords(word));
