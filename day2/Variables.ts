//1 .Scope

/* function exampleVar() {
  if (true) {
    var message = "Hello,world";
  }
  console.log(message);
}
exampleVar() */

// function scope for var keyword

/* function expampleLetConst() {
  if (true) {
    let message = "Hello let";
    const greeting = "Hello Const";
  }
  console.log(message);
  console.log(greeting);
}
expampleLetConst(); */
//=======================================================================================
//2 . value assignment at declaration

// var a;
// console.log(a);
// let b;
// console.log(b)
// const c;
// console.log(c);//ERROR: The constant "c" must be initialized
//=======================================================================================
//3. Re-declaration

// var city="Los Angeles";
// var city ="New youk";

// let country="USA";
// let country="Cannada";  //The symbol "country" has already been declared

// const planet="earth";
// const planet="Mars"; //ERROR: The symbol "planet" has already been declared
//=======================================================================================
//4. Re-assignment

// var age=10;
//  age=30;

// let score=20;
// score=30;

// const pi=3.141;
// pi=3.14123;// Error (Cannot change a constant)
//=======================================================================================
//5. Hoisting (Variable Access Before Declaration)

// console.log(a); // undefined (var is hoisted)
// var a = 10;
// console.log(b); // Error (Cannot access before initialization)
// let b = 20;
// console.log(c); // Error (Cannot access before initialization)
// const c = 30;
