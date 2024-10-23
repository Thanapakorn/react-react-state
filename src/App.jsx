import "./App.css";
import { useState } from "react";

function App() {
  const [clicked, setClicked] = useState("Greeting Message");

  const handleClick = (click) => {
    setClicked(click);
  };

  return (
    <div className="App">
      <div className="greeting-container">{clicked}</div>
      <div className="buttons">
        <button onClick={() => handleClick("สวัสดี!")}>สวัสดี!</button>
        <button onClick={() => handleClick("Hi!")}>Hi!</button>
        <button onClick={() => handleClick("你好!")}>你好!</button>
      </div>
    </div>
  );
}

export default App;
