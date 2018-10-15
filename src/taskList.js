class TaskList {
  constructor(){}
}

let priorities = ['red','yellow','green']

let taskDesc = document.getElementById('new-task-description').value
let taskPriority = document.getElementById('priority')
let form = document.getElementById('create-task-form')


let deleteTask = function(taskid){
  var task = document.getElementById(`${taskid}`)
  task.parentNode.removeChild(task)
}

let renderTasks = function(task){
  let entry = document.createElement('li')
  entry.innerText = task.description
  entry.id = task.id
  entry.style.color = task.priority
  let list = document.getElementById('tasks')
  list.appendChild(entry)
  let button = document.createElement('button')
  button.innerText = "X"
  button.id = `${task.id}button`
  list.lastChild.insertAdjacentElement('beforeend',button)
  button.addEventListener('click', (event) =>{
    deleteTask(task.id)
  })
}

form.addEventListener('submit', (event) => {
  event.preventDefault()
  let taskDesc = document.getElementById('new-task-description').value
  let taskPriority = document.getElementById('priority').value
  let newtask = new Task(taskDesc, taskPriority)
  let list = document.getElementById('tasks')
  list.innerHTML = ""
  for(task of tasks){(task),renderTasks(task)
  }})

let sort = document.getElementById('sorting')
sort.addEventListener('change', (event) =>{
  let sorting = sort.value
  let sortobject = {"red": 3, "goldenrod": 2, "green": 1}
  switch(sorting){
    case "asc": tasks.sort((a,b) => {
      return sortobject[a.priority] - sortobject[b.priority]
    })
      break
    case "desc": tasks.sort((a,b) => {
      return sortobject[b.priority] - sortobject[a.priority]
    })
      break
  }
  let list = document.getElementById('tasks')
  list.innerHTML = ""
  for(task of tasks){(task),renderTasks(task)
  }})
