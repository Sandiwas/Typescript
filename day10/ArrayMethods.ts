let numbers:number[]=[1,2,3,4,5]
let fruits:string[]=["apple","banana","orange","mango"];

console.log("Numbers array",numbers)
console.log("fruits array",fruits)


//length - attribute (Not a method)
console.log("Size of number array ", numbers.length)
console.log("Size of fruits array ", fruits.length)

// 1. push() - Adds single/multiple elements to the end of an array
// Syntax: array.push(element1, ..., elementN)


numbers.push(6);
numbers.push(7,8);
console.log("After push() : ", numbers) //[1, 2, 3, 4,5, 6, 7, 8]

// 2. pop() - Removes the last element from an array
// Syntax: array.pop()

let lastFruite=fruits.pop()
console.log("After pop(): ",fruits) //[ 'apple', 'banana', 'orange' ]
console.log("Remove Fruite is : ",lastFruite ) //mango


// 3. shift() - Removes the first element from an array
// Syntax: array.shift()

let firstNumber=numbers.shift();
console.log("After shift(): ",numbers)
console.log("Removed number : ",firstNumber) //  1


// 4. unshift() - Adds single/multiple elements to the beginning of an array
// Syntax: array.unshift(element1, ..., elementN)

fruits.unshift("kiwi","pears");
console.log("After unshift():", fruits); //[ 'kiwi', 'pears', 'apple', 'banana', 'orange' ]


// 5. concat() - Combines two or more arrays of same type
// Syntax: array.concat(array1, ..., varrayN)

let concatenatedArray=numbers.concat([9,10],[11,12]);
console.log("concatenated array : ",concatenatedArray) // [2, 3, 4,  5,  6,7, 8, 9, 10, 11,12]

// 6. slice() - Extracts a section of an array
// Sarting Index starts from Zero
// Ending Index will be exclussive. Ex: If 3 is Ending Index It will consider 2   (3-1=2)
// Syntax: array.slice(start, end)

let extcatedArray=fruits.slice(1,2);
console.log("After sllice(): ", fruits); //[ 'kiwi', 'pears', 'apple', 'banana', 'orange' ]
console.log("After slice() : ",extcatedArray) //[ 'pears' ]

let extcatedArray1=fruits.slice(2,5);
console.log("After sllice(): ", fruits); //[ 'kiwi', 'pears', 'apple', 'banana', 'orange' ]
console.log("After slice() : ",extcatedArray1) //[ 'apple', 'banana', 'orange' ]


// 7. splice() - Adds/removes elements from an array(From everywhere)
// Syntax: array.splice(start, deleteCount, item1, ..., itemN)

//Ex1: only removing
let removedElement =fruits.splice(1,2) // here 1 is startign index, 2 is represent how many elements to be removed
console.log("After splice() : ",fruits);
console.log("removed Element : ",removedElement);

//Ex2: not removed but added
fruits.splice(1,0,"pineapple","grape");
console.log("After splice(1,0,'pineapple','grape'): ",fruits ) // [ 'kiwi', 'pineapple', 'grape', 'banana', 'orange' ]

//Ex3:  both remove and add
fruits.splice(1,2,"mango","cherry");
console.log("After splice(1,2,'mango','cherry'): ",fruits )  // [ 'kiwi', 'mango', 'cherry', 'banana', 'orange' ]


// Reset fruits — earlier splice() removed 'apple' and left 'kiwi'
fruits = ["apple", "banana", "orange", "mango"];

// 8. indexOf() - Finds the index of an element, If element not found then return -1
// Syntax: array.indexOf(searchElement)   (or)  array.indexOf(searchElement,Starting Index)


let bananaIndex=fruits.indexOf("banana")
console.log("Index of banana : ",bananaIndex) //1

let appleIndex=fruits.indexOf("apple")
console.log("Index of apple : ",appleIndex) //0

let bananaIndex1:number=fruits.indexOf("banana",2)
console.log("Index of banana : ",bananaIndex1) //-1


// 9. includes() - Checks if an element exists
//Returns True or false
// Syntax: array.includes(searchElement, fromIndex)

//[ 'apple', 'banana', 'orange', 'mango' ]
let isAppleExist:boolean=fruits.includes('apple');
console.log("Is apple exist : ",isAppleExist) //true

let isKiwiExist:boolean=fruits.includes('kiwi');
console.log("Is kiwi exist : ",isKiwiExist) //false

// 10. toString() - Converts array to string
// Syntax: array.toString()


console.log(numbers);  //[ 2, 3, 4, 5, 6, 7 ]

let numberString=numbers.toString();
console.log("convert array ti string : ", numberString)

let myarray:string []=['w','e','l','c','o','m','e']
console.log("Original myarray: ", myarray);

let str:string=myarray.toString();
console.log("converted string: ", str); //w,e,l,c,o,m,e



// =========  forEach(), map(), filter(), reduce(), some(), every() ==============
