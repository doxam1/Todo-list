const projectName = document.getElementById('projectName');
const projectsNavBtns = document.querySelector('.projectsNavBtns');

import {render} from './index'


// might do a factory function - will check for a valid name with set function, and retrun the array.

let projectsArray = [];

if (!JSON.parse(localStorage.getItem('projectsArray'))) {
    projectsArray = [];    
} else {
    projectsArray = JSON.parse(localStorage.getItem('projectsArray'));
}
// console.log()

// () => {if (JSON.parse(localStorage.getItem('projectsArray'))) {
//     return projectsArray = JSON.parse(localStorage.getItem('projectsArray'));
// } else return projectsArray = [];
// }; 
//will load from local Storage.

// loading all the project from array on page load.
projectsArray.forEach((project) => {
    const newProjectOption = document.createElement('option');
        newProjectOption.textContent = project;
        newProjectOption.setAttribute ('value', project)
        projectName.insertBefore(newProjectOption, projectName.children[0]);
        projectName.value = newProjectOption.value;

        const projectNavBtn = document.createElement('button');
        projectNavBtn.textContent = `${project}`
        projectNavBtn.classList.add('projectBtn', `${project}`);
        projectsNavBtns.appendChild(projectNavBtn);

        document.getElementById('DefaultProjectOption').selected = true; // for default to be selected on page load.

        render();

})


// addding new project. i can just push the new project to the array and the render the function above. ^
projectName.addEventListener('change', (e) => { 
    if (e.target.value == 'newProject') {
        const newProjectName = prompt('enter project name: ');

        //add validate name, push to array, save array local storage? change prompt to Dom element.

        projectsArray.push(newProjectName);
        localStorage.setItem('projectsArray', JSON.stringify(projectsArray)); // send to local storage after change.

        console.log(projectsArray);

        const newProjectOption = document.createElement('option');
        newProjectOption.textContent = newProjectName;
        newProjectOption.setAttribute ('value', newProjectName)
        projectName.insertBefore(newProjectOption, projectName.children[0]);
        projectName.value = newProjectOption.value;

        const projectNavBtn = document.createElement('button');
        projectNavBtn.textContent = `${newProjectName}`
        projectNavBtn.classList.add('projectBtn', `${newProjectName}`);
        projectsNavBtns.appendChild(projectNavBtn);
        render();
        
    }
})


// i will need to make an object constructor/class/factory function for making the nav project btns append to an array?
// or maybe just an array of somesort.
// i'll also need to make an array on the options manu in the form for the projects.


