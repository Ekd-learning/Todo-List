import { Project } from "./project.js";
import { ToDo } from "./todo.js";
const projects = document.querySelector(`.projects_list`);
const todos = document.querySelector(`.todos_container`);
const addProject = function (id, title, priority) {
  const project_div = document.createElement("div");
  project_div.appendChild(document.createTextNode(title));
  project_div.classList.add(`project`);
  project_div.classList.add(priority);
  project_div.setAttribute("id", `project-${id}`);

  const button_div = document.createElement("div"); // create container
  button_div.classList.add("project-btns-container");
  const delete_project_btn = document.createElement("button"); // create delete btn
  delete_project_btn.classList.add(id); // to find the project element easier. might not evene need it at all
  delete_project_btn.classList.add("delete-btn");
  delete_project_btn.textContent = `Delete`;
  const edit_project_btn = document.createElement("button"); // create edit btn
  edit_project_btn.classList.add(id);
  edit_project_btn.classList.add("edit-btn");
  edit_project_btn.textContent = "Edit";
  button_div.appendChild(edit_project_btn);
  button_div.appendChild(delete_project_btn); // pack buttons in 1 div

  projects.appendChild(project_div);
  project_div.appendChild(button_div);

  const taskBtn_div = document.createElement("div"); // add this to todos container
  taskBtn_div.classList.add("taskBtn_container");
  const newTaskBtn = document.createElement("button");
  //newTaskBtn.classList.add(id); // to bond task and project
  newTaskBtn.setAttribute("id", id);
  console.log(todos.firstChild); // comment later
  if (todos.firstChild !== null) {
    // don't add the button if there's 1 already
    todos.firstChild.setAttribute("id", id); // update id so the button links to the corresponding project
    return;
  }
  newTaskBtn.classList.add("newTaskBtn");
  newTaskBtn.textContent = "New Task";
  taskBtn_div.appendChild(newTaskBtn);
  todos.appendChild(taskBtn_div);
};
const addTask = function (project_id, id, title, description, dueDate, notes) {
  const task_div = document.createElement("div");
  task_div.setAttribute("id", id);
  task_div.setAttribute("project_id", project_id);

  const title_div = document.createElement("div");
  title_div.classList.add("task_title");
  title_div.appendChild(document.createTextNode(title));
  task_div.appendChild(title_div);

  const descr_div = document.createElement("div");
  descr_div.classList.add("task_description");
  descr_div.appendChild(document.createTextNode(description));
  task_div.appendChild(descr_div);

  const notes_div = document.createElement("div");
  notes_div.classList.add("task_notes");
  notes_div.appendChild(document.createTextNode(notes));
  task_div.appendChild(notes_div);

  const due_div = document.createElement("div");
  due_div.classList.add("task_dueDate");
  due_div.appendChild(document.createTextNode(dueDate));
  task_div.appendChild(due_div);

  task_div.classList.add("task");

  todos.appendChild(task_div);
  console.log(todos);

  // next add a checkbox and corresponding attributes...
};
export { addProject, addTask };
