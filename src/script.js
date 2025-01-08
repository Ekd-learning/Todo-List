"use strict";
import "./styles.css";
import { ToDo } from "./todo.js";
import { Project } from "./project.js";
import { addProject, addTask, displayTasks } from "./UIController.js";
const projects = document.querySelector(`.projects_list`);
const todos = document.querySelector(`.todos_container`);
const newProjectBtn = document.querySelector(`#submit-project-btn`);
let projectCounter = 0;
let taskCounter = 0;
const projectsList = [];

// const pr = new Project();
// pr.print();
// addProject("0", pr.getTitle());
newProjectBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const projectField = document.getElementById("project-name");
  const projectTitle =
    projectField.value === "" ? undefined : projectField.value; // get input
  projectField.value = ""; // clear input field
  const project = new Project(projectTitle, undefined, "high");
  addProject(Project.counter, projectTitle, project.getPriority());
  projectCounter++;
  projectsList.push(project);
  //document.querySelector(`#project-name`).blur(); // unnecessary
});

document.addEventListener("click", function (e) {
  const target = e.target;
  console.log("target:", target);
  if (target.classList[1] === "delete-btn") {
    // deleting project (maybe make a case for delete-btn for tasks)
    projects.removeChild(target.closest(`#project-${target.classList[0]}`));
  }
  if (target.classList[0] === "newTaskBtn") {
    todos.lastChild.firstChild.classList.toggle("hidden"); // show modal window
  }
  if (target.classList[0] === "addTaskBtn") {
    e.preventDefault();
    const taskTitle = // title
      document.getElementsByName("task-name")[0].value === ""
        ? undefined
        : document.getElementsByName("task-name")[0].value;
    const taskDescr = // description
      document.getElementsByName("task-descr")[0].value === ""
        ? undefined
        : document.getElementsByName("task-descr")[0].value;
    const taskNotes = // notes
      document.getElementsByName("task-notes")[0].value === ""
        ? undefined
        : document.getElementsByName("task-notes")[0].value;
    const taskDue = // due date
      document.getElementsByName("task-dueDate")[0].value === ""
        ? undefined
        : document.getElementsByName("task-dueDate")[0].value;
    const task = new ToDo(taskTitle, taskDescr, taskDue, taskNotes, false);
    projectsList[todos.firstChild.firstChild.id - 1].addTask(task);
    addTask(
      todos.firstChild.firstChild.id,
      taskCounter++,
      task.getTitle(),
      task.getDescription(),
      task.getDueDate(),
      task.getNotes()
    );
  }
  if (target.id.slice(0, 7) === "project") {
    displayTasks(projectsList[target.id.slice(-1) - 1]);
  }
});
// addTask("project_id", "1", "task_title", "task_descr", "01/01/2025", "notes");
