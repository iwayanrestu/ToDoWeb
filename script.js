function addTask() {
  var taskTitle = document.getElementById("task-title");
  var taskDesc = document.getElementById("task-desc");
  var taskList = document.getElementById("task-list");

  if (taskTitle != " ") {
    var currentDate = new Date();
    var dateString = currentDate.toLocaleDateString();

    var newTask = document.createElement("li");
    newTask.innerHTML =
      taskTitle.value +
      "<br>" +
      taskDesc.value +
      "<br>" +
      dateString +
      '<button id="button-del" onclick="removeTask(this)">Remove</button>';
    taskList.appendChild(newTask);

    taskTitle.value = "";
    taskDesc.value = "";
  }
}

function removeTask(button) {
  var listItem = button.parentNode;
  listItem.parentNode.removeChild(listItem);
}
