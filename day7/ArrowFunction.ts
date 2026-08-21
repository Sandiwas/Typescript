// Arrow Functions/Lamda Function

/* Lambda refers to anonymous functions in programming. 
   Lambda functions are a concise mechanism to represent anonymous functions. 
   These functions are also called as Arrow functions.


  There are 3 parts to a Lambda function.

  1.Parameters − A function may optionally have parameters
  2.The fat arrow notation/lambda notation (=>) − It is also called as the "goes to operator"
  3.Statements − represent the functions instruction set

  Syntax:

    let variable = (parameters) => 
    {
        // block of code
    }

    variable();

*/

/* 
// Example 1: Arrow Function with No Parameters and No Return Type
let greet=():void =>{
    console.log("Hello typescript");
}
greet();

 */

/* 

// Example 2: Arrow Function with Parameters and a Return Type

let addNum=(a:number,b:number):number =>{
    return a+b;
}
console.log(addNum(5,2)) */

/* 

// Example 3: Arrow Function with Implicit Return

let add=(a:number,b:number):number => a+b;
let multiply=(a:number,b:number):number => a*b;
console.log(add(20,3))
console.log(multiply(20,3))

*/

/* 
//Example 4 : Named function with optional paramater

 let displayDetails=(id: number, name: string, email?:  string): void =>{
  console.log("Id :", id);
  console.log("Name :", name);
  if (email != undefined) {
    console.log("Email: ", email);
  }
}
  
displayDetails(10,"sandip","wasekarsandip@gmail.com")
console.log("-------------------------------")
displayDetails(10,"sandip")
 */

//Example 5 : Named function with default  paramater
/* 
let calculateDiscount=(price:number,rate:number=0.50) =>{
  let discount:number=price*rate;
  console.log("Discount amount : ",discount);
}

calculateDiscount(1000,0.30)
calculateDiscount(1000)

 */

//Example 6 :Named function with  Rest parameters  - multiple types

let findElements = (...elements: (string | number)[]): number => {
  return elements.length;
};
console.log(findElements(2, 3, 4, "xyz", "abc")); //5
console.log(findElements(2, 3, 4, 5, 8, 9)); //6
console.log(findElements("xyz", "abc", "sandip")); //3
