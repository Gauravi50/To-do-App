const input = document.getElementById("todo-input");
const btn = document.getElementById("add-btn");
const ul = document.getElementById("todo-list");

// Add new to-do
btn.addEventListener("click", () => {
    if(input.value.trim() === "") return; // ignore empty input

    const li = document.createElement("li");
    li.innerText = input.value;

    const delBtn = document.createElement("button");
    delBtn.innerText = "Delete";
    delBtn.classList.add("delete");
    li.appendChild(delBtn);

    ul.appendChild(li);
    input.value = "";
    input.focus();
});

// Delete to-do using event delegation
ul.addEventListener("click", (event) => {
    if(event.target.classList.contains("delete")){
        event.target.parentElement.remove();
    }
});
