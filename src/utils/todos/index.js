let calls = 0;

export function filterTodosByOption(todos, optionName) {
  let result;
  
  switch (optionName) {
    case completed:
      console.log(`getIsCompletedTodos() was called ${++calls} times`);
      result = todos.filter((todo) => todo.completed);
      break;

    case visible:
      console.log(`getVisibleTodos() was called ${++calls} times`);
      result = todos.filter((todo) => !todo.completed);
      break;

    case all:
      console.log(`getTodos() was called ${++calls} times`);
      result = todos;
      break;

    default:
      throw new Error(`Unknown option: ${optionName}`);
  }
  
  return result;
}

export function createTodo(text, completed = false) {
  console.log(`createTodo() was called ${++calls} times`);
  return {
    id: generateId(),
    text,
    completed,
  };
}

export function isCompletedTodo(todos, id) {
  console.log(`isCompletedTodo() was called ${++calls} times`);
  return todos.map((todo) =>
    todo.id === id ? { ...todo, completed: !todo.completed } : todo
  );
}

export function deleteTodo(todos, id) {
  console.log(`deleteTodo() was called ${++calls} times`);
  return todos.filter((todo) => todo.id !== id);
}

export const all = "all",
  visible = "visible",
  completed = "completed";

export const options = {
  [all]: "All",
  [visible]: "to do",
  [completed]: "Done",
};

function generateId() {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  );
}
