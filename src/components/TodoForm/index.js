import { ReactComponent as PlusIcon } from "../../assets/plus.svg";
import useInputState from "../../states/useInputState";

const TodoForm = ({ saveTodo }) => {
  const { value, onChange, reset } = useInputState("");
  return (
    <form
      className="grid grid-cols-12 gap-2 mx-auto"
      onSubmit={(event) => {
        event.preventDefault();
        saveTodo(value);
        reset();
      }}
    >
      <div className="col-span-10">
        <input
          className="w-full rounded-lg border-1 text-md p-3 h-12 bg-white border-yellow-400 border-2 focus:outline-none active:outline-none focus:border-yellow-600 active:border-yellow-600"
          name="todoText"
          placeholder="Enter a task name..."
          aria-label="Todo Text"
          value={value}
          onChange={onChange}
          data-testid="todo-text-input"
        />
      </div>
      <div className="col-span-2">
        <button
          className="rounded-lg p-3 bg-green-500 w-full flex align-center justify-center text-white font-bold h-full hover:bg-green-400 hover:shadow-md"
          type="submit"
          aria-label="Add Todo"
          data-testid="add-todo-button"
        >
          <PlusIcon className="svg-inline--fa fa-plus fa-w-14 fa-lg" />
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
