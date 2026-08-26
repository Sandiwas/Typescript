/*
1. Class
2. Read only Properties
3. Optional property


4. Static properties and methods
    // 1) static properties/methods are common/shared across all the objects
   // 2) static properties/methods can be accessed through class name directly
    // 3) static properties /methods can be modified using class
    //4) we cannot use 'this' for static properties , instead we can use class name.

*/

class Student {
  readonly studentId: number; // Read-only property (can only be assigned once, inside constructor)
  name: string; //Regualr property
  email?: string; // Optional property (can be undefined)
  static schoolName: string = "Greenwood High"; // Static variable shared among all instances/objects

  // Constructor to initialize student properties
  constructor(id: number, name: string, email?: string) {
    this.studentId = id;
    this.name = name; // email can be undefined if not provided
    this.email = email;
  }
  /*       Method to display student information (Named function)
      displayInfo(){
        console.log("Students ID : ",this.studentId)
        console.log("Students name : ",this.name)
        if(this.email){
            console.log(`email : ${this.email}`)
        }else{
            console.log("Email is not provided.")
        }
        // Access static property using class name
        console.log(Student.schoolName);
      } */

  //  Method to display student information(Anonymous method using arrow function syntax)
  displayInfo = (): void => {
    console.log("Student id :", this.studentId);
    console.log("Student name : ", this.name);
    if (this.email) {
      console.log("Email :", this.email);
    } else {
      console.log("Email is not provided.");
    }
    console.log("School name :", Student.schoolName);
  };

  static changeSchoolName(newName: string): void {
    Student.schoolName = newName;
  }
}

/* So inside displayInfo():
this.name
means:
Get name from the current Student object.
While:
Student.schoolName
means:
Get schoolName from the Student class */

let stu1 = new Student(101, "RAM");
let stu2 = new Student(102, "Bob", "ab@gmail");

stu1.displayInfo();
stu2.displayInfo();

// Change the static school name
Student.changeSchoolName("Sunrise Academy");

// Display updated student information after school name change
stu1.displayInfo();
stu2.displayInfo();
