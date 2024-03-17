export { removeNoteFromProject };

function removeNoteFromProject (note) {
    document.querySelector('.ProjectTodoNotes').removeChild(note);
}