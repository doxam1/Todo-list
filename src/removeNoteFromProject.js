export { removeNoteFromProject };
import Todo from "./todoObj";
import { onloadRendering } from ".";

function removeNoteFromProject (note, title, description, project) {
    // console.log({note, note, description, title, project}) // how does it work with title, description, project being undefined? when i send only note (div of todo) ?!?!
    document.querySelector('.ProjectTodoNotes').removeChild(note);

    const toBeDeletedIndex = Todo.allTodosNotes.findIndex(x => x.title == title && x.description == description && x.project == project); // i'm finding the index only from title and description, might be too risky for duplication of notes.

    Todo.allTodosNotes.splice(toBeDeletedIndex, 1);
    localStorage.setItem('AllTodoNotes', JSON.stringify(Todo.allTodosNotes));
    onloadRendering();
}