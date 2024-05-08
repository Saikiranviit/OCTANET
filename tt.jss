document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('todo-form');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      const taskText = taskInput.value.trim();
      if (taskText !== '') {
        addTask(taskText);
        taskInput.value = '';
      }
    });
  
    function addTask(taskText) {
      const li = document.createElement('li');
      li.innerText = taskText;
      const deleteBtn = document.createElement('button');
      deleteBtn.innerText = 'Delete';
      deleteBtn.classList.add('delete-btn');
      deleteBtn.addEventListener('click', function() {
        li.remove();
      });
      li.appendChild(deleteBtn);
      taskList.appendChild(li);
    }
  
    taskList.addEventListener('click', function(event) {
      const target = event.target;
      if (target.tagName === 'LI') {
        target.classList.toggle('completed');
      }
    });
  });

