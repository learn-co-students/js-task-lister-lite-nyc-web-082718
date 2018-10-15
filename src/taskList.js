class TaskList {
  constructor(){
    store.taskLists.push(this)
    }


  grabSubmit() {
    let submitButton = document.querySelectorAll('input')[1]
    return submitButton
  }

  grabUserInput() {
    let userInput = document.getElementById('new-task-description')
    return userInput
  }

  grabTask() {
    let task = document.getElementById('tasks')
    return task
  }


}
