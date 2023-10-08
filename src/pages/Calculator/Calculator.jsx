// Calculator.jsx

import "./Calculator.scss";

export default function Calculator() {
  return (
    <div className="calc">
      <input
        className="calc__input"
        type="text"
        name="input"
        id="input"
        placeholder="..."
      />
    </div>
  );
}
