let ctr = 1;
let completedTasks = 0;
let totalTasks = 0;

function addTodo() {
  const taskValue = document.getElementById("task").value;
  let tagsValue = document.getElementById("tags").value;
  const dateValue = document.getElementById("date").value;

  if (taskValue === "") {
    alert("Add Some Task");
    return;
  }

  totalTasks++;

  const newDivElement = document.createElement("div");
  newDivElement.setAttribute("id", "task-" + ctr);
  newDivElement.classList.add("task-item");

  let tagsBlock = "";

  if (tagsValue.length > 0) {
    tagsBlock = tagsValue
      .split(" ")
      .map((tag) => {
        if (tag.startsWith("#")) {
          const color = getRandomColor();
          return `<span class="hashtag" style="color:${color}">${tag}</span>`;
        }
        return tag;
      })
      .join(" ");

    tagsBlock = `<strong>Tags:</strong> ${tagsBlock} <br>`;
  }

  newDivElement.innerHTML = `
    <div class="task-text">
      <strong>Task:</strong> ${taskValue} <br>
      ${tagsBlock}
      <strong>Date:</strong> ${dateValue}
    </div>
    <div class="task-actions">
      <i class="fas fa-check-circle complete-icon" onclick="toggleComplete(${ctr})" id="complete-${ctr}"></i>
      <i class="fas fa-trash-alt delete-icon" onclick="deleteTodo(${ctr})"></i>
    </div>`;

  document.getElementById("task-container").appendChild(newDivElement);
  ctr++;
}

function deleteTodo(ctr) {
  const element = document.getElementById("task-" + ctr);
  if (element) {
    const completeIcon = element.querySelector(".complete-icon");
    if (completeIcon.classList.contains("completed")) {
      completedTasks--;
    }
    totalTasks--;
    element.parentNode.removeChild(element);
    updateProgress();

    // Reset progress bar if all tasks are deleted
    if (totalTasks === 0) {
      completedTasks = 0;
      const progressBar = document.getElementById("progress-bar");
      progressBar.style.width = "0%";
    }
  }
}

function toggleComplete(ctr) {
  const completeIcon = document.getElementById(`complete-${ctr}`);
  const taskText = document.querySelector(`#task-${ctr} .task-text`);

  if (completeIcon.classList.contains("completed")) {
    completeIcon.classList.remove("completed");
    completeIcon.style.color = "#ccc";
    taskText.classList.remove("completed");
    completedTasks--;
  } else {
    completeIcon.classList.add("completed");
    completeIcon.style.color = "#28a745";
    taskText.classList.add("completed");
    completedTasks++;
  }
  updateProgress();
}

function updateProgress() {
  const progressBar = document.getElementById("progress-bar");
  const progress = (completedTasks / totalTasks) * 100;
  progressBar.style.width = progress + "%";

  if (progress === 100 && totalTasks > 0) {
    // Ensure there are tasks before triggering confetti
    triggerConfetti();
  }
}

function triggerConfetti() {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
  });
}

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 10)];
  }
  return color;
}
