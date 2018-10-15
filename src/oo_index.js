
document.addEventListener("DOMContentLoaded", () => {
  const taskList = new TaskList();
  const button = document.getElementById('submit');

  button.addEventListener('click', function(e) {
    e.preventDefault();
    const input = document.getElementById('new-task-description').value;
    taskList.newTask(input);
    document.getElementById('new-task-description').value = '';
    // e.target.reset();
  });
});
