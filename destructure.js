const user = {
  firstName: "Jolivet",
  lastName: "Shema",
  age: 34,
  city: "Kigali",
  skills: ["React", "Node.js", "UI/UX"],
};

const { firstName, lastName, age, city, skills } = user;

console.log(
  `${firstName} ${lastName} lives in ${city} and is skilled in ${skills.join(
    ", "
  )}`
);
