import { removeNoteFromProject } from "./removeNoteFromProject";
import editNote from "./editNote";
import Todo from "./todoObj";

export default function AddToProject(NewTodo) {

    if (document.querySelector('.ProjectTodoNotes').innerHTML == '<h1 class="nothingToDoH1"> nothing To Do... </h1>') {
        document.querySelector('.ProjectTodoNotes').innerHTML = '';
    }
    const newTodoDiv = document.createElement('div');   
    newTodoDiv.classList.add('todoDiv', `${NewTodo.project}`);

    const title = document.createElement('h1');
    title.classList.add('noteTitle');
    title.textContent = NewTodo.title;

    const description = document.createElement('p');
    description.classList.add('noteDescription')
    description.textContent = NewTodo.description;

    const dueDate = document.createElement('div');
    dueDate.textContent = 'Due Date: ' + NewTodo.dueDate;

    const priority = document.createElement('div');
    priority.textContent = 'Priority: ' + NewTodo.priority;

    const projectNameDiv = document.createElement('div');
    projectNameDiv.classList.add('noteProjectName')
    projectNameDiv.textContent = 'Project Name: ' + NewTodo.project;

    const delNoteBtn = document.createElement('button');
    delNoteBtn.className = 'delNoteBtn btn btn-primary';
    delNoteBtn.textContent = 'Delete Note'

    const editNoteBtn = document.createElement('button');
    editNoteBtn.className = 'editNoteBtn btn btn-primary';
    editNoteBtn.textContent = 'Edit Note';

    const addCheckboxbtn = document.createElement('button');
    addCheckboxbtn.className = 'addCheckboxbtn btn btn-primary'
    addCheckboxbtn.textContent = 'add CheckBox'

    newTodoDiv.append(editNoteBtn, delNoteBtn, title, description ,dueDate, priority, projectNameDiv, addCheckboxbtn);

    if (NewTodo.checkBoxInputValue.length > 0) {
        NewTodo.checkBoxInputValue.forEach(checkBox => {

        const checkBoxDiv = document.createElement('div');

        const checkBoxInput = document.createElement('input');
        checkBoxInput.setAttribute('type', 'checkbox');

        const checkBoxInputText = document.createElement('input');
        checkBoxInputText.value = checkBox.split(',')[0];
        let checkBoxInputTextOld = checkBoxInputText.value;
        checkBoxInputText.setAttribute('type', 'text');

        const delCheckBox = document.createElement('button');
        delCheckBox.textContent = 'x'

        checkBoxDiv.append(checkBoxInput, checkBoxInputText, delCheckBox);

        newTodoDiv.insertBefore(checkBoxDiv, addCheckboxbtn);

        delCheckBox.onclick = (e) => {
            // delete from object:
            NewTodo.checkBoxInputValue.splice(NewTodo.checkBoxInputValue.indexOf(e.target.previousSibling.value), 1);
            Todo.deleteFromTodoNotes(NewTodo);
            localStorage.setItem('AllTodoNotes', JSON.stringify(Todo.allTodosNotes));

            //delete from DOM:
            e.target.parentNode.remove();
        }

        checkBoxInputText.onchange = (e) => {
            Todo.deleteFromTodoNotes(NewTodo);
            NewTodo.checkBoxInputValue[NewTodo.checkBoxInputValue.indexOf(checkBoxInputTextOld)] = e.target.value;
            checkBoxInputTextOld = e.target.value;
            new Todo (NewTodo)
            localStorage.setItem('AllTodoNotes', JSON.stringify(Todo.allTodosNotes));
        }

        checkBoxInput.addEventListener('change', () => {
            
            checkBoxInput.checked ? checkBoxInputText.setAttribute('disabled', 'true') : checkBoxInputText.removeAttribute('disabled', 'true') ;                
            });
    })                  
 };
    

    let divBorderColorFromPriority = '';
    switch (NewTodo.priority) {
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
    newTodoDiv.style.boxShadow = `1px 1px 4px 1px ${divBorderColorFromPriority}`;

    delNoteBtn.onclick = () => {
        removeNoteFromProject(newTodoDiv, title.textContent, description.textContent, NewTodo.project);
    }

    editNoteBtn.onclick = () => {
        editNote(title.textContent, description.textContent, NewTodo.dueDate, NewTodo.priority, NewTodo.project, newTodoDiv);
    }

    addCheckboxbtn.onclick = () => {
        const checkBoxDiv = document.createElement('div');

        const checkBoxInput = document.createElement('input');
        checkBoxInput.setAttribute('type', 'checkbox');

        const checkBoxInputText = document.createElement('input');
        checkBoxInputText.setAttribute('type', 'text');

        const delCheckBox = document.createElement('button');
        delCheckBox.textContent = 'x'

        checkBoxDiv.append(checkBoxInput, checkBoxInputText, delCheckBox);

        newTodoDiv.insertBefore(checkBoxDiv, addCheckboxbtn);

        checkBoxInputText.onchange = (e) => {
            // from blank value to first letter:
            let checkBoxInputTextOld = e.target.value;
            Todo.deleteFromTodoNotes(NewTodo);
            NewTodo.checkBoxInputValue.push(e.target.value);
            checkBoxInputTextOld = e.target.value;
            new Todo (NewTodo)
            localStorage.setItem('AllTodoNotes', JSON.stringify(Todo.allTodosNotes));

            // after first letter change:
            e.target.onchange = (e) => {
            Todo.deleteFromTodoNotes(NewTodo);
            NewTodo.checkBoxInputValue[NewTodo.checkBoxInputValue.indexOf(checkBoxInputTextOld)] = e.target.value;
            checkBoxInputTextOld = e.target.value;
            new Todo (NewTodo)
            localStorage.setItem('AllTodoNotes', JSON.stringify(Todo.allTodosNotes));                                                
            }
            
            
        }
        delCheckBox.onclick = (e) => {
            // delete from object:
            NewTodo.checkBoxInputValue.splice(NewTodo.checkBoxInputValue.indexOf(e.target.previousSibling.value), 1);
            Todo.deleteFromTodoNotes(NewTodo);
            localStorage.setItem('AllTodoNotes', JSON.stringify(Todo.allTodosNotes));

            //delete from DOM:
            e.target.parentNode.remove();

        }

        
        checkBoxInput.addEventListener('change', () => {
            checkBoxInput.checked ? checkBoxInputText.setAttribute('disabled', 'true') : checkBoxInputText.removeAttribute('disabled', 'true') ;                
            });

        // add saving for the checkbox added to notes.

    }
    document.querySelector('.ProjectTodoNotes').appendChild(newTodoDiv);

    (function () {
        const ProjectTodoNotes = document.querySelector('.ProjectTodoNotes');        
        ProjectTodoNotes.style.background = 'white';
    })();

    // to change to using the object instead
}


//add some styling to clicked projectBtn when it's clicked.

// i need to build basic todo note tamplate and inject to it the new todo note every time. using variables.