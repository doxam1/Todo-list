const projectName = document.getElementById('projectName');

export default function AddToProject(NewTodo) {
    const newTodoDiv = document.createElement('div');   
    newTodoDiv.classList.add('todoDiv', `${projectName.value}`);
    newTodoDiv.innerHTML += NewTodo;
    document.querySelector('.ProjectTodoNotes').appendChild(newTodoDiv); 
}

// can i push the form thru an innerHtml? will i be able to edit it? delete it? play with it? 

// i need to build basic todo note tamplate and inject to it the new todo note every time. using variables.