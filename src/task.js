let tasks = []
let taskId = 0

class Task {

  constructor(text) {
    this.id = ++taskId
    this.text = text
    tasks.push(this)
  }

  createHtmlId() {
    return "task" + this.id
  }

}
