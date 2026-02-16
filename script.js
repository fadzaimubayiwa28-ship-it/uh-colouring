const todoList = document.getElementById('todoList');
const openComposer = document.getElementById('openComposer');
const composer = document.getElementById('composer');
const cancelCompose = document.getElementById('cancelCompose');
const addTodo = document.getElementById('addTodo');
const todoInput = document.getElementById('todoInput');

function setComposerState(isOpen) {
  composer.classList.toggle('hidden', !isOpen);
  composer.setAttribute('aria-hidden', String(!isOpen));

  if (isOpen) {
    todoInput.value = '';
    setTimeout(() => todoInput.focus(), 10);
  }
}

function addTodoItem(text) {
  const item = document.createElement('li');
  item.className = 'todo-item';
  item.textContent = text;
  todoList.appendChild(item);
}

openComposer.addEventListener('click', () => setComposerState(true));
cancelCompose.addEventListener('click', () => setComposerState(false));

addTodo.addEventListener('click', () => {
  const value = todoInput.value.trim();
  if (!value) return;

  addTodoItem(value);
  setComposerState(false);
});

composer.addEventListener('click', (event) => {
  if (event.target === composer) setComposerState(false);
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && !composer.classList.contains('hidden')) {
    setComposerState(false);
  }
});
