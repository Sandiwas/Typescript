//object - object contains properties and behaviour.
// object contains variables & methods
// object is collection of key and value pairs.

//Ex:

// employee --name, desig, sal, dep
//              bonus(), getemdetails(), setdetails()

//student - name, sid,grade
// getdetails(), setdetails()

// Different ways to create an oject in JS/TS //
// 1. using 'object' type - Directly define the values for variable (JS/TS)
// 2. Inline Type Object - We also define the datatype of the keys (TS)
// 3. Using type aliases (TS)
// 4. Using the classes (JS ES16/TS)

// 1. using 'object' type - Directly define the values for variable
// The TypeScript 'object' type represents all values that are not in primitive types.

/* 
let employee: Object = {
  name: "John",
  age: 30,
  salary: 50000,
  job: "Engineer",
};
 */

/* let employee = {
  name: "John",
  age: 30,
  salary: 50000,
  getDetails: function () {
    return `${this.name} is a ${this.age} earning ${this.salary}`;
  },
};

console.log(typeof employee); //object

//accessing object - appraoch 1 ( using dot notation)
console.log(employee.name, employee.age, employee.salary); //John 30 50000
console.log(employee.getDetails()); //John is a 30 earning 50000

//accessing object - appraoch2 (using braket notation)
console.log(employee["name"], employee["age"], employee["salary"]); //John 30 50000
console.log(employee["getDetails"]()); //John is a 30 earning 50000

//Modify the value

employee.age = 50;
console.log("modified value : ", employee.age); //50
console.log("modified value : ", employee["age"]); //50
 */
//==============================================================================================================
// 2. Inline Type Object - We also define the datatype of the keys (TS)
let student: {
  name: string;
  age: number;
  grade: string;
  getSummary: () => string;
} = {
  name: "Scott",
  age: 15,
  grade: "A",
  getSummary: function (): string {
    return `${this.name} is ${this.age} years old and scored grade ${this.grade}`;
  },
};

console.log(student.getSummary()); //Scott is 15 years old and scored grade A

// The issue is `this` with arrow functions.
// - Arrow function `()=>` does not have its own `this`.
// - So `this.name`, `this.age`, and `this.grade` won't refer to `student`.
// - Use a normal function when you want `this` to refer to the object.
// getSummary: function (): string {
//   return `${this.name} is ${this.age} years old`;
// }

// Problem with Inline Type object: Need to repeat structure for every object

let student1: {
  name: string;
  age: number;
  grade: string;
  getSummary: () => string;
} = {
  name: "Ram",
  age: 25,
  grade: "A",
  getSummary: function (): string {
    return `${this.name} is ${this.age} years old and scored grade ${this.grade}`;
  },
};

console.log(student1.getSummary()); //Ram is 25 years old and scored grade A

//=======================================================================
// 3. Using 'type' aliases (TS): allows creating a new name for an existing type

//Example 1:

type Product = { name: string; price: number; getInfo: () => string };

let book1: Product = {
  name: "Learn java",
  price: 200,
  getInfo: function (): string {
    return `${this.name} costs ${this.price}`;
  },
};
let book2: Product = {
  name: "Learn Python",
  price: 500,
  getInfo: function () {
    return `${this.name} costs ${this.price}`;
  },
};

let book3: Product = {
  name: "Learn JS",
  price: 600,
  getInfo: function () {
    return `${this.name} costs ${this.price}`;
  },
};
console.log(book1.getInfo());
console.log(book2.getInfo());
console.log(book3.getInfo());

// Example 2: Intersection Types

type Personl = { name: string; age: number };
type Contact = { email: string; phone: number };
type Candidate = Personl & Contact & { getContactInfo: () => string };

let cand: Candidate = {
  name: "Sham",
  age: 26,
  email: "abc@gamil.com",
  phone: 7598493383,
  getContactInfo: function (): string {
    return `${this.name} can be contacted at ${this.email} or ${this.phone}`;
  },
};
console.log(cand.getContactInfo()); // Sham can be contacted at abc@gamil.com or 7598493383

// ==================================================
// 4. Using the classes (JS ES16/TS)

class Person {
  ssn: string;
  firstName: string;
  lastName: string;

  constructor(ssn: string, firstName: string, lastName: string) {
    this.ssn = ssn;
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
  getDetails(): string {
    return `SSN:${this.ssn}, Name:${this.getFullName()}`;
  }
}

//object creation
let person1 = new Person("1121233333", "John", "Kenedy");
console.log(person1.getDetails());
let person2 = new Person("22222222", "David", "D");
console.log(person2.getDetails());
let person3 = new Person("5555555", "Scott", "S");
console.log(person3.getDetails());
