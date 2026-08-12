//callback function :  A function passed as an argument to another function and excuted later
/* 
function xyz(id:number):void{
    console.log(id)
}

function abc(name:string,xyz:(id:number)=>void){
    console.log(name)
    xyz(1);
}



abc("sandip",xyz)
 */

//Example : 2

/* 
//function that takes callback function as an parameter
function greet(name: string, callback: (msg: string) => void) {
  console.log(name);
  callback("hello");
}


//callback function
function showMessage(message: string): void {
  console.log(message);
}


//calling funvtion 
greet("kamal", showMessage);


 */
//Example 3 :

function displayResult(result: number): void {
  console.log(result);
}

function sum(a: number, b: number, callback: (result: number) => void) {
  let result = a + b;
  callback(result);
}

sum(5, 5, displayResult);
