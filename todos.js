function todos() {
    fetch('https://jsonplaceholder.typicode.com/users/1/todos')
    .then(res => res.json())
    .then(data => displayTodos(data))
}

function displayTodos(todos) {
    const todosContaienr = document.getElementById('todos-container');
    for(const todo of todos){
        console.log(todo);
        const createTodos = document.createElement('div');
        createTodos.innerHTML=`
            <h2> todos id: ${todo.id} </h2>
            <h2> todos title:${todo.title}  </h2>
            <p> todos complated:${todo.completed} </p>
        `;
        todosContaienr.appendChild(createTodos)
    }
}
todos();