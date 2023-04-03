//selectors

const todoInput = document.querySelector('.todo-input');

const todoButton = document.querySelector(".todo-button");

//evnt listeners
todoButton.addEventListener("click", addTodo);

//functions
function addTodo(event){

    //prevent default behaviour from happening
    event.preventDefault();

    //todo DIV
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo")

    //create LI
    const newTodo = document.createElement('li');
    newTodo.innerText = 'This is the first thing am going to do in the morning';
    newTodo.classList.add('todo-item');

}