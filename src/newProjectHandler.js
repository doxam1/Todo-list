import AddToProject from "./defaultProject";
import { render } from './index'

const addNewProjectBtn = document.querySelector('.addNewProjectBtn');


const NewProjectTitle = document.getElementById('title');
const NewProjectDescription = document.getElementById('description');
const NewProjectDueDate = document.querySelector('#date');

const NewProjectImportance = document.querySelector("[name='priority']:checked"); ////////



addNewProjectBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const newTodo = `<h1> ${NewProjectTitle.value} </h1> 
                     <p> ${NewProjectDescription.value} </p>
                     <span> Due Date: ${NewProjectDueDate.value}
                     <span> Priority: 
                     ` //fix due date with datefn?
    AddToProject(newTodo);
    render();
})

// clear the form after sending note to project list.
