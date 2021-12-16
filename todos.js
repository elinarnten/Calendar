let inputElement = document.querySelector("input");
let formElement = document.querySelector("form");
let listElement = document.querySelector("ul");
let totalTasksElement = document.querySelector("#total-tasks");

let tasklist = ["klä julgran", "julpynta"];
console.log(tasklist);

//Add Item function
function addTask() {
  if (inputElement.value) {
    tasklist.push(inputElement.value);
    renderList();
  }
}

function showTodoDate(item, span) {
  let inputDate = document.getElementById("inputDate");
  if (inputDate.value) {
    tasklist.push(inputDate.value);
  }
}

function editItem(event, span, item, deleteElement, editElement) {
  console.log('gjghxfdzcd');
  let editInput = document.createElement("input");
  editInput.value = item;
  span.innerHTML = "";
  span.appendChild(editInput);
  deleteElement.innerHTML = '<i class="fas fa-times"></i>';
  let saveEditIcon = document.createElement("i");
  saveEditIcon.innerHTML = '<i id="saveEdit" class="fas fa-check"></i>';
  editElement.innerHTML = "";
  editElement.appendChild(saveEditIcon);
  // Om editElement klickas ska editInput.value ska sparas och visas som inneHTML för span.
  editElement.onclick = (event) =>
    saveEdit(event, span, item, saveEditIcon, editInput);
}
function saveEdit(event, span, item, saveEditIcon, editInput) {
  console.log(item);
}

//Delete Item function
function deleteItem(event) {
  let item = event.target.parentElement.previousElementSibling.innerHTML;
  let index = tasklist.indexOf(item);
  if (index !== -1) {
    tasklist.splice(index, 1);
  }
  renderList();
}

function renderList() {
  listElement.innerHTML = "";
  tasklist.forEach(function (item) {
    let newItem = document.createElement("li");
    //Add a new span
    let span = document.createElement("span");
    span.innerHTML = item;
    newItem.appendChild(span);

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
      editItem(event, span, item, deleteElement, editElement)
    );
    showTodoDate(item, span);

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
