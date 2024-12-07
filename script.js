let taskInput = document.querySelector('.form-task');
let addBtn = document.querySelector('.button');
let taskList = document.querySelector('.task-list');

function addNewTask(event) {
    event.preventDefault();
    let task = taskInput.value;
    let newItem = document.querySelector("#template").cloneNode(true).content;
    if (!task) return;
    // console.log(newItem);
    newItem.querySelector(".task__text").value = task;
    newItem.querySelector(".task__delete").addEventListener("click", deleteTask);
    taskList.append(newItem);
    taskInput.value = "";
    taskInput.focus();
}
function deleteTask (event) {
    let target = event.target.parentElement;
    target.remove();
}
addBtn.addEventListener("click", addNewTask);