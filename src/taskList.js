class TaskList {

  constructor(){}

  newTask(text){
    let task = new Task(text)
    let htmlId = task.createHtmlId()
    return this.makeNewTaskHTML(task)
  }

  makeNewTaskHTML(task) {
    let li = document.createElement('li')
    let textNode = document.createTextNode(task.text)
    li.appendChild(textNode)
    let deleteButton = document.createElement('button')
    this.attachEventListenerToDelete(deleteButton)
    let xButtonText = document.createTextNode('X')
    deleteButton.appendChild(xButtonText)
    li.appendChild(deleteButton)
    return li
  }

  attachEventListenerToDelete(deleteButton) {
    deleteButton.addEventListener('click', function(event) {
      event.preventDefault()
      deleteButton.parentElement.remove()
    })
  }

}
