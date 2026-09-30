/**
Class Inheritance
To create a class inheritance, use the extends keyword.
A class created with a class inheritance inherits all the methods from another class:
 */

/**
              Vehicle
                │
        ┌───────┴───────┐
        ↓               ↓
       Car             Bike
 */

// class Car {
//   constructor(brand) {
//     this.carname = brand;
//   }
//   present() {
//     return 'I have a ' + this.carname;
//   }
// }

// class Model extends Car {
//   constructor(brand, mod) {
//     super(brand);
//     this.model = mod;
//   }
//   show() {
//     return this.present() + ', it is a ' + this.model;
//   }
// }

// let myCar = new Model("Ford", "Mustang");


/**
The super() method refers to the parent class.

By calling the super() method in the constructor method, we call the parent's constructor method and gets access to the parent's properties and methods.
 */

// Inheritance is useful for code reusability: reuse properties and methods of an existing class when you create a new class


///////////////////////////  strong example for proper understanding ///////////////////////////

class Employee {

    constructor(name, id, salary) {
        this.name = name;
        this.id = id;
        this.salary = salary;
    }

    login() {
        console.log(`${this.name} logged in`);
    }

    logout() {
        console.log(`${this.name} logged out`);
    }

    displayInfo() {
        console.log(
            `${this.id} - ${this.name} - ₹${this.salary}`
        );
    }
}

class Developer extends Employee {

    constructor(name, id, salary, language) {

        super(name, id, salary);

        this.language = language;
    }

    writeCode() {
        console.log(
            `${this.name} is writing ${this.language} code`
        );
    }
}

class Manager extends Employee {

    constructor(name, id, salary, teamSize) {

        super(name, id, salary);

        this.teamSize = teamSize;
    }

    conductMeeting() {
        console.log(
            `${this.name} is conducting a meeting`
        );
    }
}

const developer = new Developer(
    "Rahul",
    101,
    60000,
    "JavaScript"
);

const manager = new Manager(
    "Priya",
    102,
    90000,
    10
);

developer.login();
developer.logout();
developer.displayInfo();

developer.writeCode();

manager.login();
manager.displayInfo();

manager.conductMeeting();
