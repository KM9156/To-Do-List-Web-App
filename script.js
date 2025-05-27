document.getElementById('addTaskBtn').addEventListener('click', addTask);

function addTask() {
  const input = document.getElementById('taskInput');
  const taskText = input.value.trim();

  if (taskText === '') return;

  const li = document.createElement('li');

  // Task text
  li.textContent = taskText;

  // Toggle completion
  li.addEventListener('click', () => {
    li.classList.toggle('completed');
  });

  // Remove button
  const removeBtn = document.createElement('button');
  removeBtn.textContent = 'X';
  removeBtn.className = 'remove-btn';
  removeBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent toggle
    li.remove();
  });

  li.appendChild(removeBtn);
  document.getElementById('taskList').appendChild(li);

  input.value = '';
}
