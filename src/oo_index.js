
document.addEventListener("DOMContentLoaded", () => {
  const taskList = new TaskList();

  taskList.grabSubmit().addEventListener('click', e => {

    e.preventDefault()
    let userInput = taskList.grabUserInput().value

    taskList.grabTask().innerHTML += `<li> ${userInput} </li>`

    taskList.grabUserInput().value = ''
  })


});
