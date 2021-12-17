let inputElement = document.getElementById("inputText");
let inputDate = document.getElementById("inputDate");
let formElement = document.querySelector("form");
let listElement = document.getElementById("listElement");
let totalTasksElement = document.querySelector("#total-tasks");

let tasklist = [];



//Add Item function
function addTask(todoList) {
  if (inputElement.value, inputDate.value) {
    tasklist.push(inputElement.value + " " + " " + " " + inputDate.value);
    
    renderList();
    console.log(tasklist, inputDate.value) 
  } 
}
/* else if (inputDate.value == date.getFullYear(), date.getMonth() + 1, 0, date.getDate()){
  dayContainer.style.color = 'red';
   }  */
   
function connectToCalendar(inputDate) {
  const date = new Date;
  if (date.getFullYear() === new Date().getFullYear() &&
  date.getMonth() === new Date().getMonth()+ 1,0) {
    /* date.getDate() === i) */ 
    /* dayContainer.style.backgroundColor = '#7978a0';
    dayContainer.style.borderRadius = '0.5rem';
    dayContainer.style.color = 'white'; */
    console.log(date.getFullYear(), new Date().getFullYear(), date.getMonth(), new Date().getMonth()+1,0);
  } 
}
connectToCalendar(inputDate)
// Datum = redigerbart. 
// om todons datum matchar datum i kalendern ska dagen markeras. 

//Connect todo to calendar


function editItem(event, text, item, deleteElement, editElement) {
  let editInput = document.createElement("input");
  editInput.value = item;
  text.innerHTML = "";
  text.appendChild(editInput);
  //inputDate.value = item;
  
  deleteElement.innerHTML = '<i class="fas fa-times"></i>';
  let saveEditIcon = document.createElement("i");
  saveEditIcon.innerHTML = '<i id="saveEdit" class="fas fa-check"></i>';
  editElement.innerHTML = "";
  editElement.appendChild(saveEditIcon);
  console.log(item)
  
  // Om editElement klickas ska editInput.value ska sparas och visas som inneHTML för text.
  editElement.onclick = (event) =>
  saveEdit(event, text, item, saveEditIcon, editInput, deleteElement, editElement);
}
function saveEdit(event, text, item, saveEditIcon, editInput, deleteElement, editElement) {
  index = 0;
  if (index === tasklist.indexOf(item)){
    tasklist.push(editInput.value)
    tasklist.splice(index, 1);
  }
  console.log(item)
  
  renderList();
}

//Delete Item function
function deleteItem(event) {
  let item = event.target.parentElement.previousElementSibling.innerHTML;
  console.log(item);
  let index = tasklist.indexOf(item);
  if (index !== -1) {
    tasklist.splice(index, 1);
  }
  renderList();
  console.log(item)
}

function renderList() {
  listElement.innerHTML = "";
  tasklist.forEach(function (item) {
    let todoList = document.getElementsByName('todoList');
    // let todoList = document.createElement("li");
    console.log(todoList)
    
    // Add a new text (inputElement + inputDate)
   /*  let text = document.createElement("p"); */
   let text = document.getElementById('text')
    // text.innerHTML = item;
    todoList.innerHTML=text;
    let date = document.getElementById('date');
    //date.appendChild(inputDate.value);
    
    
    //Add delete button
    //let deleteElement = document.createElement("i");
    let deleteElement = document.getElementById('trashIcon')
    deleteElement.classList.add("delete");
    // deleteElement.innerHTML = '<i class="fas fa-trash"></i>';
    todoList.appendChild(deleteElement);
    deleteElement.addEventListener("click", (event) => deleteItem(event));
    
    // Add edit button
    let editElement = document.getElementbyID("editIcon");
    // editElement.classList.add("edit");
    // editElement.innerHTML = '<i id="editIcon" class="fas fa-edit"></i>';
    todoList.appendChild(editElement);
    editElement.onclick = ((event) =>
    editItem(event, text, item, deleteElement, editElement)
    );
    // showTodoDate(item, text);
    console.log(todoList.firstElementChild)
    
    // add li to ul
    listElement.appendChild(todoList);
  });

  
  /**
   * Updates header with amount of todos.
   */
  totalTasksElement.innerHTML = tasklist.length;
}
renderList();

formElement.addEventListener("submit", function (event) {
  event.preventDefault();
  addTask();
});
