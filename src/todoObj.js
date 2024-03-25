export default class Todo {
    constructor (title, description, dueDate, priority, project, checkBoxInputValue, checkBoxCheckedArray) {
        this.title = title,
        this.description = description,
        this.dueDate = dueDate,
        this.priority = priority,
        this.project = project,
        this.checkBoxInputValue = [],
        this.checkBoxCheckedArray = [];
    }
    static allTodosNotes = [];

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
        Todo.allTodosNotes.push({title:this.title, description:this.description, dueDate:this.dueDate, priority:this.priority, project:this.project, checkBoxInputValue:this.checkBoxInputValue, checkBoxCheckedArray:this.checkBoxCheckedArray});
    }

    static deleteFromTodoNotes() {
        Todo.allTodosNotes = Todo.allTodosNotes.filter((item) => this.title !== item.title && this.description !== item.description);
    }
}


