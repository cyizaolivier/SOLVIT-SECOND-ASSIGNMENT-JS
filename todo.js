import { tasks } from "./storage.js";
export function addTask(task) {
  const newTasks = tasks.push(task);
  return newTasks;
}

export function removeTask(task) {
  const result = tasks.filter((t) => t !== task);
  return result;
}

export function listTasks() {
  return tasks;
}
