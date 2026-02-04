const todoList = [];

renderTodoList();

function renderTodoList(){
  let todoListHTML=''

  for(let i = 0; i<todoList.length; i++){
    
    const html =`
      <div>${todoList[i].name} </div>
      <div>${todoList[i].dueDate} </div>
      <button onclick="
        todoList.splice(${i}, 1);
        renderTodoList();
      " class="delete-todo-button">Delete </button>

    `;
    todoListHTML+=html;
  }

  document.querySelector('.js-todo-list').innerHTML = todoListHTML;

}




function addTodo(){

  const inputElement =document.querySelector('.js-name-input');
  const name = inputElement.value;
  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;

  todoList.push({name: name, dueDate: dueDate}); //moglo je i samo da se stavi {name, dueDate} jer su ista imena 
  

  inputElement.value = '';

  renderTodoList();

}