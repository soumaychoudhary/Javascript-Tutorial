/**
Static class methods are defined on the class itself.
You cannot call a static method on an object, only on an object class.

A static member is a property or method that belongs to the class itself, rather than to the objects (instances) created from that class.

A static method is a method that belongs to the class rather than its individual objects. It is called using the class name.
 */

class Car {
  static engine = 'four stroke';
  constructor(name) {
    this.name = name;
  }
  static hello() {
    return "Hello!!";
  }
}

const myCar = new Car("Ford");

// You can call 'hello()' on the Car Class:
console.log(Car.hello());
console.log(Car.engine);
// But NOT on a Car Object:
// console.log(myCar.hello());
// this will raise an error.