//step1: write a signatures of functions
//step2: implement a function (one implimentation for all the signature)
//step3: calling function

//Example1: Different parameter Types(data types)

/* 
function getInfo(id: number): string;
function getInfo(name: string): string;

function getInfo(param: number | string): string {
  if (typeof param === "number") {
    return `user ID is ${param}`;
  } else {
    return `user name is ${param}`;
  }
}

console.log(getInfo(101)); //User ID is 101
console.log(getInfo("John")); //User Name is John */

//Example 2:  Different Number of Parameters
/* 
function add(a: number, b: number, c: number): number;
function add(a: number, b: number): number;

function add(a: number, b: number, c?: number): number {
  if (c !== undefined) {
    return a + b + c;
  }
  return a + b;
}

console.log(add(1, 1, 1));
console.log(add(1, 1));
 */
//Example 3: different return types

/* function processInput(input: number): number;
function processInput(input: string): string;

function processInput(input: number | string): number | string {
  if (typeof input === "string") {
    return input.toUpperCase();
  } else {
    return input * 2;
  }
}


console.log(processInput(2))
console.log(processInput("welcome")) */

//Example 4:

function greet(name: string): string;
function greet(age: number): string;
function greet(isMarried: boolean): string;

function greet(value: string | number | boolean): string {
  if (typeof value === "string") {
    return `Hello ${value}`;
  } else if (typeof value === "number") {
    return `you are ${value} old`;
  } else {
    let res: string = value ? "married" : "single";
    return `you are ${res}`;
  }
}

console.log(greet("SAM"));
console.log(greet(25));
console.log(greet(false));
