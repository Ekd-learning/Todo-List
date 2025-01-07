class ToDo {
  #title;
  #description;
  #dueDate;
  #priority;
  #notes;
  #checklist;
  constructor(
    title = "to do",
    description = "things to do today",
    dueDate = "today",
    priority = "low",
    notes = "no notes",
    checklist = false
  ) {
    this.#title = title;
    this.#description = description;
    this.#dueDate = dueDate;
    this.#priority = priority;
    this.#notes = notes;
    this.#checklist = checklist;
  }
  getTitle() {
    return this.#title;
  }
  getDescription() {
    return this.#description;
  }
  getDueDate() {
    return this.#dueDate;
  }
  getPriority() {
    return this.#priority;
  }
  getNotes() {
    return this.#notes;
  }
  getCheckList() {
    return this.#checklist;
  }
  setTitle(newTitle) {
    this.#title = newTitle;
  }
  setDescription(newDescription) {
    this.#description = newDescription;
  }
  setDueDate(newDueDate) {
    this.#dueDate = newDueDate;
  }
  setPriority(newPriority) {
    this.#priority = newPriority;
  }
  setNotes(newNotes) {
    this.#notes = newNotes;
  }
  #setCheckList(newCheckList) {
    this.#checklist = newCheckList;
  }
  toggleCheckList() {
    this.#checklist = !this.#checklist;
  }
  print() {
    console.log(
      "title:",
      this.#title,
      "\ndescription:",
      this.#description,
      "\ndue date:",
      this.#dueDate,
      "\npriority:",
      this.#priority,
      "\nnotes:",
      this.#notes,
      "\nchecklist(done):",
      this.#checklist
    );
  }
}

export { ToDo };
