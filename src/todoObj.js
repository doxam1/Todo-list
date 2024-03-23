export default class Todo {
    constructor (title, description, dueDate, priority, project, checkBoxInputValue) {
        this.title = title,
        this.description = description,
        this.dueDate = dueDate,
        this.priority = priority,
        this.project = project
        this.checkBoxInputValue = [];
    }
    static allTodosNotes = new Array();

    static allTodosNoteLocalStorage(fromLocalStorage) {
        if (fromLocalStorage) {
            this.allTodosNotes = fromLocalStorage;
        } else {
            this.allTodosNotes = [];
        }
    }


    // get allTodosNotes() {
    //     return this.allTodosNotes;
    // }
    
    pushToTodoNotes() {        
        Todo.allTodosNotes.push({title:this.title, description:this.description, dueDate:this.dueDate, priority:this.priority, project:this.project, checkBoxInputValue:this.checkBoxInputValue});
    }

    static deleteFromTodoNotes() {
        Todo.allTodosNotes = Todo.allTodosNotes.filter((item) => this.title !== item.title && this.description !== item.description);
    }
}


