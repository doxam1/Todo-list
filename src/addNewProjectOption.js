const projectName = document.getElementById('project');
projectName.addEventListener('change', (e) => { 
    if (e.target.value == 'newProject') {
        const newProjectName = prompt('enter project name: ');
        const newProjectOption = document.createElement('option');
        newProjectOption.textContent = newProjectName;
        newProjectOption.setAttribute ('value', newProjectName)
        projectName.appendChild(newProjectOption);
        projectName.value = newProjectOption.value;
    }
})
