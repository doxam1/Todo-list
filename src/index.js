import './style.css';
import Todo from './todoObj';
import "./minDateToday";
import "./addNewProjectOption"
import defaultProject from './defaultProject';
import './newProjectHandler';

export { render };

const todoTest = new Todo ('test', 'go bom bom', new Date(2024, 3, 19, 13,30), 5);

render();
// const defaultProjectBtn = document.querySelector('.defaultBtn'); // basic logic for projects btns.
// defaultProjectBtn.onclick = () => {
//     const defaultClass = document.querySelectorAll('.default');
//     defaultClass.forEach((defClass)=> {
//         defClass.setAttribute('style', 'display:block');
//     })
// }

function render() {
    let projectHeaderBtnLibrary = document.querySelectorAll('.projectBtn');
    projectHeaderBtnLibrary.forEach((projectBtn)=>{
    projectBtn.onclick = () => {
        const todoDivsTotal = document.querySelectorAll('.todoDiv');
        todoDivsTotal.forEach((todoDiv)=>{
            const projectBtnLastClassName = projectBtn.className.split(' ').slice(-1)[0];
            console.log(projectBtnLastClassName)    ///////////////////////////////        
            const todoDivsSameClassAsProjectBtn = document.querySelectorAll(`div.${projectBtnLastClassName}`);
            console.log(todoDivsSameClassAsProjectBtn) ///////////////////////
            todoDivsSameClassAsProjectBtn.forEach((todoNote) =>{
                console.log(todoNote)
                todoNote.setAttribute('style', 'display:block');
            })
            if (!todoDiv.classList.contains(`${projectBtnLastClassName}`)) {
                todoDiv.setAttribute('style', 'display:none');
            }
    })}})
}


