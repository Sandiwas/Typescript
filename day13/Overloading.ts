class Calculator {
  //Constructor overloading

  constructor(); // default constructor
  constructor(a: number, b: number); // parameterized constructor

  constructor(a?: number, b?: number) {
    if (a !== undefined && b !== undefined) {
      console.log("sum of a and b : ", a + b);
    } else {
      console.log("Default constructor called");
    }
  }

  //Method overloading

  add(a: number, b: number): number;
  add(a: number, b: number, c: number): number;

  add(a: number, b: number, c?: number): number {
    if (c !== undefined) {
      return a + b + c;
    }
    return a + b;
  }
}
//Usage

let cal1 = new Calculator();
let cal2 = new Calculator(2, 3);

//Method overloading
console.log("adding two number : ", cal1.add(10, 20));
console.log("adding two number : ", cal1.add(10, 20, 30));


console.log("adding two number : ", cal2.add(10, 20));
console.log("adding two number : ", cal2.add(10, 20, 30));