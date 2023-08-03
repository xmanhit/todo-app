import "./App.css";

import useTodoState from "./states/useTodoState";
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

export default function App() {
  const { todos, addTodo, deleteTodo, isCompletedTodo } = useTodoState([]);

  return (
    <div className="container mx-auto py-8">
      <Header />
      <main className="grid grid-cols-12">
        <div className="col-span-12 mb-8">
          <TodoForm saveTodo={addTodo} />
        </div>
        <div className="col-span-12">
          <TodoList
            todos={todos}
            isCompletedTodo={isCompletedTodo}
            deleteTodo={deleteTodo}
          />
        </div>
      </main>
    </div>
  );
}
