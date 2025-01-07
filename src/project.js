import { ToDo } from "./todo.js";

class Project {
  static counter = 0;
  #title;
  #dueDate;
  #priority;
  #todoList;
  constructor(title = "the project", dueDate = "tomorrow", priority = "low") {
    this.#title = title;
    this.#dueDate = dueDate;
    this.#priority = priority;
    this.#todoList = [];
    this.#todoList.push(new ToDo());
    Project.counter++;
  }
  getTitle() {
    return this.#title;
  }
  getDueDate() {
    return this.#dueDate;
  }
  getPriority() {
    console.log("this priority: ", this.#priority);
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
}
export { Project };
