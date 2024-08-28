const taskList = document.getElementById('taskList');
const taskTitle = document.getElementById('taskTitle');
const taskDescription = document.getElementById('taskDescription');
const addTaskButton = document.getElementById('addTask');

addTaskButton.addEventListener('click', async () => {
    const title = taskTitle.value;
    const description = taskDescription.value;
    if (title) {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${title}</span>
            <span>${description}</span>
            <button class="complete-button">Not Completed</button>
            <button class="delete-button">Delete</button>
        `;
        taskTitle.value = '';
        taskDescription.value = '';
        taskList.appendChild(li);
    }
});

taskList.addEventListener('click', async (event) => {
    if (event.target.classList.contains('complete-button')) {
if (event.target.innerText === 'Completed') {
            event.target.innerText = 'Not Completed';
        }
        else {
            event.target.innerText = 'Completed';
            event.target.classList.toggle('clicked');
        }
    }

    if (event.target.classList.contains('delete-button')) {
         event.target.parentElement.remove();
    }
});


