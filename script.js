// Create some variables
const input = document.querySelector("input");
const btn = document.querySelector("button");
const todoList = document.querySelector(".todo-list");

// Add an EventListener to the BTN
btn.addEventListener("click", addTask);

// Create function for adding the Todo List
function addTask() {

    // Create a new List Item
    const newLi = document.createElement("li"); 
    const complete = document.createElement("p"); 
    const checkBtn = document.createElement("button"); 
    const delBtn = document.createElement("button"); 

    // Add icons to the button
    checkBtn.innerHTML = "<i class=\"fas fa-check\"></i>";
    delBtn.innerHTML = "<i class=\"fas fa-trash-alt\"></i>";
    complete.textContent = "Completed";

    // check that the input field isn't empty then create the new list item with the content of the input field above.

    if (input.value !== "") {
        newLi.textContent = input.value;
        // input.value = "";
        todoList.appendChild(newLi);
        newLi.appendChild(checkBtn);
        newLi.appendChild(delBtn);
    } else {
        alert("Please enter some text")
    };

    // MARK lIST ITEM AS COMPLETED
    checkBtn.addEventListener("click", function() {
        newLi.appendChild(complete);
    });

    // Delete the Todo List Item
    delBtn.addEventListener("click", function() {
        const del = confirm ("You are about to delete this todo list item.")
        if (del == true) {
            const parent = this.parentNode;
            parent.remove();
        };
    });
};
