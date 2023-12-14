import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, removeTodo } from "../../features/todoSlice";

const Todo = () => {
  const todo = useSelector((state) => state.todo.value);
  const dispatch = useDispatch();
  const [input, setInput] = useState([]);
  return (
    <>
      <div>
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            value={input}
            type="text"
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            onClick={() => {
              dispatch(addTodo({ name: input, id: uuidv4() }));
              setInput("");
            }}
          >
            add
          </button>
        </form>
        {todo.map((x) => (
          <li key={uuidv4()}>
            {x.name}{" "}
            <i
              onClick={() => dispatch(removeTodo(x.id))}
              className="fa-solid fa-x"
            ></i>
          </li>
        ))}
      </div>
    </>
  );
};

export default Todo;
