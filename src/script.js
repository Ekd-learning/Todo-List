"use strict";
import "./styles.css";
import { ToDo } from "./todo.js";
import { Project } from "./project.js";
import { addProject, addTask } from "./UIController.js";
const projects = document.querySelector(`.projects_list`);
const newProjectBtn = document.querySelector(`#submit-project-btn`);
let projectCounter = 1;

// const pr = new Project();
// pr.print();
// addProject("0", pr.getTitle());
newProjectBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const projectField = document.getElementById("project-name");
  const projectTitle = projectField.value; // get input
  projectField.value = ""; // clear input field
  const project = new Project(projectTitle, undefined, "high");
  console.log("project priority:", project.getPriority());
  addProject(Project.counter, projectTitle, project.getPriority());
  projectCounter++;
  console.log(projects);

  //document.querySelector(`#project-name`).blur(); // unnecessary
});

document.addEventListener("click", function (e) {
  const target = e.target;
  console.log("target:", target); //, "\ntarget.closest():", target.closest());
});
//addTask("project_id", "1", "task_title", "task_descr", "01/01/2025", "notes");
