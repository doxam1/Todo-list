import { removeNoteFromProject } from "./removeNoteFromProject";

export default function AddToProject(NewTodo) {
    if (document.querySelector('.ProjectTodoNotes').innerHTML == '<h1 class="nothingToDoH1"> nothing To Do... </h1>') {
        document.querySelector('.ProjectTodoNotes').innerHTML = '';
    }
    const newTodoDiv = document.createElement('div');   
    newTodoDiv.classList.add('todoDiv', `${NewTodo.project}`);

    const title = document.createElement('h1');
    title.textContent = NewTodo.title;

    const description = document.createElement('p');
    description.textContent = NewTodo.description;

    const dueDate = document.createElement('div');
    dueDate.textContent = 'Due Date: ' + NewTodo.dueDate.split('T');

    const priority = document.createElement('div');
    priority.textContent = 'Priority: ' + NewTodo.priority;

    const projectNameDiv = document.createElement('div');
    projectNameDiv.textContent = 'Project Name: ' + NewTodo.project;

    const delNoteBtn = document.createElement('button');
    delNoteBtn.classList.add('delNoteBtn');
    delNoteBtn.textContent = 'X'

    newTodoDiv.append(delNoteBtn, title, description, dueDate, priority, projectNameDiv);

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
    document.querySelector('.ProjectTodoNotes').appendChild(newTodoDiv);

    (function () {
        const ProjectTodoNotes = document.querySelector('.ProjectTodoNotes');        
        ProjectTodoNotes.style.background = 'white';
    })();

    // to change to using the object instead
}


//add some styling to clicked projectBtn when it's clicked.

// i need to build basic todo note tamplate and inject to it the new todo note every time. using variables.