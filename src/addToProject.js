import { removeNoteFromProject } from './removeNoteFromProject';
import editNote from './editNote';
import Todo from './todoObj';

export default function AddToProject (NewTodo) {
  if (document.querySelector('.ProjectTodoNotes').innerHTML == '<h1 class="nothingToDoH1"> nothing To Do... </h1>') {
    document.querySelector('.ProjectTodoNotes').innerHTML = '';
  }
  const newTodoDiv = document.createElement('div');
  newTodoDiv.classList.add('todoDiv', `${NewTodo.project.split(' ').join('_')}`);

  const title = document.createElement('h1');
  title.classList.add('noteTitle');
  title.textContent = NewTodo.title;

  const description = document.createElement('p');
  description.classList.add('noteDescription');
  description.textContent = NewTodo.description;

  const dueDate = document.createElement('div');
  dueDate.textContent = 'Due Date: ' + NewTodo.dueDate;

  const priority = document.createElement('div');
  priority.textContent = 'Priority: ' + NewTodo.priority;

  const projectNameDiv = document.createElement('div');
  projectNameDiv.classList.add('noteProjectName');
  projectNameDiv.textContent = 'Project Name: ' + NewTodo.project;

  const delNoteBtn = document.createElement('button');
  delNoteBtn.className = 'delNoteBtn btn btn-primary';
  delNoteBtn.textContent = 'Delete Note';

  const editNoteBtn = document.createElement('button');
  editNoteBtn.className = 'editNoteBtn btn btn-primary';
  editNoteBtn.textContent = 'Edit Note';

  const addCheckboxbtn = document.createElement('button');
  addCheckboxbtn.className = 'addCheckboxbtn btn btn-primary';
  addCheckboxbtn.textContent = 'add CheckBox';

  const checkBoxDivBox = document.createElement('div');
  checkBoxDivBox.classList.add('checkBoxDivBox');

  newTodoDiv.append(editNoteBtn, delNoteBtn, title, description, dueDate, priority, projectNameDiv, checkBoxDivBox, addCheckboxbtn);

  if (NewTodo.checkBoxInputValue.length > 0) {
    NewTodo.checkBoxInputValue.forEach(function (checkBox, i) {
      const checkBoxDiv = document.createElement('div');

      const checkBoxInput = document.createElement('input');
      checkBoxInput.setAttribute('type', 'checkbox');

      const checkBoxInputText = document.createElement('input');
      checkBoxInputText.value = checkBox;
      let checkBoxInputTextOld = checkBoxInputText.value;
      checkBoxInputText.setAttribute('type', 'text');

      Todo.allCheckBoxes = JSON.parse(localStorage.getItem('allCheckBoxes')); // move it to onstartREndering on index.js

      /// //////////////////////////////////////
      if (NewTodo.checkBoxCheckedArray[i] == 'checked') {
        checkBoxInput.click();
        checkBoxInput.classList.add('checked');
        checkBoxInputText.setAttribute('disabled', 'true');
      }

      const delCheckBox = document.createElement('button');
      delCheckBox.textContent = 'x';

      checkBoxDiv.append(checkBoxInput, checkBoxInputText, delCheckBox);

      checkBoxDivBox.appendChild(checkBoxDiv);

      delCheckBox.onclick = (e) => {
        // delete from object:
        NewTodo.checkBoxInputValue.splice(NewTodo.checkBoxInputValue.indexOf(e.target.previousSibling.value), 1);
        Todo.deleteFromTodoNotes(NewTodo);
        localStorage.setItem('AllTodoNotes', JSON.stringify(Todo.allTodosNotes));

        // delete from DOM:
        e.target.parentNode.remove();
      };

      checkBoxInputText.onkeyup = (e) => {
        Todo.deleteFromTodoNotes(NewTodo);
        NewTodo.checkBoxInputValue[NewTodo.checkBoxInputValue.indexOf(checkBoxInputTextOld)] = e.target.value;
        checkBoxInputTextOld = e.target.value;
        new Todo(NewTodo);
        localStorage.setItem('AllTodoNotes', JSON.stringify(Todo.allTodosNotes));
      };

      checkBoxInput.addEventListener('change', (e) => {
        if (checkBoxInput.classList.contains('checked')) {
          checkBoxInput.classList.remove('checked');
          checkBoxInputText.removeAttribute('disabled', 'true');
          Todo.deleteFromTodoNotes(NewTodo);
          NewTodo.checkBoxCheckedArray[Array.from(e.target.parentElement.parentElement.children).indexOf(e.target.parentNode)] = e.target.classList.value;
          new Todo(NewTodo);
          localStorage.setItem('AllTodoNotes', JSON.stringify(Todo.allTodosNotes));
        } else {
          checkBoxInput.classList.add('checked');
          checkBoxInput.nextSibling.setAttribute('disabled', 'true');
          Todo.deleteFromTodoNotes(NewTodo);
          NewTodo.checkBoxCheckedArray[Array.from(e.target.parentElement.parentElement.children).indexOf(e.target.parentNode)] = e.target.classList.value;
          new Todo(NewTodo);
          localStorage.setItem('AllTodoNotes', JSON.stringify(Todo.allTodosNotes));
        }
      });
    });
  }

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
        // default:
        //    break;
  }
  newTodoDiv.style.boxShadow = `1px 1px 4px 1px ${divBorderColorFromPriority}`;

  delNoteBtn.onclick = () => {
    removeNoteFromProject(newTodoDiv, title.textContent, description.textContent, NewTodo.project);
  };

  editNoteBtn.onclick = () => {
    editNote(title.textContent, description.textContent, NewTodo.dueDate, NewTodo.priority, NewTodo.project, newTodoDiv, NewTodo.checkBoxInputValue, NewTodo.checkBoxCheckedArray, Todo.allTodosNotes.indexOf(NewTodo));
  };

  addCheckboxbtn.onclick = () => {
    const checkBoxDiv = document.createElement('div');

    const checkBoxInput = document.createElement('input');
    checkBoxInput.setAttribute('type', 'checkbox');

    const checkBoxInputText = document.createElement('input');
    checkBoxInputText.setAttribute('type', 'text');

    const delCheckBox = document.createElement('button');
    delCheckBox.textContent = 'x';

    checkBoxDiv.append(checkBoxInput, checkBoxInputText, delCheckBox);

    checkBoxDivBox.appendChild(checkBoxDiv);

    // newTodoDiv.insertBefore(checkBoxDivBox, addCheckboxbtn);

    checkBoxInputText.onkeyup = (e) => {
      // from blank value to first letter:
      let checkBoxInputTextOld = e.target.value;
      Todo.deleteFromTodoNotes(NewTodo);
      NewTodo.checkBoxInputValue.push(e.target.value);
      checkBoxInputTextOld = e.target.value;
      new Todo(NewTodo);
      localStorage.setItem('AllTodoNotes', JSON.stringify(Todo.allTodosNotes));

      // after first letter change:
      e.target.onkeyup = (e) => {
        Todo.deleteFromTodoNotes(NewTodo);
        NewTodo.checkBoxInputValue[NewTodo.checkBoxInputValue.indexOf(checkBoxInputTextOld)] = e.target.value;
        checkBoxInputTextOld = e.target.value;
        new Todo(NewTodo);
        localStorage.setItem('AllTodoNotes', JSON.stringify(Todo.allTodosNotes));
      };
    };
    delCheckBox.onclick = (e) => {
      // delete from object:
      NewTodo.checkBoxInputValue.splice(NewTodo.checkBoxInputValue.indexOf(e.target.previousSibling.value), 1);
      Todo.deleteFromTodoNotes(NewTodo);
      localStorage.setItem('AllTodoNotes', JSON.stringify(Todo.allTodosNotes));

      // delete from DOM:
      e.target.parentNode.remove();
    };

    checkBoxInput.addEventListener('change', (e) => {
      if (checkBoxInput.classList.contains('checked')) {
        checkBoxInput.classList.remove('checked');
        checkBoxInputText.removeAttribute('disabled', 'true');
        Todo.deleteFromTodoNotes(NewTodo);
        console.log(NewTodo);
        // console.log(Array.from(e.target.parentElement.parentElement.children).indexOf(e.target.parentNode))
        NewTodo.checkBoxCheckedArray[Array.from(e.target.parentElement.parentElement.children).indexOf(e.target.parentNode)] = e.target.classList.value;
        new Todo(NewTodo);
        localStorage.setItem('AllTodoNotes', JSON.stringify(Todo.allTodosNotes));
      } else {
        checkBoxInput.classList.add('checked');
        checkBoxInput.nextSibling.setAttribute('disabled', 'true');
        Todo.deleteFromTodoNotes(NewTodo);
        console.log(NewTodo);
        NewTodo.checkBoxCheckedArray[Array.from(e.target.parentElement.parentElement.children).indexOf(e.target.parentNode)] = e.target.classList.value;
        new Todo(NewTodo);
        localStorage.setItem('AllTodoNotes', JSON.stringify(Todo.allTodosNotes));
      }
    });
  };
  document.querySelector('.ProjectTodoNotes').appendChild(newTodoDiv);

  (function () {
    const ProjectTodoNotes = document.querySelector('.ProjectTodoNotes');
    ProjectTodoNotes.style.background = 'white';
  })();

  // to change to using the object instead
}

// add some styling to clicked projectBtn when it's clicked.

// i need to build basic todo note tamplate and inject to it the new todo note every time. using variables.
