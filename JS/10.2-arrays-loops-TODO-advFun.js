const todoList = [];

renderTodoList();

function renderTodoList(){
  let todoListHTML=''

  todoList.forEach((todoObject, index) => {
    const html =`
      <div>${todoObject.name} </div>
      <div>${todoObject.dueDate} </div>
      <button class="delete-todo-button js-delete-button">Delete </button>

    `;
    todoListHTML+=html;

  });
  

  document.querySelector('.js-todo-list').innerHTML = todoListHTML;
  document.querySelectorAll('.js-delete-button')
    .forEach((deleteBtn, index)=>{
      deleteBtn.addEventListener('click', ()=>{
        todoList.splice(index, 1);
        renderTodoList();
      });

    });


}


document.querySelector('.js-add-button')
  .addEventListener('click',()=>{
    addTodo();
  });

function addTodo(){

  const inputElement =document.querySelector('.js-name-input');
  const name = inputElement.value;
  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;

  todoList.push({name: name, dueDate: dueDate}); //moglo je i samo da se stavi {name, dueDate} jer su ista imena 
  

  inputElement.value = '';

  renderTodoList();

}