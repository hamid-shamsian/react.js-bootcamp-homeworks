// >>>>>>>>>>>>>>>>>>>>> abstract class of Shape <<<<<<<<<<<<<<<<<<<<<<

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

// >>>>>>>>>>>>>>>>>>>>> derived classes <<<<<<<<<<<<<<<<<<<<<<<<<<

// polygon:
class Polygon extends Shape {
  #sidesCount;
  #oneSideLength;

  constructor(shapeName, sidesCount, oneSideLength) {
    super(shapeName);
    this.#sidesCount = sidesCount;
    this.#oneSideLength = oneSideLength;
  }

  get sidesCount() {
    return this.#sidesCount;
  }

  set sidesCount(n) {
    if (typeof n !== "number" || isNaN(n)) throw new TypeError("invalid number of sides.");
    this.#sidesCount = n;
  }

  get oneSideLength() {
    return this.#oneSideLength;
  }

  set oneSideLength(l) {
    if (typeof l !== "number" || isNaN(l)) throw new TypeError("invalid length of one side.");
    this.#oneSideLength = l;
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

// polygon.oneSideLength = "a";
polygon.sidesCount = 10;
console.log(polygon.sidesCount);
console.log(polygon.calcPerimeter());
console.log(polygon.calcArea());

// non-polygon:
class NonPolygon extends Shape {
  #radius;
  #message =
    "this is a non-polygon shape without any furthur specifications. plz derive a more specific non-polygon class from the class of this object.";

  constructor(shapeName, radius) {
    super(shapeName);
    this.#radius = radius;
  }

  get radius() {
    return this.#radius;
  }

  set radius(r) {
    if (typeof r !== "number" || isNaN(r)) throw new TypeError("invalid radius.");
    this.#radius = r;
  }

  calcPerimeter() {
    return this.#message;
  }

  calcArea() {
    return this.#message;
  }
}

const nonPolygon = new NonPolygon("my non-polygon", 10);

console.log(nonPolygon.calcArea());
