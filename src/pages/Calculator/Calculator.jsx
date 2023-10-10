// Calculator.jsx

import { useState } from "react";
import "./Calculator.scss";

export default function Calculator() {
  const [display, setDisplay] = useState(0);
  const [buffer, setBuffer] = useState(0);
  const [operator, setOperator] = useState("");

  const handleNumClick = (event) => {
    event.preventDefault();

    setDisplay(
      (currentDisplay) => currentDisplay * 10 + parseInt(event.target.value)
    );
  };

  const handleDecimal = (event) => {
    event.preventDefault();

    setDisplay((currentDisplay) => currentDisplay + ".");
  };

  const clear = () => setDisplay(0);

  const handleOperator = (event) => {
    event.preventDefault();

    setOperator(event.target.value);
    setBuffer(parseInt(display));
    setDisplay(0);
  };

  const handleEqual = (event) => {
    event.preventDefault();

    setDisplay(buffer);
  };

  return (
    <section className="calc">
      <div className="calc__container">
        <input
          className="calc__input"
          type="number"
          name="input"
          id="input"
          value={display}
          readOnly
        />
        <button className="calc__clear" onClick={clear}>
          C
        </button>
        <section className="calc__keypad">
          <div className="calc__nums">
            {Array.from({ length: 10 }, (v, i) => (
              <button
                key={i}
                className="calc__nums-button"
                value={9 - i}
                onClick={(e) => handleNumClick(e)}
              >
                {9 - i}
              </button>
            ))}
            <button
              className="calc__nums-button calc__nums-button--dot"
              onClick={(e) => handleDecimal(e)}
              value={"."}
            >
              .
            </button>
          </div>
          <div className="calc__operators">
            <button
              className="calc__operators-button"
              onClick={(e) => handleOperator(e)}
              value={"-"}
            >
              -
            </button>
            <button
              className="calc__operators-button"
              onClick={(e) => handleOperator(e)}
            >
              /
            </button>
            <button
              className="calc__operators-button calc__operators-button--multiply"
              onClick={(e) => handleOperator(e)}
              value={"*"}
            >
              *
            </button>
            <button
              className="calc__operators-button calc__operators-button--add"
              onClick={(e) => handleOperator(e)}
              value={"+"}
            >
              +
            </button>

            <button
              className="calc__operators-button calc__operators-button--equal"
              onClick={(e) => handleEqual(e)}
              value={"="}
            >
              =
            </button>
          </div>
        </section>
      </div>
    </section>
  );
}
