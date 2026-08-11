// Anonymous Function (Unnamed Function/Nameless Function)

/*
   An anonymous function is a function that does not have a name.
   Instead, it is assigned to a variable, which acts as its name.
   
   Syntax:

   let variable = function(parameters) 
   {
       // function body
   };

   variable(); // Calling the function
*/




//Example 1: Anonymous function
/* 
let msg = function (): string {
  return "Hello Typescript";
};
console.log(msg());
 */


//Example 2: Anonymous function with parameter
/* 
let addNum=function(a:number,b:number):number{
    return a+b;
}
console.log(addNum(2,4)) */


//Example 3: Anonymous function with parameter

let multiplyNum = function (a: number, b: number): number {
  return a * b;
};

console.log(multiplyNum(2, 4));
