//In TypeScript, the default access modifier is public.
//Parent class
class Person {
  public name: string; // public property - accessible anywhere
  protected age: number; // protected property - accessible within the class and its subclasses.
  private ssn: number; // private property - accessible only within this class

  constructor(name: string, age: number, ssn: number) {
    this.name = name;
    this.age = age;
    this.ssn = ssn;
  }
  public displayInfo() {
    console.log("Name : ", this.name);
    console.log("Age : ", this.age);
    console.log("ssn : ", this.ssn);
  }
}

//Child class

class Employees extends Person {
  private employeeId: number;

  constructor(name: string, age: number, ssn: number, employeeId: number) {
    super(name, age, ssn);
    this.employeeId = employeeId;
  }

  public showEmployeeDetails() {
    console.log("name : ", this.name); // public - accessible
    console.log("age : ", this.age); // protected - accessible
    // console.log("ssn : ", this.ssn);  // Error:private property
    console.log("employeeId : ", this.employeeId); // private, still we cann access since it is declared inside the same class
  }
}

let emp = new Employees("John", 20, 34567, 101);
emp.displayInfo();
emp.showEmployeeDetails();

console.log(emp.name); // accessible  because of public
//console.log(emp.age); // Not accessible  because of protected
//console.log(emp.ssn); // Not accessible because of private
