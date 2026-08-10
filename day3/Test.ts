// let age:number=30;
// age="Thirty";
// console.log(age)  // Type 'string' is not assignable to type 'number'.

// let num1: string = "5";
// let num2: number = 3;
// let result = num1 + num2;
// console.log(result);

/* 
const result: number = "5" + 3;
console.log(result);

function square(num: number): number {
  return num * num;
}

console.log(square(5)); // 25
console.log(square("5")); // 25 (JavaScript con
// verts string to number)
console.log(square("abc")); // NaN (Not a Number) */
//---------------------------------------------------------------------------------------------------

//DataType

// 1. String
/* let firstName: string = "sandip";
let lastName: string = "wasekar";

console.log("firstName: ", firstName);
console.log("lastName : ", lastName);

let shortName: string = `Hello ${firstName} ${lastName}`;

console.log("ShortName : ", shortName);
console.log(typeof firstName); 
console.log(typeof shortName);
 */

// --------------------------------------------------------------------------------
//2. number
/* 
let score:number=100;
let price:number=21.90
let pak:number=2344355

console.log(typeof(score));
console.log(typeof price)
console.log(typeof(pak))

console.log("score : ",score)
console.log("price : ",price)
console.log("pak : ",pak) */

// ------------------------------------------------------------------------------------------

//3. boolean
/* 
let isStudent:boolean=true
let isJob:boolean=false

console.log("is Student ? ",isStudent)
console.log("is Job? ",isJob)
console.log(typeof isStudent)
console.log(typeof(isJob)
 */
// ---------------------------------------------------------------------------------------------------
//4. null
//5. undefined
/* 
let isEmpty:null=null;
console.log(typeof(isEmpty))  //object
console.log("value of isEmpty : "+isEmpty) //value of isEmpty : null

let isDefine:undefined=undefined;
console.log(typeof(isDefine))  //undefined
console.log("value of isDefine : "+isDefine) //value of isDefine : undefined


 */

//--------------------------------------------------------------------------------------------------
//6. any
/* 
let price: any = 10.2;
let lastname: any = "sandip";
let isPresent: any = true;

console.log(typeof price);
console.log(typeof lastname);
console.log(typeof isPresent);

console.log("price : ", price);
console.log("lastname : ", lastname);
console.log("isPresent : ", isPresent); */
//=========================================================================================================
//7. union type
/* 
let id: string | number | boolean = 10;
console.log(typeof id);
console.log(id);

id = "ten";
console.log(typeof id);
console.log(id);

id = true;
console.log(typeof id);
console.log(id); */
//===========================================================================================================
//8 . void

// function sum():number{
//     return (5+10);
// }
// sum()
// console.log("sum :",sum())

/* 
function sum():void{
console.log("5"+10);
}
sum() */

function sum(x: number, y: number): number {
  return x + y;
}
let total: number = sum(10, 10);
console.log("Total is ", total);
//=========================================================================
