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
