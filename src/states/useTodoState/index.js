import { useState } from "react";
import { createTodo, isCompletedTodo, deleteTodo } from "../../utils/todos";

const useTodoState = (initialValue) => {
  const [todos, setTodos] = useState(initialValue);

  return {
    todos,
addTodo: (todoText) => {
  const trimmedText = todoText.trim();
  if (trimmedText.length > 0) {
    const newTodo = createTodo(trimmedText);
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  }
},
    isCompletedTodo: (id) => {
      setTodos(isCompletedTodo(todos, id));
    },
    deleteTodo: (id) => {
      setTodos(deleteTodo(todos, id));
    },
  };
};

export default useTodoState;
