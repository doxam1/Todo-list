const projectName = document.getElementById('projectName');
const projectsNavBtns = document.querySelector('.projectsNavBtns');

import {render} from './index'

projectName.addEventListener('change', (e) => { 
    if (e.target.value == 'newProject') {
        const newProjectName = prompt('enter project name: ');
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


