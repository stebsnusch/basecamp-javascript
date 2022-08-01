function doThings (e) {
    e.preventDefault();

    if(!input.value) return alert('Tarefa vazia!');

    // creates elements
    const taskItem = document.createElement('div');
    const task = document.createElement('div');
    const checkbox = document.createElement('input');
    const label = document.createElement('label');
    const removeBtn = document.createElement('button');
    
    // structures DOM tree 
    tasks.appendChild(taskItem);
    taskItem.appendChild(task);
    taskItem.appendChild(removeBtn);
    task.appendChild(checkbox);
    task.appendChild(label);

    // sets attributes to elements
    taskItem.setAttribute('class', 'task-item');
    taskItem.setAttribute('name', input.value);
    taskItem.setAttribute('id', input.value);
    
    checkbox.setAttribute('type','checkbox');
    checkbox.setAttribute('for', input.value);
    
    // captures input content and give it to task's label
    label.innerHTML = input.value;

    // remove button receives some text content
    removeBtn.innerHTML = 'Remover';

    // after the task has been added, the input is cleared
    input.value = ''
    
    // defines an event listener for the event of click on the remove button
    removeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        
        taskItem.remove()
    });
}

const input = document.getElementById('task-input');
const addBtn = document.getElementById('addBtn');
const tasks = document.getElementById('tasks');

addBtn.addEventListener('click', doThings);