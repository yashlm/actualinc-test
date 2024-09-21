let tasks = [];
let currentTaskIndex = -1;

function renderTasks() {
  const toDoList = document.getElementById('to-do-list');
  const doingList = document.getElementById('doing-list');
  const doneList = document.getElementById('done-list');

  toDoList.innerHTML = '';
  doingList.innerHTML = '';
  doneList.innerHTML = '';

  tasks.forEach((task, index) => {
    const taskElement = document.createElement('div');
    taskElement.classList.add('task', 'mb-2', 'p-2', 'border', 'rounded');
    taskElement.innerHTML = `
      <h4>${task.title}</h4>
      <p>${task.description}</p>
      <small>Priority: ${task.priority}</small><br>
      <small>End Date: ${new Date(task.endDate).toLocaleString()}</small>
      <br>
      ${task.status === 'to-do' ? `
        <button class="btn btn-success btn-sm" onclick="markAsDoing(${index})">Mark as Doing</button>
        <button class="btn btn-info btn-sm" onclick="editTask(${index})">Edit</button>
        <button class="btn btn-danger btn-sm" onclick="deleteTask(${index})">Delete</button>
      ` : task.status === 'doing' ? `
        <button class="btn btn-success btn-sm" onclick="markAsDone(${index})">Mark as Done</button>
        <button class="btn btn-info btn-sm" onclick="editTask(${index})">Edit</button>
        <button class="btn btn-secondary btn-sm" onclick="markAsToDo(${index})">Mark as To-Do</button>
        <button class="btn btn-danger btn-sm" onclick="deleteTask(${index})">Delete</button>
      ` : `
        <button class="btn btn-secondary btn-sm" onclick="markAsToDo(${index})">Mark as To-Do</button>
        <button class="btn btn-info btn-sm" onclick="editTask(${index})">Edit</button>
        <button class="btn btn-danger btn-sm" onclick="deleteTask(${index})">Delete</button>
      `}
    `;
    if (task.status === 'to-do') toDoList.appendChild(taskElement);
    else if (task.status === 'doing') doingList.appendChild(taskElement);
    else doneList.appendChild(taskElement);
  });
}

function saveTask(event) {
  event.preventDefault();

  const title = document.getElementById('task-title').value;
  const description = document.getElementById('task-description').value;
  const priority = document.getElementById('task-priority').value;
  const endDate = document.getElementById('task-end-date').value;

  const task = {
    title,
    description,
    priority,
    endDate,
    status: 'to-do',
  };

  if (currentTaskIndex > -1) {
    tasks[currentTaskIndex] = task;
    currentTaskIndex = -1; 
  } else {
    tasks.push(task);
  }

  closeModal();
  renderTasks();
}

function markAsDoing(index) {
  tasks[index].status = 'doing';
  renderTasks();
}

function markAsDone(index) {
  tasks[index].status = 'done';
  renderTasks();
}

function markAsToDo(index) {
  tasks[index].status = 'to-do';
  renderTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

function editTask(index) {
  const task = tasks[index];
  currentTaskIndex = index; 

  document.getElementById('task-title').value = task.title;
  document.getElementById('task-description').value = task.description;
  document.getElementById('task-priority').value = task.priority;
  document.getElementById('task-end-date').value = task.endDate;

  const modal = document.getElementById('taskModal');
  modal.classList.add('show');
  modal.style.display = 'block';
}

function closeModal() {
  document.getElementById('task-title').value = '';
  document.getElementById('task-description').value = '';
  document.getElementById('task-priority').value = '';
  document.getElementById('task-end-date').value = '';
  currentTaskIndex = -1;

  const modal = document.getElementById('taskModal');
  modal.classList.remove('show');
  modal.style.display = 'none';
}

document.getElementById('sort-priority-btn').onclick = () => {
  tasks.sort((a, b) => a.priority - b.priority);
  renderTasks();
};

document.getElementById('sort-date-btn').onclick = () => {
  tasks.sort((a, b) => new Date(a.endDate) - new Date(b.endDate));
  renderTasks();
};

document.getElementById('add-task-btn').onclick = () => {
  currentTaskIndex = -1; 
  closeModal();

  const modal = document.getElementById('taskModal');
  modal.classList.add('show');
  modal.style.display = 'block';
};
