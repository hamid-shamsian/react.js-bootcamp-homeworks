// abstract class of Shape:

class Shape {
  #shapeName;

  constructor(shapeName) {
    if (this.constructor === Shape) throw new Error("Abstract Classes cannot be instantiated.");
    this.#shapeName = shapeName;
  }

  get shapeName() {
    return this.#shapeName;
  }

  set shapeName(name) {
    if (typeof name !== "string") throw new TypeError("invalid Shape Name value.");
    this.#shapeName = name;
  }

  calcPerimeter() {
    throw new Error("Method of Abstract Class has no implementation. Implement this method in the derived Class in order to use that.");
  }

  calcArea() {
    throw new Error("Method of Abstract Class has no implementation. Implement this method in the derived Class in order to use that.");
  }
}
