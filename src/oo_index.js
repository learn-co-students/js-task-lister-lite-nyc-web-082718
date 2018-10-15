
document.addEventListener("DOMContentLoaded", () => {
  const taskList = new TaskList();
  let submitButton = document.querySelectorAll('input')[1]

  submitButton.addEventListener("click", function(event) {
    event.preventDefault()
    let text = document.querySelector('input').value
    let html = taskList.newTask(text)
    let ul = document.querySelector('#tasks')
    ul.appendChild(html)
    let textBox = document.querySelector('input').value = ''
  })

});
//can reference taskList because of arrow function
//DOMContentLoaded functions similar to before_action
//# = id (id = tasks)
//. = class (no class in this lab)
