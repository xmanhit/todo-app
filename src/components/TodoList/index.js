import { ReactComponent as TrashIcon } from "../../assets/trash.svg";
import React, { useState, useEffect } from "react";

import { all, options, filterTodosByOption } from "../../utils/todos";
import userShowTrashState from "../../states/useShowTrashState";
import userShowOptionState from "../../states/useOptionState";

const TodoList = ({ todos, isCompletedTodo, deleteTodo }) => {
  const { showTrash, setShowTrash } = userShowTrashState(null);
  const { optionName, setOptionName } = userShowOptionState(all);
  const [optionTodos, setOptionTodos] = useState([]);

  useEffect(() => {
    const currentTodos = filterTodosByOption(todos, optionName);
    setOptionTodos(currentTodos);
  }, [todos, optionName]);

  return (
    <div className="rounded-lg bg-yellow-100 p-8 border-1 shadow-md mx-auto task-list">
      <div className="flex justify-between">
        <p className="text-2xl font-semibold text-yellow-700">List:</p>
        <select
          name="mode"
          className="text-md border-2 border-yellow-600 p-1 rounded-lg"
          onChange={setOptionName}
        >
          {Object.keys(options).map((item, i) => (
            <option key={i} value={item}>
              {options[item]}
            </option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-12">
        {optionTodos.length === 0 ? (
          <div className="col-span-12">
            <div className="mt-5 flex items-center justify-between cursor-pointer">
              <p className="text-2xl font-semibold text-yellow-600 text-todo">
                Nothing to do!
              </p>
            </div>
          </div>
        ) : (
          optionTodos.map(({ id, text, completed }) => (
            <div key={id} className="col-span-12">
              <div
                className="mt-5 flex items-center justify-between border-b border-yellow-200 cursor-pointer"
                onMouseEnter={() => setShowTrash(id)}
                onMouseLeave={() => setShowTrash(null)}
              >
                <p
                  onClick={() => isCompletedTodo(id)}
                  className={
                    completed
                      ? "text-2xl duration-200 line-through text-gray-400 w-full text-todo"
                      : "text-2xl duration-200 w-full text-todo"
                  }
                  data-testid="todo-text"
                >
                  {text}
                </p>
                <TrashIcon
                  className={
                    showTrash === id
                      ? "svg-inline--fa fa-trash fa-w-14 duration-150 text-yellow-600 block"
                      : "svg-inline--fa fa-trash fa-w-14 duration-150 hidden"
                  }
                  onClick={() => deleteTodo(id)}
                  data-testid="delete-todo-button"
                />
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default TodoList;
