let inputElement = document.querySelector("input");
let formElement = document.querySelector("form");
let listElement = document.querySelector("ul");
let totalTasksElement = document.querySelector("#total-tasks");

let tasklist = [];
console.log(tasklist);

//Add Item function
function addTask(dateContainer) {
  if (inputElement.value) {
    tasklist.push(inputElement.value);
    renderList();
    console.log(tasklist)
    
  }
}

let inputDate = document.getElementById("inputDate");
function showTodoDate(item, todoContainer, dateContainer, newItem) {
   /*  if (inputDate.value) {
    tasklist.push(inputDate.value);
  }  */
  /* if (inputDate.value) {
    tasklist.push(inputDate.value);
    //renderList();
    dateContainer.appendChild(inputDate)
  } */
  
  dateContainer.innerHTML = inputDate.value;
  newItem.appendChild(dateContainer);
  console.log(dateContainer)
}
//editInput sparas och blir unikt - dess värde är item. 
function editItem(event, todoContainer, item, deleteElement, editElement, dateContainer) {
  let editInput = document.createElement("input");
  editInput.value = item;
  todoContainer.innerHTML = "";
  todoContainer.appendChild(editInput);
  console.log(item);
  
  let editDate = document.createElement("input");
  editDate.setAttribute("type", "date");
  editDate.value = inputDate.value; //Hur få datum att vara inte vara samma, samt hur ändra datum. 
  dateContainer.innerHTML = "";
  dateContainer.appendChild(editDate);

  deleteElement.innerHTML = '<i class="fas fa-times"></i>';
  let saveEditIcon = document.createElement("i");
  saveEditIcon.innerHTML = '<i id="saveEdit" class="fas fa-check"></i>';
  editElement.innerHTML = "";
  editElement.appendChild(saveEditIcon);
  // Om editElement klickas ska editInput.value ska sparas och visas som inneHTML för todoContainer.
  editElement.onclick = (event) =>
    saveEdit(event, todoContainer, item, saveEditIcon, editInput, deleteElement, editElement, dateContainer, editDate);
}

function saveEdit(event, todoContainer, item, saveEditIcon, editInput, deleteElement, editElement, dateContainer, editDate){
  let index = tasklist.indexOf(item);
   if (index === tasklist.indexOf(item)){
     tasklist.push(editInput.value) // då ändras och skrivs det ut som en ny todo. Datumet. 
     tasklist.splice(index, 1);
   }

  renderList();
}

//Delete Item function
function deleteItem(event) {
  let itemitem = event.target.parentElement.previousElementSibling.innerHTML;
  let index = tasklist.indexOf(itemitem);
  if (index !== -1) {
    tasklist.splice(index, 1);
  }
  renderList();
  console.log(itemitem)
}

function renderList() {
  //let datedate = event.target.parentElement.previousElementSibling.innerHTML;

  listElement.innerHTML = "";
  tasklist.forEach(function (item) {
    let newItem = document.createElement("li");
    //Add a new todoContainer
    let todoContainer = document.createElement("p");
    let dateContainer = document.createElement('p')
    dateContainer.innerHTML = "";
    todoContainer.innerHTML = item;
    newItem.appendChild(todoContainer, dateContainer);
    console.log(item, newItem)
  
    //Add date in calendar
    //document.getElementById = 'date-container';
    
   


    //Add delete button
    let deleteElement = document.createElement("i");
    deleteElement.classList.add("delete");
    deleteElement.innerHTML = '<i class="fas fa-trash"></i>';
    newItem.appendChild(deleteElement);
    deleteElement.addEventListener("click", (event) => deleteItem(event));

    // Add edit button
    let editElement = document.createElement("i");
    editElement.classList.add("edit");
    editElement.innerHTML = '<i id="editIcon" class="fas fa-edit"></i>';
    newItem.appendChild(editElement);
    editElement.onclick = ((event) =>
      editItem(event, todoContainer, item, deleteElement, editElement, dateContainer)
    );
    showTodoDate(item, todoContainer, dateContainer, newItem);

    // add li to ul
    listElement.appendChild(newItem);
  });
  totalTasksElement.innerHTML = tasklist.length;
  inputElement.value = "";
}
renderList();

formElement.addEventListener("submit", function (event) {
  event.preventDefault();
  addTask();
});