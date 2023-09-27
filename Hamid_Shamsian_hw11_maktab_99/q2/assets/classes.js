// >>>>>>>>>>>>>>>>>>>>> abstract class of Shape <<<<<<<<<<<<<<<<<<<<<<

class Shape {
  #shapeName;
  #units = { calcPerimeter: "CM", calcArea: "CM<sup>2</sup>", calcVolume: "CM<sup>3</sup>" };

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

  get units() {
    return this.#units;
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

  static interface = () => ({
    in: { sidesCount: "Number of Sides", oneSideLength: "Length of Side" },
    out: { calcPerimeter: "Perimeter", calcArea: "Area" }
  });
}

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

// >>>>>>>>>>>>>>>>>>>>> derived classes from polygon <<<<<<<<<<<<<<<<<<<<<<<<

// square:
class Square extends Polygon {
  constructor(shapeName, width) {
    super(shapeName, 4, width);
  }

  get width() {
    return this.oneSideLength;
  }

  set width(w) {
    if (typeof w !== "number" || isNaN(w)) throw new TypeError("invalid square width.");
    this.oneSideLength = w;
  }

  calcPerimeter() {
    return super.calcPerimeter();
  }

  calcArea() {
    return super.calcArea();
  }

  static interface = () => ({ in: { width: "Width" }, out: { calcPerimeter: "Perimeter", calcArea: "Area" } });
}

// rectangle:
class Rectangle extends Polygon {
  #width;
  #height;

  constructor(shapeName, width, height) {
    super(shapeName);
    this.#width = width;
    this.#height = height;
  }

  get width() {
    return this.#width;
  }

  set width(w) {
    if (typeof w !== "number" || isNaN(w)) throw new TypeError("invalid rectangle width.");
    this.#width = w;
  }

  get height() {
    return this.#height;
  }

  set height(h) {
    if (typeof h !== "number" || isNaN(h)) throw new TypeError("invalid rectangle height.");
    this.#height = h;
  }

  calcPerimeter() {
    return (+this.#width + +this.#height) * 2;
  }

  calcArea() {
    return this.#width * this.#height;
  }

  static interface = () => ({ in: { width: "Width", height: "Height" }, out: { calcPerimeter: "Perimeter", calcArea: "Area" } });
}

// >>>>>>>>>>>>>>>>>>>>> derived classes from non-polygon <<<<<<<<<<<<<<<<<<<<<<<<

// circle:
class Circle extends NonPolygon {
  constructor(shapeName, radius) {
    super(shapeName, radius);
  }

  calcPerimeter() {
    return 2 * Math.PI * this.radius;
  }

  calcArea() {
    return Math.PI * this.radius ** 2;
  }

  static interface = () => ({ in: { radius: "Radius" }, out: { calcPerimeter: "Perimeter", calcArea: "Area" } });
}

// cylinder:
class Cylinder extends Circle {
  #height;

  constructor(shapeName, radius, height) {
    super(shapeName, radius);
    this.#height = height;
  }

  get height() {
    return this.#height;
  }

  set height(h) {
    if (typeof h !== "number" || isNaN(h)) throw new TypeError("invalid cylinder height.");
    this.#height = h;
  }

  calcArea() {
    return this.calcPerimeter() * this.height + 2 * super.calcArea(); // calcArea method of Circle class
  }

  calcVolume() {
    return super.calcArea() * this.height; // calcArea method of Circle class
  }

  static interface = () => ({ in: { radius: "Radius", height: "Height" }, out: { calcArea: "Area", calcVolume: "Volume" } });
}

export default { Polygon, Square, Rectangle, Circle, Cylinder };
