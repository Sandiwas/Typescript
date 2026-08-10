

let names:Array<string>=["sandip","sachin","amit","amar"];


console.log(names.length);//4  //length is a attribute it is not a method

for(let i=0;i<names.length;i++){
console.log(names[i]);  //i represent index
}

let empId:Array<number>=[101,102,103,104];

//Example 2 Iterating using the for....in  loop (indexesing concept)  it works with index it start form zero iterate it end index 
// in repreted the indexes i in  0,1,2,3 like  
for(let i in empId){   //i is index  it reperent index itself 
console.log(empId[i])
}

//Example Iterate using the for....of loop (direct extract value form array without index )using value 

let data:Array<string|number>=[101,"sandip",102,"amit"];

for(let value of data){   //value is variable  it reperent value itself 
console.log(value)
}
  