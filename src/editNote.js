import { removeNoteFromProject } from './removeNoteFromProject.js';
import Todo from './todoObj';
import { onloadRendering } from './index.js'

export default function editNote(title, description, dueDate, priority, project, newTodoDiv, checkBoxInputValue, checkBoxCheckedArray, index) {
    document.querySelector('.editDialog').showModal();

    const editTitle = document.querySelector('#editTitle');
    editTitle.value = title;

    const editDescription = document.querySelector('#editDescription');
    editDescription.value = description;

    const editDate = document.querySelector('#editDate');
    editDate.value = dueDate;

    const editPriority = document.querySelectorAll('#editTodoNoteForm input[type="radio"]');
    editPriority.forEach(option => {
        if (option.value == priority)
        option.checked = true;
    })
    
    
    const cancelEditBtn = document.querySelector('.cancelEditBtn');
    cancelEditBtn.onclick = (e) => {
        e.preventDefault();
        document.querySelector('.editDialog').close();
    }
    
    const editProjectBtn = document.querySelector('.editProjectBtn');
    editProjectBtn.onclick = (e) => {
        e.preventDefault();
        // removeNoteFromProject(newTodoDiv, title, description, project); // no need becuase i'm editing the index of Todo.allTodoNotes itself and then rendering.

        const editPriorityChecked = document.querySelector('#editTodoNoteForm input[type="radio"]:checked').value;

        new Todo(editTitle.value, editDescription.value, editDate.value, editPriorityChecked, project, checkBoxInputValue, checkBoxCheckedArray).editNoteOnTodoNote(index);
        localStorage.setItem('AllTodoNotes', JSON.stringify(Todo.allTodosNotes));
        onloadRendering();

        if (!(document.querySelector('.allTodoNotesFromAllProjects').style.backgroundColor == 'white')) document.querySelector(`.${project}`).click();

        document.querySelector('.editDialog').close();
        
    }
}