// window.addEventListener('load', main);
// let todos = ['Julpynta', 'Slå in julklappar', 'Klä gran'];


// function main() {
//   renderTodos();
//   const form = document.querySelector('form');
//   form.addEventListener('addBtn', addTodo);
// }

// function addTodo(event) {
  
//   event.preventDefault();
//   const form = event.target;
//   const input = form.querySelector('input');
//   if (input.value) {
//     todos.push(input.value);
//     input.value = "" ;//+ editIcon + deleteIcon
//     renderTodos();
//   }
// }

// const editIcon = document.getElementById('edit-icon');
// const deleteIcon = document.getElementById('delete-icon');

// function renderTodos() {
//   const ul = document.querySelector('ul');
//   // Remove previous content
//   ul.innerHTML = ""; //+ editIcon + deleteIcon;
//   // Re-add todos to ul
//   for (const todo of todos) {
//     const li = createTodoElement(todo,);
//     ul.appendChild(li);
//   }
// }


// function createTodoElement(todo) {
//   const li = document.createElement('li');
//   li.innerHTML = todo;
//   li.id = todo;
//   //li.append(editIcon, deleteIcon);
//   li.addEventListener('click', removeTodo);
//   return li;
// }

// function removeTodo(event) {
//   const todoToDelete = event.target.id;

//   const updatedTodoList = [];
//   for (const todo of todos) {
//     if (todo !== todoToDelete) {
//       updatedTodoList.push(todo);
//     }
//   }
//   todos = updatedTodoList;
//   renderTodos();
// }


let inputElement = document.querySelector('input');
let formElement = document.querySelector('form');
let listElement = document.querySelector('ul');
let totalTasksElement = document.querySelector('#total-tasks');

let tasklist = [
  'klä julgran',
  'julpynta'
];

function deleteItem(e) {
  let task= e.target.parentElement.previousElementSibling.innerHTML;
  let index = tasklist.indexOf(task);
  if(index !== -1){
    tasklist.splice(index, 1);
  }
 renderList();
}

function renderList() {
  listElement.innerHTML='';
  tasklist.forEach(function(item) {
    let newItem = document.createElement('li');
    //Add a new span
    let span = document.createElement('span');
    span.innerHTML = item;
    newItem.appendChild(span);

    //Add delete button
    let deleteElement = document.createElement('a');
    deleteElement.classList.add('delete');
    deleteElement.innerHTML = '<i class="fas fa-trash"></i>';
    newItem.appendChild(deleteElement);

    deleteElement.addEventListener('click', (e) => deleteItem(e));


    // add li to ul
    listElement.appendChild(newItem);
  });
  totalTasksElement.innerHTML = tasklist.length;
  inputElement.value='';
}
renderList();


function addTask () {
  if (inputElement.value) {
    tasklist.push(inputElement.value);
    renderList();
  }
}

formElement.addEventListener('submit', function(e) {
  e.preventDefault();
addTask();

});



