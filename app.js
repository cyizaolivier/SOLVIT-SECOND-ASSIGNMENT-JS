import { addTask, removeTask, listTasks } from "./todo.js";
import { searchById, searchByName, filterByAge } from "./search.js";
import { getLength } from "./utils/index.js";
console.log(`Word length: ${getLength("mup")}`);

const test1 = searchById(2);
console.log("Found student:", test1);
const test2 = searchById(20);
console.log("Found student:", test2);

const test3 = searchByName("karangwa");
console.log(test3);

const test4 = filterByAge(21);
console.log(`Students aged 21 and above: ${JSON.stringify(test4)}`);

console.log("Initial Tasks:", listTasks());

const newTaskList = addTask("Task 6");
console.log("After adding a task:", newTaskList);

const updatedTaskList = removeTask("Task 2");
console.log("After removing a task:", updatedTaskList);
