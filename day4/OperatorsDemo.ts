let a: number = 10, b: number = 20;
  
console.log("******* Arithmetic Operators **********");

console.log(a + b);  
console.log(b - a);
console.log(a * b);
console.log(b / a);
console.log(a % b);
console.log(5 ** 2);

console.log("******* Assignment Operators **********");

a = 10;
b = 5;
//a+=b;
// a=a+b
//console.log(a)

console.log((a += b)); //a=a+b==>15
console.log((a -= b)); //a=a-b==>10
console.log((a *= b)); //a=a*b==>50
console.log((a /= b)); //a=a/b==>10
console.log((a %= b)); //a=a%b==>0


console.log("********** Relational Operators ********");

a = 10;
b = 20;

console.log(a > b); //false
console.log(a < b); //true
console.log(a <= b); //true
console.log(a >= b); //false
console.log(a == b); //false
console.log(a != b); //true

//Differnec between ==(equality) === (strict equality)

console.log("******** Difference between ==  === *********");

let num1: number = 10; //number type
let num2: any = "10"; //String type

console.log(num1 == num2); //true (only comparing the values)
console.log(num1 === num2); // false (compare the values & type)

console.log("******** Logical operator ==  === *********");
//return true/false (booelan)
//work between boolean values

// b1        b2        &&        ||    !b2
// ----------------------------------------------------
// true     true      true     true
// true     false     false    true    false 
// false    true      false    true
// false    false     false    false   true

let b1: boolean = true;
let b2: boolean = false;

console.log(b1 && b2); //false
console.log(b1 || b2); //true
console.log(!b); //false
console.log(!b2); //true

//combination of logical & Relational operator

console.log("******** Mixing of Logical & Relational operators **********");

console.log(20 > 10 && 10 > 5); //true
console.log(10 < 20 || 5 > 10); //true


