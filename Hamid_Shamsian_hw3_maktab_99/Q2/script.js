const users = [];

const usersSortedByAge = () => users.sort((a, b) => b.age - a.age);
const userWithHighestSalary = () => (users.length && users.sort((a, b) => b.salary - a.salary)[0].fullName) || "no user!";
const averageSalary = () => users.length && users.reduce((sum, user) => sum + user.salary, 0) / users.length;
const ifAllUsersHaveAvatar = () => (users.length ? (users.every(user => user.avatar) ? "YES" : "NO") : "no user!");

while (true) {
   console.log("----------------------------------");
   console.log("user With Highest Salary: ", userWithHighestSalary());
   console.log("average Salary: ", averageSalary());
   console.log("if All Users Have Avatar: ", ifAllUsersHaveAvatar());
   console.log("users Sorted By Age: ", usersSortedByAge());

   const newUser = prompt("enter new user's data");
   if (!newUser) break;
   const newUserData = newUser.split(", ");
   users.push({ fullName: newUserData[0], age: Number(newUserData[1]), avatar: newUserData[2] === "yes", salary: Number(newUserData[3]) });
}
