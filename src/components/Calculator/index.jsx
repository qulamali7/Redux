import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { calculator } from "../../features/calculatorSlice";

const Calculator = () => {
  const [input2, setInput2] = useState("");
  const [input, setInput] = useState("");
  const total = useSelector((state) => state.calculator.value);
  const dispatch = useDispatch();
  return (
    <>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <input
        type="text"
        value={input2}
        onChange={(e) => setInput2(e.target.value)}
      />
      <button
        onClick={() =>
          dispatch(calculator({ operator: "+", num1: +input, num2: +input2 }))
        }
      >
        +
      </button>
      <button
        onClick={() =>
          dispatch(calculator({ operator: "-", num1: +input, num2: +input2 }))
        }
      >
        -
      </button>
      <button
        onClick={() =>
          dispatch(calculator({ operator: "*", num1: +input, num2: +input2 }))
        }
      >
        *
      </button>
      <button
        onClick={() =>
          dispatch(calculator({ operator: "/", num1: +input, num2: +input2 }))
        }
      >
        /
      </button>
      <p>{total}</p>
    </>
  );
};

export default Calculator;
