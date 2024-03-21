export { removeNoteFromProject };
import Todo from "./todoObj";
import { onloadRendering } from ".";

function removeNoteFromProject (note, title, description, project) {
    
   while (note.parentElement == document.querySelector('.ProjectTodoNotes')) {
    document.querySelector('.ProjectTodoNotes').removeChild(note)
   };

    const toBeDeletedIndex = Todo.allTodosNotes.findIndex(x => x.title == title && x.description == description && x.project == project); // i'm finding the index only from title and description, might be too risky for duplication of notes.

    Todo.allTodosNotes.splice(toBeDeletedIndex, 1);
    localStorage.setItem('AllTodoNotes', JSON.stringify(Todo.allTodosNotes));
    onloadRendering();
}