import './style.css';
import Todo from './todoObj';
import "./minDateToday";
import "./addNewProjectOption"
import defaultProject from './defaultProject';

const todoTest = new Todo ('test', 'go bom bom', new Date(2024, 3, 19, 13,30), 5);

console.log(todoTest)

const defaultProjectBtn = document.querySelector('.default'); // basic logic for projects btns.
defaultProjectBtn.onclick = () => {
    defaultProject();
}


