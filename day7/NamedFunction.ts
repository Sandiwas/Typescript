// function getDetails(id: number, name: string, email?: string): void {
//   console.log("Id :", id);
//   console.log("Name :", name);
//   if (email != undefined) {
//     console.log("Email: ", email);
//   }
// }

// getDetails(10,"sandip","wasekarsandip@gmail.com")
// console.log("-------------------------------")
// getDetails(10,"sandip")
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

let sum=(a:number,b:number):number =>{
return (a+b);
}

console.log(`sum is ${sum(5,10)}`)