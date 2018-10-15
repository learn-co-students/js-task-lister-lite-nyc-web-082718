store = {tasks: [], taskLists: []}

class Task {
  constructor(taskListId, description) {
    this.taskListId
    this.description

    store.tasks.push(this)
  }

}
