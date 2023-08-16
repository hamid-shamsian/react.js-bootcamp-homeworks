const salaries = {
   John: 100,
   Toni: 100,
   Jack: 100,
   Pete: 300,
   Mary: 250,
   Alex: 300,
   Dani: 150,
   Jimi: 300
};

const topSalary = salaries => {
   const highestPaidPeople = [];
   let topSalary = 0;

   for (const [name, salary] of Object.entries(salaries)) {
      if (salary > topSalary) {
         topSalary = salary;
         highestPaidPeople.length = 0;
         highestPaidPeople.push(name);
      } else if (salary === topSalary) {
         highestPaidPeople.push(name);
      }
   }

   return highestPaidPeople;
};

console.log(topSalary(salaries));

const topSalary2 = salaries => {
   const topSalary = Math.max(...Object.values(salaries));
   return Object.entries(salaries)
      .filter(p => p[1] === topSalary)
      .map(p => p[0]);
};

console.log(topSalary2(salaries));
