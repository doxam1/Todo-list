import "./style.css";
import Todo from "./todoObj";
import "./minDateToday";
import "./addNewProjectOption";
// import defaultProject from './addToProject';
import "./newProjectHandler";
import AddToProject from "./addToProject";
import projectNavBtnColor from "./projectNavbtnsStyleOnClick";
import openNewNoteModal from "./newNoteModal";

export { onloadRendering };
export { render };

onloadRendering();
render();
openNewNoteModal();
// i want default project to be selected on the dropdown menu of project names.
document.getElementById("DefaultProjectOption").selected = true;

// console.log(Todo.allTodosNotes)
// the render will need to change so i can loop thru the todo array and render it again on every change.

function render() {
  projectNavBtnColor();
  const projectHeaderBtnLibrary = document.querySelectorAll(".projectBtn");
  projectHeaderBtnLibrary.forEach((projectBtn) => {
    projectBtn.onclick = () => {
      const todoDivsTotal = document.querySelectorAll(".todoDiv");
      todoDivsTotal.forEach((todoDiv) => {
        if (projectBtn.classList.contains("allTodoNotesFromAllProjects")) {
          const ProjectTodoNotes = document.querySelector(".ProjectTodoNotes");
          ProjectTodoNotes.innerHTML = "";
          Todo.allTodosNotes.forEach((todo, index) => {
            AddToProject(Todo.allTodosNotes[index]);
          });
          todoDiv.style.display = "block";
          return;
        }
        const projectBtnLastClassName = projectBtn.className
          .split(" ")
          .slice(-1)[0];
        const todoDivsSameClassAsProjectBtn = document.querySelectorAll(
          `div.${projectBtnLastClassName}`
        );
        todoDivsSameClassAsProjectBtn.forEach((todoNote) => {
          todoNote.style.display = "block";
        });
        if (!todoDiv.classList.contains(`${projectBtnLastClassName}`)) {
          todoDiv.style.display = "none";
        }
      });
    };
  });
}

// this function is for rendering a saved version of the object of todo's. need to learn about local storage + saving the library functions.

// const renderBtn = document.querySelector('.allTodoNotesFromAllProjects');
function onloadRendering() {
  const ProjectTodoNotes = document.querySelector(".ProjectTodoNotes");
  ProjectTodoNotes.innerHTML = "";
  Todo.allTodosNoteLocalStorage(
    JSON.parse(localStorage.getItem("AllTodoNotes"))
  );
  // console.log(Todo.allTodosNotes)
  if (Todo.allTodosNotes.length === 0) {
    ProjectTodoNotes.style.background =
      "no-repeat url('./img/pending.svg') center";
    ProjectTodoNotes.innerHTML =
      '<h1 class="nothingToDoH1"> nothing To Do... </h1>';
  } else {
    ProjectTodoNotes.style.background = "white";
    ProjectTodoNotes.innerHTML = "";
  }
  Todo.allTodosNotes.forEach((todo, index) => {
    AddToProject(Todo.allTodosNotes[index]);
  });
}
