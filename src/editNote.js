import { removeNoteFromProject } from './removeNoteFromProject.js';
import Todo from './todoObj';
import { onloadRendering } from './index.js'

export default function editNote(title, description, dueDate, priority, project, newTodoDiv) {
    document.querySelector('.editDialog').showModal();

    const editTitle = document.querySelector('#editTitle');
    editTitle.value = title;

    const editDescription = document.querySelector('#editDescription');
    editDescription.value = description;

    const editDate = document.querySelector('#editDate');
    editDate.value = dueDate;

    const editPriority = document.querySelectorAll('#editTodoNote input[type="radio"]');
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
        removeNoteFromProject(newTodoDiv, title, description, project);

        const editPriorityChecked = document.querySelector('#editTodoNoteForm input[type="radio"]:checked').value;

        new Todo(editTitle.value, editDescription.value, editDate.value, editPriorityChecked, project).pushToTodoNotes();
        localStorage.setItem('AllTodoNotes', JSON.stringify(Todo.allTodosNotes));
        onloadRendering();

        if (!(document.querySelector('.allTodoNotesFromAllProjects').style.backgroundColor == 'white')) document.querySelector(`.${project}`).click();

        document.querySelector('.editDialog').close();
        
    }
    
}

/* <dialog class="editDialog">
                <form id="editTodoNote">
                    <fieldset>
                        <legend> <h2> Add New Note </h2></legend>
                        <div class="input">
                            <label for="editTitle"> Title </label>
                            <input type="text" id="editTitle" required>
                        </div>
                        <div class="input">
                            <label for="editDescription"> Enter assignment description: </label>
                            <textarea  id="editDescription" name="description" rows="8" cols="28"></textarea>
                        </div>
                        <div class="input">
                            <label for="editDate"> due date: </label>
                            <input type="datetime-local" id="editDate" required>
                        </div>
                        <div class="input">
                            <legend> how important is it? </legend>
                            <label for="editSuper"> Super </label>
                            <input type="radio" name="priority" id="editSuper" value="Super important" />
                            <label for="editNormal"> Normal </label>
                            <input type="radio" name="priority" id="editNormal" value="Normal" checked />
                            <label for="EditNoHurry"> No hurry </label>
                            <input type="radio" name="priority" id="EditNoHurry" value="No hurry" />
                        </div>
                        <button type="submit" class="editProjectBtn"> Ok </button>
                        <div class="errorMsg"></div>
                    </fieldset>            
                </form>

            </dialog> */