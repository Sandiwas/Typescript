//console.log("***************************if Statement **********************************************")
//syntax

/* if(condition)
{ 
   //statament 
} * /
 
// Example1 : If age is greater than or equal to 18, the message "You are eligible to vote." will be printed.

/* let age:number=20;
if(age>18){
    console.log("You are eligible for Vote")
} */

// console.log(
//   "***************************if else Statement *******************************************",
// );

//syntax:
/*     if (condition)
         {
            statements
        } 
     else 
        {
            statements
        }
 */

//Example 2:  Print number is even is odd

/* let num: number = 10;

if (num % 2 == 0) {
  console.log(`${num} even number`);
} else {
  console.log(`${num} Odd number`);
}
 */

// console.log("***************************Nested if-else Statement *****************************");

let mark: number = 50;

/* 
mark >=90  Gread A
mark >=75 Gread B
mark >=60 Gread C
    Gread D 
*/


if (mark >= 90 && mark <= 100) //Condition 1
{
  console.log("Gread A");
} else if (mark >= 75 && mark <= 90) //Condition 1
{
  console.log("Gread B");
} else if (mark >= 60 && mark <= 75) //Condition 1
{
  console.log("Gread C"); //Condition 1
} else {
  console.log("Gread D");
}

//O/P : Gread D

//Example 4: Browser selection
let browser: string = "chrome";

/* if(browser==="chrome"){
console.log("Browser is chrome")
}else if(browser==="firefox"){
console.log("browser is firefox")
}else if(browser=='safari'){
    console.log("browser is safari")
} */

//console.log(********* switch-case Statement ****************");
//syntax
/* 
switch (expression) {
  case 1: //statement; break;
  case 2: //statement; break;
  case 3: //statement; break;
  default: //statement;
}
 */

let day: number = 3;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thrusday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("sunday");
  default:
    console.log("Invalid day");
}

// 	Example 6: The switch statement can also include an expression
let x: number = 20, y: number = 5;

switch (x - y) {
  case 0:
    console.log("Result Zero");
    break;
  case 5:
    console.log("Result Five");
    break;
  case 10:
    console.log("Result Ten");
    break;
  default:
    console.log("Result is something else");
}
