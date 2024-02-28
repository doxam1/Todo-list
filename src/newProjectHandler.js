import AddToProject from "./defaultProject";
import { render } from './index';
import { validateForm } from './formValidation';

const addNewProjectBtn = document.querySelector('.addNewProjectBtn');


const NewProjectTitle = document.getElementById('title');
const NewProjectDescription = document.getElementById('description');
const NewProjectDueDate = document.querySelector('#date');
const NewProjectName = document.querySelector("#projectName");




addNewProjectBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    const newProjectImportance = document.querySelector('input[name="priority"]:checked').value; /// need to get it after user press and change priority - not on load.
    let divBorderColorFromPriority = '';
    switch (newProjectImportance) {
        case 'Normal':
            divBorderColorFromPriority = 'black';
            break;
        case 'No hurry':
            divBorderColorFromPriority = 'green';
            break;
        case 'Super important':
            divBorderColorFromPriority = 'red';
            break;    
        //default:
        //    break;
    }
    const newTodo = `<h1> ${NewProjectTitle.value} </h1> 
                     <p> ${NewProjectDescription.value} </p>
                     <div> Due Date: ${NewProjectDueDate.value.split('T')} </div>
                     <div> Priority: ${newProjectImportance}</div>
                     <div> project Name: ${NewProjectName.options[NewProjectName.selectedIndex].text}
                     ` //fix due date with datefn?
    AddToProject(newTodo, divBorderColorFromPriority);
    render();
})

// clear the form after sending note to project list.

// create an object, the key name might be (title? projectname? todonote?), the value might be the innerHtml for every note?
// so i can save the object every time and it will reload automatically every time?
// 

// i will need to change the innerHtml to text or something because this way the page is open to attacks. will use it for now for easiness. 
