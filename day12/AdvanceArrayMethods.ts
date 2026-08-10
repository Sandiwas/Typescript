///1.forEach()

let fruites:string[]=['kiwi','banana','mango','apple','orange'];


fruites.forEach(function(ele,index){
    console.log(ele , index)
})


// let numbers:number[]=[1,2,3,4,5];

// let sqaurenumber:number[]=numbers.map(function(ele){
// return (ele*ele)
// })
// console.log("Orignal Array : ",numbers)
// console.log("Square Array : ",sqaurenumber)

//2. map()
let numbers:number[]=[1,2,3,4,5];

let doubledNumber:number[]=numbers.map((ele)=>{
return (ele+ele)
})
console.log("Orignal Array : ",numbers)
console.log("Doub led Array : ",doubledNumber)