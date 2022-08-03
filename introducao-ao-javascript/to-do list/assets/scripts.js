const form = document.getElementById('task-form');
const taskList = document.getElementById('tasks');

form.onsubmit = function (e) {
	e.preventDefault();

	const inputField = document.getElementById('task-input');
    if (!inputField.value) return;

	addTask(inputField.value);
	form.reset();
};

function addTask(description) {
	const taskContainer = document.createElement('div');
    const removeBtn = document.createElement('button');
	const newTask = document.createElement('input');
	const taskLabel = document.createElement('label');
	const taskDescriptionNode = document.createTextNode(description);

	newTask.setAttribute('type', 'checkbox');
	newTask.setAttribute('name', description);
	newTask.setAttribute('id', description);

	taskLabel.setAttribute('for', description);
	taskLabel.appendChild(taskDescriptionNode);

	taskContainer.classList.add('task-item');
	taskContainer.appendChild(newTask);
	taskContainer.appendChild(taskLabel);
    taskContainer.appendChild(removeBtn);

	taskList.appendChild(taskContainer);

    removeBtn.innerHTML = 'Remover';

    removeBtn.addEventListener('click', (e) => {
        e.preventDefault();

        taskContainer.remove();
    })
}