import AddToProject from "./addToProject";
import { render } from "./index";
import { validateForm } from "./formValidation";
import Todo from "./todoObj";

const addNewProjectBtn = document.querySelector(".addNewProjectBtn");

const NewProjectTitle = document.getElementById("title");
const NewProjectDescription = document.getElementById("description");
const NewProjectDueDate = document.querySelector("#date");
const NewProjectName = document.querySelector("#projectName");

// here i need to use a factory function/object constructor/class make an object from any todo user submits.
// the new object submit will go to an array of objects - on the array i can use array methods to delete, push etc...
// i will need to render the array with for...in loop for each todo notes on any change or when page loades using data saving methods.

addNewProjectBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (!validateForm()) return;
  const newProjectImportance = document.querySelector(
    'input[name="priority"]:checked'
  ).value; /// need to get it after user press and change priority - not on load.
  new Todo(
    NewProjectTitle.value,
    NewProjectDescription.value,
    NewProjectDueDate.value,
    newProjectImportance,
    NewProjectName.options[NewProjectName.selectedIndex].text,
    [],
    []
  ).pushToTodoNotes();
  localStorage.setItem("AllTodoNotes", JSON.stringify(Todo.allTodosNotes));
  AddToProject(Todo.allTodosNotes[Todo.allTodosNotes.length - 1]);
  document.querySelector(`.${projectName.value}`).click(); // click is working.
  document.querySelector(".menu").style.display = "none";

  // delete form after submiting new note to project.
  NewProjectTitle.value = "";
  NewProjectDescription.value = "";
  document.querySelector("#normal").checked = true;

  render();
});
