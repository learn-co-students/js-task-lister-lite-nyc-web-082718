tasks = []
taskId = 0;

class Task {
  constructor(description) {
    this.id = ++taskId;
    this.description = description;
    tasks.push(this);
  }
}
