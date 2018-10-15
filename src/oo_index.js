document.addEventListener("DOMContentLoaded", () => {
  const taskForm = document.getElementById('create-task-form')
  const newTask = document.getElementById('tasks')

  taskForm.addEventListener('submit', function(event) {
    event.preventDefault()
    const userInput = document.getElementById('new-task-description').value

    newTask.innerHTML += `<li>${userInput} <button id="delete" data-description="${userInput}">X</button></li>`

    event.target.reset()
  })

});
