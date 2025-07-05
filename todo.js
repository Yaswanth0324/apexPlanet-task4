document.addEventListener("DOMContentLoaded", loadTasks);

function addTask() {
  const input = document.getElementById("taskInput");
  const timeInput = document.getElementById("taskTime");
  const taskText = input.value.trim();
  const taskTime = timeInput.value;

  if (taskText === "" || taskTime === "") return;

  const tasks = getTasks();
  tasks.push({
    text: taskText,
    dueTime: taskTime,
    completed: false
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));

  input.value = "";
  timeInput.value = "";
  loadTasks();
}

function loadTasks() {
  const list = document.getElementById("taskList");
  list.innerHTML = "";

  const tasks = getTasks();
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.className = task.completed ? "completed" : "";
    const due = new Date(task.dueTime).toLocaleString();

    li.innerHTML = `
      <span onclick="toggleComplete(${index})">${task.text}</span><br/>
      <small>Due: ${due}</small><br/>
      <button onclick="deleteTask(${index})">Delete</button>
    `;
    list.appendChild(li);
  });
}


function toggleComplete(index) {
  const tasks = getTasks();
  tasks[index].completed = !tasks[index].completed;
  localStorage.setItem("tasks", JSON.stringify(tasks));
  loadTasks();
}

function getTasks() {
  return JSON.parse(localStorage.getItem("tasks")) || [];
}

function deleteTask(index) {
  const tasks = getTasks();
  tasks.splice(index, 1); // remove 1 item at given index
  localStorage.setItem("tasks", JSON.stringify(tasks));
  loadTasks();
}