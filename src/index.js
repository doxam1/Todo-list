import './style.css';
import Todo from './todoObj';
import "./minDateToday";
import "./addNewProjectOption"
import defaultProject from './addToProject';
import './newProjectHandler';
import AddToProject from './addToProject';


export { render };

render();


// console.log(Todo.allTodosNotes)
// the render will need to change so i can loop thru the todo array and render it again on every change.

function render() {
    let projectHeaderBtnLibrary = document.querySelectorAll('.projectBtn');
    projectHeaderBtnLibrary.forEach((projectBtn)=>{
    projectBtn.onclick = () => {
        const todoDivsTotal = document.querySelectorAll('.todoDiv');
        todoDivsTotal.forEach((todoDiv)=>{
            if (projectBtn.classList.contains('allTodoNotesFromAllProjects')){
                const ProjectTodoNotes = document.querySelector('.ProjectTodoNotes');
                ProjectTodoNotes.innerHTML = '';
                Todo.allTodosNotes.forEach((todo, index) => {        
                AddToProject(Todo.allTodosNotes[index]);
                })    
                todoDiv.style.display = 'block';
                return;
            }
            const projectBtnLastClassName = projectBtn.className.split(' ').slice(-1)[0];
            const todoDivsSameClassAsProjectBtn = document.querySelectorAll(`div.${projectBtnLastClassName}`);
            todoDivsSameClassAsProjectBtn.forEach((todoNote) =>{
                todoNote.style.display = 'block';
            })
            if (!todoDiv.classList.contains(`${projectBtnLastClassName}`)) {
                todoDiv.style.display = 'none';
            }
    })}})
}


// this function is for rendering a saved version of the object of todo's. need to learn about local storage + saving the library functions.

const renderBtn = document.querySelector('.allTodoNotesFromAllProjects');  
renderBtn.onclick = () =>{
    const ProjectTodoNotes = document.querySelector('.ProjectTodoNotes');
    ProjectTodoNotes.innerHTML = '';
    console.log(Todo.allTodosNotes)
    Todo.allTodosNotes.forEach((todo, index) => {        
        AddToProject(Todo.allTodosNotes[index]);
    })    
}


