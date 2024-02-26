import AddToProject from "./defaultProject";
import { render } from './index'

const addNewProjectBtn = document.querySelector('.addNewProjectBtn');


const NewProjectTitle = document.getElementById('title');
const NewProjectDescription = document.getElementById('description');
const NewProjectDueDate = document.querySelector('#date');
const NewProjectName = document.querySelector("#projectName");




addNewProjectBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const newProjectImportance = document.querySelector('input[name="priority"]:checked').value; /// need to get it after user press and change priority - not on load.
    const newTodo = `<h1> ${NewProjectTitle.value} </h1> 
                     <p> ${NewProjectDescription.value} </p>
                     <div> Due Date: ${NewProjectDueDate.value} </div>
                     <div> Priority: ${newProjectImportance}</div>
                     <div> project Name: ${NewProjectName.options[NewProjectName.selectedIndex].text}
                     ` //fix due date with datefn?
    AddToProject(newTodo);
    render();
})

// clear the form after sending note to project list.

// create an object, the key name might be (title? projectname? todonote?), the value might be the innerHtml for every note?
// so i can save the object every time and it will reload automatically every time?
// 
