window.addEventListener('load', main);
let todos = ['Julpynta', 'Slå in julklappar', 'Klä gran'];


function main() {
  renderTodos();
  const form = document.querySelector('form');
  form.addEventListener('submit', addTodo);
}

function addTodo(event) {
  event.preventDefault();
  const form = event.target;
  const input = form.querySelector('input');
  if (input.value) {
    todos.push(input.value);
    input.value = "";
    renderTodos();
  }
}

function renderTodos() {
  const ul = document.querySelector('ul');
  // Remove previous content
  ul.innerHTML = "";
  // Re-add todos to ul
  for (const todo of todos) {
    const li = createTodoElement(todo);
    ul.appendChild(li);
  }
}

function createTodoElement(todo) {
  const li = document.createElement('li');
  li.innerHTML = todo;
  li.id = todo;
  li.addEventListener('click', removeTodo);
  return li;
}

function removeTodo(event) {
  const todoToDelete = event.target.id;

  const updatedTodoList = [];
  for (const todo of todos) {
    if (todo !== todoToDelete) {
      updatedTodoList.push(todo);
    }
  }
  todos = updatedTodoList;
  renderTodos();
}