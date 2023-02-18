const btn = document.querySelector("#button");

function addItem() {
  const item = document.querySelector("#task");
  const list = document.querySelector("#list");
  const newTask = document.createElement("li");
  newTask.textContent = item.value;
  list.appendChild(newTask);

  newTask.addEventListener("click", () => {
    newTask.style.textDecoration = "line-through";
  });
}

btn.addEventListener("click", () => {
  addItem();
});
