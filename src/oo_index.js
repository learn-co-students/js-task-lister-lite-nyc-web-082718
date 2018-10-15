document.addEventListener("DOMContentLoaded", () => {
  const taskList = new TaskList();
  const TaskDescription = document.getElementById('new-task-description');
  const createTaskForm = document.getElementById('create-task-form');
  const tasks = document.getElementById('tasks');

  createTaskForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const taskValue = TaskDescription.value
    const newTask = document.createElement('li');
    const btn = document.createElement("button")

    newTask.innerText = taskValue
    newTask.appendChild(btn)
    tasks.appendChild(newTask)
    event.target.reset()

    btn.innerText = 'X'

    btn.addEventListener('click', (event) => {
      event.target.parentNode.remove()
    })
  })

}); //end of class
