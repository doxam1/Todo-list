const NewProjectTitle = document.getElementById('title');
const NewProjectDescription = document.getElementById('description');
const NewProjectDueDate = document.querySelector('#date');
const addNewProjectBtn = document.querySelector('.addNewProjectBtn');
export { validateForm };

function validateForm() {
    if (NewProjectTitle.value == '') {
        alert ('please enter title')
        return false;
    } else if (NewProjectDescription.value == '') {
        alert('please enter description');
        return false;
    } 
    else {
        return true;
    }
}


