import { ToDo } from "./todo.js";

class Project {
  static counter = 0;
  #title;
  #dueDate;
  #priority;
  #todoList;
  constructor(
    title = "The Project",
    dueDate = `${new Date().toJSON().slice(0, 10)}`,
    priority = "low"
  ) {
    this.#title = title;
    this.#dueDate = dueDate;
    this.#priority = priority;
    this.#todoList = [];
    //this.#todoList.push(new ToDo());
    Project.counter++;
  }
  getTitle() {
    return this.#title;
  }
  getDueDate() {
    return this.#dueDate;
  }
  getPriority() {
    return this.#priority;
  }
  setTitle(newTitle) {
    this.#title = newTitle;
  }
  setDueDate(newDueDate) {
    this.#dueDate = newDueDate;
  }
  setPriority(newPriority) {
    this.#priority = newPriority;
  }
  print() {
    console.log(
      "title:",
      this.#title,
      "\ndue date:",
      this.#dueDate,
      "\npriority:",
      this.#priority
    );
  }
  addTask(task) {
    this.#todoList.push(task);
  }
  getTasks() {
    return this.#todoList;
  }
}
export { Project };
