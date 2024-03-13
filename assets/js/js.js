document.addEventListener("DOMContentLoaded", function () {
  const taskInput = document.getElementById("taskInput")
  const addTaskButton = document.getElementById("addTaskButton")
  const taskList = document.getElementById("taskList")

  addTaskButton.addEventListener("click", function () {
    const taskText = taskInput.value
    if (taskText !== "") {
      const li = document.createElement("li")
      const p = document.createElement("p")
      li.appendChild(p)
      p.innerText = taskText

      li.addEventListener("click", function () {
        li.classList.toggle("lineThrough")
      })
      const deleteButton = document.createElement("i")
      deleteButton.classList.add("fas", "fa-times")
      deleteButton.addEventListener("click", function () {
        taskList.removeChild(li)
      })

      li.appendChild(deleteButton)
      taskList.appendChild(li)
      taskInput.value = ""
    }
  })
})
