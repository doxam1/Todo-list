import { removeNoteFromProject } from "./removeNoteFromProject";
import editNote from "./editNote";

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
    delNoteBtn.classList.add('delNoteBtn');
    delNoteBtn.textContent = 'Delete Note'

    const editNoteBtn = document.createElement('button');
    editNoteBtn.classList.add('editNoteBtn');
    editNoteBtn.textContent = 'Edit Todo';

    newTodoDiv.append(editNoteBtn, delNoteBtn, title, description, dueDate, priority, projectNameDiv);

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
    document.querySelector('.ProjectTodoNotes').appendChild(newTodoDiv);

    (function () {
        const ProjectTodoNotes = document.querySelector('.ProjectTodoNotes');        
        ProjectTodoNotes.style.background = 'white';
    })();

    // to change to using the object instead
}


//add some styling to clicked projectBtn when it's clicked.

// i need to build basic todo note tamplate and inject to it the new todo note every time. using variables.