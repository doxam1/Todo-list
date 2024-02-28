import './style.css';
import Todo from './todoObj';
import "./minDateToday";
import "./addNewProjectOption"
import defaultProject from './defaultProject';
import './newProjectHandler';


export { render };

const todoTest = new Todo ('test', 'go bom bom', new Date(2024, 3, 19, 13,30), 5);

render();

function render() {
    let projectHeaderBtnLibrary = document.querySelectorAll('.projectBtn');
    projectHeaderBtnLibrary.forEach((projectBtn)=>{
    projectBtn.onclick = () => {
        const todoDivsTotal = document.querySelectorAll('.todoDiv');
        todoDivsTotal.forEach((todoDiv)=>{
            if (projectBtn.classList.contains('allTodoNotesFromAllProjects')){
                todoNote.style.display = 'block';
                return;
            }
            const projectBtnLastClassName = projectBtn.className.split(' ').slice(-1)[0];
            const todoDivsSameClassAsProjectBtn = document.querySelectorAll(`div.${projectBtnLastClassName}`);
            todoDivsSameClassAsProjectBtn.forEach((todoNote) =>{
                todoNote.style.display = 'block';
            })
            if (!todoDiv.classList.contains(`${projectBtnLastClassName}`)) {
                todoNote.style.display = 'none';
            }
    })}})
}


