const main = document.querySelector(".main");
const update = document.querySelector(".update");
const input = main.querySelector("input");
const todos = document.querySelector(".todos");
const updateBtn = document.getElementById("updateBtn");
const deleteBtn = document.getElementById("deleteBtn");
update.style.display = "none";
let selectedTodo = null;

main.addEventListener("submit", function handleForm(e) {
  e.preventDefault();
  showTodos();
  input.value = "";
});

function showTodos() {
  const div = document.createElement("div");
  div.className = "todo";
  const template = `
    <h2>${input.value}</h2>
    <div class="button-wrapper">
    <button class="updateBtn">Update</button>
    <button class="deleteBtn">Delete</button>
    </div>
    `;
  div.innerHTML = template;
  todos.append(div);
}

todos.addEventListener("click", function handleTodo(e) {
  if (e.target.className === "updateBtn") {
    const btnWrapper = e.target.parentElement;
    const wrapper = btnWrapper.parentElement;
    selectedTodo = wrapper;
    main.style.display = "none";
    update.style.display = "block";
    const todo = selectedTodo.querySelector("h2").innerText;
    update.querySelector("input").value = todo;
  }
  if (e.target.className === "deleteBtn") {
    e.target.parentElement.parentElement.remove();
  }
});

update.addEventListener("submit", function updateTodo(e) {
  e.preventDefault();
  const todo = e.target.querySelector("input").value;
  selectedTodo.querySelector("h2").innerText = todo;
  update.style.display = "none";
  main.style.display = "block";
  update.querySelector("input").value = "";
});
