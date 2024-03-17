export default class Todo {
    constructor (title, description, dueDate, priority, project) {
        this.title = title,
        this.description = description,
        this.dueDate = dueDate,
        this.priority = priority,
        this.project = project
    }
    static allTodosNotes = new Array();

    get allTodosNotes() {
        return this.allTodosNotes;
    }
    
    pushToTodoNotes() {        
        Todo.allTodosNotes.push({title:this.title, description:this.description, dueDate:this.dueDate, priority:this.priority, project:this.project});
    }

    deleteFromTodoNotes() {
        Todo.allTodosNotes = Todo.allTodosNotes.filter((item) => this.title !== item.title && this.description !== item.description);
    }
}


