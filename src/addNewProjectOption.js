const projectName = document.getElementById('projectName');
const projectsNavBtns = document.querySelector('.projectsNavBtns');

import {render} from './index'
import Todo from './todoObj';
import { removeNoteFromProject } from './removeNoteFromProject';


// might do a factory function - will check for a valid name with set function, and retrun the array.

let projectsArray = [];

if (!JSON.parse(localStorage.getItem('projectsArray'))) {
    projectsArray = [];    
} else {
    projectsArray = JSON.parse(localStorage.getItem('projectsArray'));
}
// loading all the project from array on page load.
renderProjectsArray();

function renderProjectsArray(){
    projectsNavBtns.innerHTML = `<button class="projectBtn allTodoNotesFromAllProjects"> All Notes </button>
                                 <button class="projectBtn Default"> Default project </button>`    
    projectName.innerHTML = `<option value="Default" id="DefaultProjectOption">Default</option>
                             <option value="newProject">New Project...</option>`
    projectsArray.forEach((project) => {
    const newProjectOption = document.createElement('option');
        newProjectOption.textContent = project;
        newProjectOption.setAttribute ('value', project)
        projectName.insertBefore(newProjectOption, projectName.children[0]);
        projectName.value = newProjectOption.value;

        const projectNavBtn = document.createElement('button');
        projectNavBtn.textContent = `${project}`
        projectNavBtn.classList.add('projectBtn', `${project}`);

        const delBtnForProject = document.createElement('button');
        delBtnForProject.textContent = 'X';
        projectNavBtn.appendChild(delBtnForProject);

        projectsNavBtns.appendChild(projectNavBtn);
        delBtnForProject.onclick =()=>{
            projectsNavBtns.removeChild(projectNavBtn);
            projectsArray.splice(projectsArray.indexOf(project), 1);
            localStorage.setItem('projectsArray', JSON.stringify(projectsArray));
            renderProjectsArray();

            //// i want to delete all notes on project if i delete the project btn on nav bar.

            // const todoDiv = document.querySelectorAll('.todoDiv');
            // todoDiv.forEach(todo => {
            //     console.log(todo.classList.contains(project));
            //     if (todo.classList.contains(project)){
            //         document.querySelector('.ProjectTodoNotes').removeChild(todo);
            //     }
            // })
            renderProjectsArray();
        }

        render();

})
}


// addding new project. i can just push the new project to the array and the render the function above. ^
projectName.addEventListener('change', (e) => { 
    if (e.target.value == 'newProject') {
        const newProjectName = prompt('enter project name: ');

        //add validate name, push to array, save array local storage? change prompt to Dom element.

        projectsArray.push(newProjectName);
        localStorage.setItem('projectsArray', JSON.stringify(projectsArray)); // send to local storage after change.

        renderProjectsArray();
    }});



// i will need to make an object constructor/class/factory function for making the nav project btns append to an array?
// or maybe just an array of somesort.
// i'll also need to make an array on the options manu in the form for the projects.


