/*
/*  1. An interface in TypeScript is a way to define the structure of an object. 
    2.  It tells the compiler what properties and types an object should have. 
    3. It's like a blueprint for objects.

Abstract method: we only signature of the method ( there is no implementation)


interface InterfaceName
{
properties
abstract methods
}

1 Regular properties
2 Optional properties
3 Readonly properties & function types
4 Extending interfaces
5 Class implements interface

*/

//Example 1: Basic interface

interface Person {
  name: string;
  age: number;
}

let student: Person = { name: "sandip", age: 25 };

console.log(student.name); //Ram
console.log(student.age); //25
console.log(student); // { name: 'Ram', age: 25 }

//Example 2: Optional Properties  (?)

interface Employee {
  eid: number;
  ename: string;
  edepartment?: string;
}

let emp1: Employee = { eid: 101, ename: "amit" };
let emp: Employee = { eid: 101, ename: "amit", edepartment: "acccounts" };

console.log(emp1.eid, emp1.ename, emp1.edepartment); //101 amit undefined
console.log(emp.eid, emp.ename, emp.edepartment); //101 amit acccounts

//Example 3: Readonly Properties (readonly to prevent modification) & Function type/Method
interface Book {
  title: string;
  readonly isbn: string;
  display(): void; // abstrac method
}

let b1: Book = {
  title: "Learning playwright",
  isbn: "123ABC",
  display(): void {
    console.log(b1.title, b1.isbn);
  },
};

console.log(b1.title); //Learning playwright
console.log(b1.isbn); //123ABC
b1.display(); //Learning playwright 123ABC

console.log("After changing values...");
b1.title = "Learn TypeScript";
console.log("After changing title:", b1.title); //After changing title: Learn TypeScript
//b1.isbn="123-XYZ";  // Error: Cannot assign to 'isbn' because it is a read-only property

//Example 4: Extending Interfaces (Inheritance is applicable)

//Parent interface
/* interface Aniaml {
  name: string;
}

//child interface

interface Dog extends Aniaml {
  color: string;
}

let mydog: Dog = { name: "Buddy", color: "Black" };

console.log(mydog.name, mydog.color); //Buddy Black */

//Example 5:

// class can extends another class
// interface can extends another interface
// class can implement interface

interface Animal {
  name: string;
  sound(): void;
}

class Dog implements Animal {
  name: string; //inherited from interface Animal //This is mandetory if property define in Inteface then we must define same property in implemented class also
  color: string;

  constructor(name: string, color: string) {
    this.name = name;
    this.color = color;
  }
  sound() {
    console.log("bark...");
  }
}

let pet = new Dog("Tommy", "Black");
console.log(pet.name); //Tommy
console.log(pet.color); //Black
pet.sound(); //bark...
