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

// derived classes:

class Polygon extends Shape {
  #sidesCount;
  #oneSideLength;

  constructor(shapeName, sidesCount, oneSideLength) {
    super(shapeName);
    this.#sidesCount = sidesCount;
    this.#oneSideLength = oneSideLength;
  }

  calcPerimeter() {
    return this.#sidesCount * this.#oneSideLength;
  }

  calcArea() {
    return (this.calcPerimeter() * this.#oneSideLength) / (Math.tan(Math.PI / this.#sidesCount) * 4);
  }
}

const polygon = new Polygon("my polygon", 6, 10);

console.log(polygon.calcPerimeter());
console.log(polygon.calcArea());

console.log(polygon.shapeName);
polygon.shapeName = "his polygon";
console.log(polygon.shapeName);
