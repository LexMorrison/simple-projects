import { useState, useEffect } from "react";
import Button from "../helpers/Button";

function Counter() {
  const [count, setCount] = useState(0);
  const [isOnMode, setIsOnMode] = useState(false);

  const ToggleMode = () => {
    setIsOnMode((prevState) => !prevState);
  };

  useEffect(() => {
    setCount(0);
  }, [isOnMode]);

  return (
    <section className="counterWrapper">
      <h1>Counter:</h1>
      <div className="counterToggleWrapper">
        <p>only positive</p>
        <div
          className={`toggleSwitch ${isOnMode ? "on" : ""}`}
          onClick={ToggleMode}
        >
          <div className="toggleThumb" />
        </div>
        <p>can be both</p>
      </div>
      <h2 className="counterScore">{count}</h2>
      <div className="counterButtonsWrapper">
        <Button
          className="counterButtonPluss"
          text={"Increase +"}
          PressMe={() => setCount(count + 1)}
        />
        <Button
          className="counterButtonMinus"
          text={"Decrease -"}
          PressMe={() => setCount(count - 1)}
          disabled={!isOnMode && count === 0}
        />
      </div>
      <Button
        className="counterResetButton"
        text={"Reset"}
        PressMe={() => setCount(0)}
      />
    </section>
  );
}

export default Counter;
