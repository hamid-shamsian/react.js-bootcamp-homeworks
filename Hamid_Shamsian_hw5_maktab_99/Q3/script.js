const sortUsersByAge = users => users.sort((userA, userB) => userA.age - userB.age);

const myUsers = [
   { name: "aaa", age: 30 },
   { name: "bbb", age: 24 },
   { name: "ccc", age: 35 },
   { name: "ddd", age: 18 },
   { name: "eee", age: 28 }
];

console.log(sortUsersByAge(myUsers));
