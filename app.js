window.onload = function() {
    displayTask();
}

// Create some variables
const input = document.querySelector("input");
const btn = document.querySelector("button");
const todoList = document.querySelector(".todo-list");
const clear = document.querySelector(".clear");

// Add an EventListener to the BTN
btn.addEventListener("click", addTask);

// CREATE FUNCTION FOR ADDING TASK
function addTask() {
    if (input.value != "") {
        addTaskToLS();
        todoList.innerHTML = "";
        displayTask();
    } else {
        alert("Please enter a task")
    }
}

// SAVE TASK TO LOCAL STORAGE
function addTaskToLS() {
    let tasks;
    if (localStorage.getItem("tasks") === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem("tasks"))
    }
    tasks.push(input.value);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    console.log(input.value);
    input.value = "";
}

// DISPLAY TASK
function displayTask() {
    let tasks;
    if (localStorage.getItem("tasks") === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem("tasks"))
    }

     

    tasks.forEach(function(task, index) {
        
        const newLi = document.createElement("li");
        const complete = document.createElement("p"); 
        const checkBtn = document.createElement("button"); 
        const delBtn = document.createElement("button"); 

        // Add icons to the button
        checkBtn.innerHTML = `<i class="fas fa-check"></i>`;
        delBtn.innerHTML = `<i class="fas fa-trash-alt"></i>`;
        complete.textContent = "Completed";

        newLi.appendChild(document.createTextNode(task));
        newLi.appendChild(checkBtn);
        newLi.appendChild(delBtn);
    
        todoList.appendChild(newLi);

        // MARK TASK AS COMPLETED
        checkBtn.addEventListener("click", () => {
            newLi.appendChild(complete);
        })

        delBtn.addEventListener("click", deleteTask);

        })      
    
}

// DELETE A TASK
function deleteTask(index) {
    let tasks;
    const del = confirm("You are about to delete this task");

    if (del == true) {
        if (localStorage.getItem("tasks") === null) {
            tasks = [];
        } else {
            tasks = JSON.parse(localStorage.getItem("tasks"))
        }
    }
    tasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    todoList.innerHTML = "";
    displayTask();
}

// Clear Tasks
clear.addEventListener("click", clearTask);

function clearTask() {
    const delTasks = confirm("Delete all tasks");
    if (delTasks == true) {
        localStorage.clear();
        todoList.innerHTML = "";
        displayTask();
    }
}

for (i = 0; i <= localStorage.length; i++) {
    let key = localStorage.key(i);
    console.log(localStorage.getItem(key));
}
