let inputElement = document.querySelector("input");
let formElement = document.querySelector("form");
let listElement = document.querySelector("ul");
let totalTasksElement = document.querySelector("#total-tasks");
let inputDate = document.getElementById("inputDate");

const tasklist = [];
/* const filteredTasklist = tasklist.filter(dateFilter);

function dateFilter(date) {
  return date === date;
}
console.log(filteredTasklist) 
console.log(task) */

//Add Item function
function addTask() {
  if (inputElement.value) {
    tasklist.push({task: inputElement.value, taskDate: inputDate.value});
    //addTodoToCalendar(tasklist, item);
    renderSelectedMonth();
    //getCalendar(item);
    renderList();
  }
}

/*  function addTodoToCalendar(tasklist) {
   const calenderContainer = document.getElementById('date-container');
   const childList = Array.from(calenderContainer.children);
   tasklist.forEach((item) => {
     childList.forEach((day) => {
       if (day.attributes.length > 0) {
         if (day.attributes[0].textContent === item.taskDate) {
          
          
          /*  date.style.background = 'red'; */
           /* let numberOfItemsPerDay = document.createElement('p');
            day.appendChild(numberOfItemsPerDay);
           numberOfItemsPerDay.innerText = tasklist.length;
            numberOfItemsPerDay.setAttribute('id', 'items-day');  
         } */
         //getCalendar(item);
      /*  }
     });
   });
  }  */
  
 /*  function removeFromCalendar(item) {
    const calenderContainer = document.getElementById('date-container');
    const childList = Array.from(calenderContainer.children);
    childList.forEach((day) => {
      if (day.attributes.length > 0) {
        if (day.attributes[0].textContent === item.taskDate) { //innan togs bakgrundfärg bort. 
          tasklist.splice(0, 1);
        } */
     /*  }  */
      //splice array.filter
  /*   });
  }  */

//editInput sparas och blir unikt - dess värde är item. 
function editItem(todoContainer, item, deleteElement, editElement, dateContainer) {
  let editInput = document.createElement("input");
  editInput.value = item.task;
  todoContainer.innerHTML = "";
  todoContainer.appendChild(editInput);
  
  let editDate = document.createElement("input");
  editDate.setAttribute("type", "date");
  editDate.value = item.taskDate; 
  dateContainer.innerHTML = "";
  dateContainer.appendChild(editDate);

  const undoEditIcon = document.createElement("i");
  undoEditIcon.className = "fas fa-times";
  deleteElement.innerHTML = "";
  deleteElement.appendChild(undoEditIcon);
  deleteElement.onclick = renderList;
  
  const saveEditIcon = document.createElement("i");
  saveEditIcon.className = "fas fa-check";
  saveEditIcon.id = "saveEdit";
  editElement.innerHTML = "";
  editElement.appendChild(saveEditIcon);
  editElement.onclick = () => saveEdit(item, editInput, editDate);
}

function saveEdit(item, editInput, editDate){
  item.task = editInput.value;
  item.taskDate = editDate.value;
  removeFromCalendar(item);
  addTodoToCalendar(tasklist);
  renderList();
}

// const a = 2; // Value Semantic
// const b = "hejsan" // Value Semantic
// const c = { foo: 24 }; // Reference Semantic
// const d = [1,2,3]; // Reference Semantic

// let e = d;
// e.push(4);

//Delete Item function
function deleteItem(item) {
  let itemToDelete = item;
  let index = tasklist.indexOf(itemToDelete);
  if (index !== -1) {
    tasklist.splice(index, 1);
  }
  //removeFromCalendar(item);
  // renderCalendar();
  renderList();
}

function renderList() {
  listElement.innerHTML = "";
  tasklist.forEach(function (item) {
    let newItem = document.createElement("li");
    //Add a new todoContainer
    let todoContainer = document.createElement("p");
    let dateContainer = document.createElement('p')
    dateContainer.innerHTML = item.taskDate;
    todoContainer.innerHTML = item.task;
    newItem.appendChild(todoContainer)
    newItem.appendChild(dateContainer);
    
    //Add delete button
    let deleteElement = document.createElement("i");
    deleteElement.classList.add("delete");
    deleteElement.innerHTML = '<i class="fas fa-trash"></i>';
    newItem.appendChild(deleteElement);
    deleteElement.onclick = () => deleteItem(item); // lägg till ny ikon med nytt klickevent. 

    // Add edit button
    let editElement = document.createElement("i");
    editElement.classList.add("edit");
    editElement.innerHTML = '<i id="editIcon" class="fas fa-edit"></i>';
    newItem.appendChild(editElement);
    editElement.onclick = () => editItem(todoContainer, item, deleteElement, editElement, dateContainer);

    // add li to ul
    listElement.appendChild(newItem);
    //getCalendar(item);
  });
  totalTasksElement.innerHTML = tasklist.length;
  //inputElement.value = "";
}
renderList();

formElement.addEventListener("submit", function (event) {
  event.preventDefault();
  addTask();
});