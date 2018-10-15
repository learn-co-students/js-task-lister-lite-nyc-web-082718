taskID = 0

class Task {
  constructor(description, priority){
    this.description = description
    this.priority = priority
    this.id = ++taskID
    tasks.push(this)
  }
}
