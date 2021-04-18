const todos = document.querySelector("#todos");
const addButton = document.querySelector("#add-button");

var li;

let todoArray = [];

addButton.addEventListener('click', () => {
    const inputTodo = document.querySelector("#input-todo");
    const todoTask = inputTodo.value;
    
    todoArray.push(todoTask);
    
    let textnode = document.createTextNode(todoArray[todoArray.length - 1]);
    
    li = document.createElement("li");
    li.className = "task";
    li.setAttribute('id', 'id-' + todoArray.length);
    
    let removeButton = document.createElement('button');
    removeButton.className = "remove-button";
    removeButton.innerText = "remove";
    removeButton.setAttribute('id','remove-btn-' + todoArray.length);
    
    li.appendChild(textnode);
    li.appendChild(removeButton);
    
    todos.appendChild(li);

    removeButton.onclick = () => {
        let liElement = removeButton.parentElement;
        todoArray = todoArray.filter(todo => {
            return todo != textnode.textContent;
        })
        liElement.remove();
    }
    
    inputTodo.value = ""
})