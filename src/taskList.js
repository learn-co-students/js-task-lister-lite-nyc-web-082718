class TaskList {

  showTask(task) {
    const taskLi = document.createElement('li');
    taskLi.innerText = task.description + "   ";
    const deleteButton = document.createElement('button');
    deleteButton.innerText = "X";
    deleteButton.addEventListener('click', function(e) {
      e.preventDefault();
      document.getElementById('tasks').removeChild(this.parentElement);
    });

    taskLi.appendChild(deleteButton);

    document.getElementById('tasks').appendChild(taskLi);
  }

  newTask(description) {
    const task = new Task(description);

    this.showTask(task);
  }
}
