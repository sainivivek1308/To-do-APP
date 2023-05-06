window.addEventListener('load', () => {
    /*const todos = JSON.parse(localStorage.getItem('todos')) || [];
    const nameinput = document.querySelector('#name');
    const newTodoform = document.querySelector('#new-todo-form');

    const username = localStorage.getItem('username') || '';
    nameinput.value = username;
    nameinput.addEventListener('change', (e) => {
        localStorage.setItem('username', e.target.value)
    });
    console.log("applicaion start hello");
    newTodoform.addEventListener('submit', e => {
        e.preventDefault();
        let todo = {
            content: e.target.elements.content.value,
            category: e.target.elements.category.value,
            done: false,
            createdAT: new Date().getTime()
        }
        todos.push(todo);
        localStorage.setItem('todos', JSON.stringify(todos));
        e.target.reset();
        //DisplayTodos(todos);
    });
    //DisplayTodos(todos);
    
    */
    todos = JSON.parse(localStorage.getItem('todos')) || [];
    const nameInput = document.querySelector('#name');
    const newTodoForm = document.querySelector('#new-todo-form');

    const username = localStorage.getItem('username') || '';

    nameInput.value = username;

    nameInput.addEventListener('change', (e) => {
        localStorage.setItem('username', e.target.value);
    })

    newTodoForm.addEventListener('submit', e => {
        e.preventDefault();

        const todo = {
            content: e.target.elements.content.value,
            category: e.target.elements.category.value,
            done: false,
            createdAt: new Date().getTime()
        }

        todos.push(todo);

        localStorage.setItem('todos', JSON.stringify(todos));

        // Reset the form
        e.target.reset();

        DisplayTodos(todos);
    })
    DisplayTodos(todos);

});

function DisplayTodos(todos) {
    const todolist = document.querySelector('#todo-list');
    todolist.innerHTML = "";

    console.log(todos);
    todos.forEach(todo => {
        console.log(todo);
        const todoitem = document.createElement('div');
        todoitem.classList.add('todo-item');
        const left = document.createElement('div');
        left.classList.add('left');
        const label = document.createElement('label');
        const input = document.createElement('input');
        const span = document.createElement('span');
        const content = document.createElement('div');
        const action = document.createElement('div');
        const edit = document.createElement('button');
        const deletebutton = document.createElement('button');
        input.type = 'checkbox';
        input.checked = todo.done;
        span.classList.add('bubble');
        if (todo.category == 'personal') {
            span.classList.add('personal1');
        } else {
            span.classList.add('business');
        }
        content.classList.add('todo-content');
        action.classList.add('actions');
        edit.classList.add('edit');
        deletebutton.classList.add('delete');
        content.innerHTML = `<input type="text" value ="${todo.content}" readonly>`;
        edit.innerHTML = 'Edit';
        deletebutton.innerHTML = 'Delete';
        label.appendChild(input);
        label.appendChild(span);

        left.appendChild(label);
        left.appendChild(content)


        action.appendChild(edit);
        action.appendChild(deletebutton);
        // console.log(left);
        todoitem.appendChild(left);
        // console.group(action);
        todoitem.appendChild(action);
        console.log(todoitem);
        // todolist.innerHTML = "";
        todolist.appendChild(todoitem);

        //console.log(todolist)
        if (todo.done) {
            todoitem.classList.add('done');
        }
        input.addEventListener('click', e => {
            todo.done = e.target.checked;
            localStorage.setItem('todos', JSON.stringify(todos));
            if (todo.done) {
                todoitem.classList.add('done');
                // DisplayTodos();
            } else {
                todoitem.classList.remove('done');
                // DisplayTodos();
            }
            //DisplayTodos();

        });
        edit.addEventListener('click', (e) => {
            const input = content.querySelector('input');
            input.removeAttribute('readonly');
            input.focus();
            input.addEventListener('blur', e => {
                input.setAttribute('readonly', true);
                todo.content = e.target.value;
                localStorage.setItem('todos', JSON.stringify(todos));
                //DisplayTodos();
            });
        });
        deletebutton.addEventListener('click', (e) => {
            todos = todos.filter(t => t != todo);
            localStorage.setItem('todos', JSON.stringify(todos));
            DisplayTodos();
        });
    });
}