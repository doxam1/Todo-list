const NewProjectTitle = document.getElementById('title');
const NewProjectDescription = document.getElementById('description');
const NewProjectDueDate = document.querySelector('#date');
const addNewProjectBtn = document.querySelector('.addNewProjectBtn');
const errorMsg = document.querySelector('.errorMsg');
export { validateForm };

function validateForm() {
    errorMsg.style.color = 'red';
    errorMsg.style.textAlign = 'center';
    if (NewProjectTitle.value == '') {
        errorMsg.textContent = '-- please enter title --';
        setTimeout(() => {
            errorMsg.textContent = '';            
        }, 1000);
        return false;
    } else if (NewProjectDescription.value == '') {
        errorMsg.textContent = '-- please enter description --';
        setTimeout(() => {
            errorMsg.textContent = '';            
        }, 1000);
        return false;
    } 
    else {
        return true;
    }
}


