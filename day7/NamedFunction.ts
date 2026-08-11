//Example 1 :  Named function with no parameter and no return type
/* 
function display():void{
  console.log('Welcome to Typescript')
}
display()
 */

/* 

//Example 2 :Named function with  parameter and  return type 

function addNum(a:number,b:number):number{
  return a+b;
}

const result:number =addNum(5,5);
console.log(result) 

console.log(addNum(5,5));

 */
/* 
Example 3 :Named function with  Rest parameters 
 Rest parameter don't restrict the number of values that you can pass to a function

function addNum(...nums:number[]){
  let sum:number=0;
  for(let i=0;i<nums.length;i++){
  sum+=nums[i];
  }
  console.log(sum);
}

addNum(1,2)
addNum(1,2,3,4)
addNum(1,2,3,4,5,6,7)

 */

/* 
//Example 4 :Named function with  Rest parameters  - multiple types 

function findElements(...elements:(string|number)[]):number{
return elements.length;
}
console.log(findElements(2,3,4,"xyz","abc")); //5
console.log(findElements(2,3,4,5,8,9)); //6
console.log(findElements("xyz","abc","sandip")); //3
 */

/* 
//Example 5 : Named function with optional paramater

 function getDetails(id: number, name: string, email?: string): void {
  console.log("Id :", id);
  console.log("Name :", name);
  if (email != undefined) {
    console.log("Email: ", email);
  }
}
  
getDetails(10,"sandip","wasekarsandip@gmail.com")
console.log("-------------------------------")
getDetails(10,"sandip")

 */

//Example 6 : Named function with default  paramater
/* 
function calculateDiscount(price:number,rate:number=0.50){
  let discount:number=price*rate;
  console.log("Discount amount : ",discount);
}

calculateDiscount(1000,0.30)
calculateDiscount(1000)
 */

/* 
function getDetails(id: number, name: string, email?: string): void {
  console.log("Id : ", id);
  console.log("Name : ", name);
  console.log("Email : ", email);
  if (email != undefined) {
    console.log("Email : ", email);
  }
}

getDetails(10, "sandip", "sbc@gmail.com");
getDetails(10, "suraj");


let names:string[]=[];
let details:string[]=["sandip","gahudas","wasekar"];
 */
/* 
let sum = (a: number, b: number): number => {
  return a + b;
};

console.log(`sum is ${sum(5, 10)}`);
 */
