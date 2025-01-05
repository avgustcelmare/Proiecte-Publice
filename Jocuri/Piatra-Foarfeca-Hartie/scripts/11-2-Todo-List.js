let todoList = [{
        name: 'dus gunoiul',
        dueDate: '1983-07-31'
    }, {
        name: 'mers la piata',
        dueDate: '1986-08-18'
    }
];


renderTodoList();

console.log(todoList);


function renderTodoList () {
    let todoListHTML = '';

    for (let index = 0; index <= todoList.length -1; index++) {
        const todoObject = todoList[index];
        //const name = todoObject.name;
        //const dueDate = todoObject.dueDate;

        const { name , dueDate } = todoObject;

        const html = `
            <div>${name}</div>
            <div>${dueDate}</div>
            <button 
                onclick="
                    todoList.splice(${index}, 1); 
                    renderTodoList();
                " class="delete-todo-button">Delete
            </button>
            `;
        todoListHTML += html;
    }
    document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}


function addTodo() {
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;

    const dateInputElement = document.querySelector('.js-due-date-input');
    const dueDate = dateInputElement.value;

    todoList.push({ name , dueDate });

    inputElement.value = '';

    renderTodoList();

    console.log(todoList);

}

function handleTodoKeyDown (event) {
    if (event.key === 'Enter') {
        addTodo();
    }
}