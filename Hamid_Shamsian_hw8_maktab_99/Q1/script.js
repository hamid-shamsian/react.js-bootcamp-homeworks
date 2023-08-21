const user = {};

const setterGenerator = function (propertyKey) {
   console.log(this); // will log 'user' object because 'this' is bound to 'user' in line 13 (and 16).

   return properyValue => {
      this[propertyKey] = properyValue;
      console.log(this); // again will log 'user' because arrow function does not rebound this keyword, but will constantly bind 'this' to 'outer context this' at its birthday!
      return this;
   };
};

const userNameSetter = setterGenerator.call(user, "name");
console.log(userNameSetter("Jack")); // we can log it because 'this' is returned from the function.

const userAgeSetter = setterGenerator.call(user, "age");
console.log(userAgeSetter(30));

console.log(user);

// ### A different logic and implementation: /////////////////////////////////////////////////

const privateObjectGenerator = () => {
   const privateObject = {};
   return {
      setProperty(key, value) {
         privateObject[key] = value;
      },
      get() {
         return privateObject;
      }
   };
};

const myPrivateObject = privateObjectGenerator();

// console.log(myPrivateObject.get());

myPrivateObject.setProperty("name", "alex");

// console.log(myPrivateObject.get());
