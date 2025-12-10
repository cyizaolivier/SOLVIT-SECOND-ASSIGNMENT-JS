const students = [
  { id: 1, name: "Jolivet", age: 24 },
  { id: 2, name: "Aline", age: 21 },
  { id: 3, name: "Kevin", age: 28 },
  { id: 4, name: "Sarah", age: 19 },
];

export const searchById = (id) => {
  const result = students.filter((s) => s.id === id);
  return result.length > 0 ? result : "Student not found";
};

export const searchByName = (name) => {
  const result = students.find((s) =>
    s.name.toLowerCase().includes(name.toLowerCase())
  );
  return result ? result : "No student with that name";
};

export const filterByAge = (minAge) => {
  const result = students.filter((s) => s.age >= minAge);
  return result.length > 0 ? result : "No students found";
};
