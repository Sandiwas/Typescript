// =========  forEach(), map(), filter(), reduce(), some(), every() ==============

// 1. forEach() - Executes a function once for each array element
// It Takes function as a parameter

// Syntax: array.forEach(function(currentValue, index, array){})

// currentValue - The current element being processed in the array
// index (optional) - The index of the current element being processed in the array
// array(optional) - The array the current element belongs to.

// Syntax: array.forEach(function(currentValue, index, array){})

// Ex 1: Get index of all the fruites along with value.

let fruites: string[] = ["apple", "banana", "orange", "mango", "kiwi"];

console.log("Printiing fruites along with index by using for-in loop");
for (let i in fruites) {
  console.log(i + ". " + fruites[i]);
}

/*
Output:
0. apple
1. banana
2. orange
3. mango
4. kiwi
*/

console.log("Printing fruits along with Index using forEach():");
fruites.forEach(function (element, index) {
  // console.log(`${index}. ${element}`) //Print the values as string
  console.log(index + ".  " + element); //Printing values directly
});

/*
Output:
0. apple
1. banana
2. orange
3. mango
4. kiwi
*/

console.log("Using arrow function forEachLoop Array method");

fruites.forEach((element, index) => {
  console.log(index + ". " + element);
});

/* Using arrow function forEachLoop Array method
0. apple
1. banana
2. orange
3. mango
4. kiwi
 */

console.log(
  "Print each value in array using forEach loop parameter as arrow function",
);

//fruites.forEach((element)=> console.log(element));
//Or
fruites.forEach((element) => {
  console.log(element);
});

// Ex 2: Print all fruite names in uppercase:
console.log("Print all fruites names in upperCase");
fruites.forEach((element) => {
  console.log(element.toUpperCase());
});

//=============================================================================

// 2. map() - Creates a new array with the result of calling the function on every element of an array
// It Takes function as a parameter.
// Returns the same number of elements that we have in original array.
//Or
//Form ChatGPT map() goes throught eavery an ealemnt perform some operation and return new array

// Syntax: array.map(function(currentValue, index, array){})

// Ex1: Req: Get square of all the numbers in an array. Ex: [1,2,3] then result should be [1,4,9]

let numbers: number[] = [1, 2, 3, 4, 5];

let squaredNumbers = numbers.map((element) => {
  return element * element;
});
console.log(
  "square number of all element if numbers array is : ",
  squaredNumbers,
); //Output: [1, 4, 9, 16, 25]

//Ex2: Double each number  [1,2,3,4,5] --->  [2,4,6,8,10]

let doubleNumbers = numbers.map((num) => num * 2);
console.log("double each number is :", doubleNumbers); //[2, 4, 6, 8, 10]

//=============================================================================

// 3. filter() - Creates a new array with all the elements that pass/satisfy the function
// It Takes function as a parameter.
// Returns either same or fewer number of elements compared to original array.

// Syntax: array.filter(function(currentValue, index, array){})

// Ex1: Get the only even numbers from an array

// let evenNumber=numbers.filter((num)=> {
//     return num%2==0;
// })
// console.log("Even number in array : ",evenNumber)

let evenNumber = numbers.filter((num) => num % 2 == 0);
console.log("Even number in array : ", evenNumber); // Output: [2, 4]

// Ex2: Get the only numbers greater than 3 from an array

let filterNumber = numbers.filter((num) => num > 3);
console.log("Element greater than 3  in array : ", filterNumber); // Output: [4, 5]

//=============================================================================

// 4. reduce() - Applies a function on every element of an array and returns a single value.

// Syntax: array.reduce(function(accumulator, currentValue, index, array){})

// accumulator - The accumulated value from previous iteration
// currentValue - The current element being processed

//Ex1: Get the total (sum) of all the elements in an array
// let total = 0;
// for (let i = 0; i < numbers.length; i++) {
//   total = total + numbers[i];
// }

// console.log("total sum of elements in numbers array : ", total);
/* 
let reduceResult=numbers.reduce((total,ele)=>{
    return total+ele;
},0)  // Initial value of accumulator is 0

console.log("Reduced Result (Total of an Array): ", reduceResult);
 */
//or

// let reduceResult=numbers.reduce((total,ele)=>total+ele,0)

// console.log("Reduced Result (Total of an Array): ", reduceResult);

//=============================================================================

// 5. some() - Checks if any element satisfies a condition
// Returns true if at least one element passes the condition, else false

// Syntax: array.some(function(currentValue, index, array){})

let hasNegative = numbers.some((element) => element < 0);
console.log("Does numbers have any negative numbers?", hasNegative); // Output: false

let hasPositve = numbers.some((element) => element > 0);
console.log("Does numbers have any positive numbers?", hasPositve); // Output: false
//=============================================================================

// 6. every() - Checks if all elements satisfy a condition
// Returns true if all elements pass the condition, else false

// Syntax: array.every(function(currentValue, index, array){})

//Ex1:

let allEven = numbers.every((ele) => ele % 2 === 0);
console.log("Are all numbers even?", allEven); // Output: false

let allGreathanOne = numbers.every((ele) => ele > 1);
console.log("Are all Greater Than One?", allGreathanOne); // Output: false

let allPositive = numbers.every((ele) => ele > 0);
console.log("Are all numbers positive?", allPositive); // Output: true

//=============================================================================
