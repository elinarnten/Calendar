let inputElement = document.querySelector('input');
let formElement = document.querySelector('form');
let listElement = document.querySelector('ul');
let totalTasksElement = document.querySelector('#total-tasks');

let tasklist = [
  'klä julgran',
  'julpynta'
];


//Add Item function
function addTask () {
  if (inputElement.value) {
    tasklist.push(inputElement.value);
    renderList();
  }
}


//Edit Item function
function editItem(event) {
let item = event.target.innerHTML;
let itemInput = document.createElement('input');
itemInput.type ='text';
itemInput.value = item;
itemInput.classList.add('edit');
itemInput.addEventListener('keypress', saveItem);
itemInput.addEventListener('click', saveItem);
event.target.parentNode.prepend(itemInput);
event.target.remove();
itemInput.select();
  
}

function saveItem(event) {
  let inputValue = event.target.value;
  if (event.target.value.length > 0 && (event.keyCode ===13 || event.type === 'click')) {
    let li = document.createElement('li');
    li.addEventListener('click', toggleDone);
    li.addEventListener('dblclick', editItem);
    li.textContent = event.target.value;
    event.target.parentNode.prepend('li');
    event.target.remove();
  }
}

//Delete Item function
function deleteItem(event) {
  let item= event.target.parentElement.previousElementSibling.innerHTML;
  let index = tasklist.indexOf(item);
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
    deleteElement.addEventListener('click', (event) => deleteItem(event));

    //Add edit button
    //let editElement = document.createElement('a');
    //editElement.classList.add('edit');
    //editElement.innerHTML = '<i class="fas fa-edit"></i>';
    //newItem.appendChild(editElement);

    
    
    // Add edit button
    let editElement = document.createElement('i');
    editElement.classList.add('edit');
    editElement.innerHTML = '<i class="fas fa-edit"></i>';
    newItem.appendChild(editElement);
    editElement.addEventListener('click', (event) => editItem(event));




    // add li to ul
    listElement.appendChild(newItem);
  });
  totalTasksElement.innerHTML = tasklist.length;
  inputElement.value='';
}
renderList();





formElement.addEventListener('submit', function(event) {
  event.preventDefault();
addTask();

});



