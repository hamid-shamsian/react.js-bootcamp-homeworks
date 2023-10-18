const meals = { breakfast: "7:00 a.m", lunch: "12:00 p.m", dinner: "7:00 p.m" };

const getTimestampOf = (time, day = 0) => {
   let [timeIn12format, suffix] = time.split(" ");
   let [hour, minute] = timeIn12format.split(":");

   if (suffix === "p.m" && hour != 12) hour = +hour + 12;
   if (suffix === "a.m" && hour == 12) hour = 0;

   return +new Date(1970, 0, day + 1, hour, minute, 0, 0);
};

const formatMinutes = diffTimestamp => {
   const timeInMinutes = Math.floor(diffTimestamp / (1000 * 60));
   if (timeInMinutes < 60) return `${timeInMinutes} minute(s)`;
   const hours = Math.floor(timeInMinutes / 60);
   const minutes = timeInMinutes % 60;
   return `${hours} hour(s)${minutes ? ` and ${minutes} minute(s)` : ""}`;
};

const nextMeal = givenTime => {
   const givenTimestamp = getTimestampOf(givenTime);
   const mealsTimestamps = Object.values(meals).map(m => getTimestampOf(m));

   mealsTimestamps.push(givenTimestamp, getTimestampOf(meals.breakfast, 1));
   mealsTimestamps.sort((a, b) => a - b);

   const index = mealsTimestamps.indexOf(givenTimestamp);
   const diffTimeInMins = mealsTimestamps[index + 1] - mealsTimestamps[index];

   return `${diffTimeInMins ? `${formatMinutes(diffTimeInMins)} until next meal: ` : ""}${Object.keys(meals)[index % 3]}${
      !diffTimeInMins ? " time!" : ""
   }`;
};

console.log("7:01 p.m\n\n", nextMeal("7:01 p.m"), "\n\n\n");
console.log("7:00 p.m\n\n", nextMeal("7:00 p.m"), "\n\n\n");
console.log("8:05 a.m\n\n", nextMeal("8:05 a.m"), "\n\n\n");
console.log("3:00 p.m\n\n", nextMeal("3:00 p.m"), "\n\n\n");
console.log("6:45 a.m\n\n", nextMeal("6:45 a.m"), "\n\n\n");
console.log("7:00 a.m\n\n", nextMeal("7:00 a.m"), "\n\n\n");
