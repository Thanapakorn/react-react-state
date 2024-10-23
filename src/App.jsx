import "./App.css";
import { useState } from "react";
function App() {
  const [mgs, setmsg] = useState("Greeting Message");

  const handleMsg = (mgs) => {
    setmsg(mgs);
  };
  return (
    <div className="App">
      <div className="greeting-container">{mgs}</div>
      <div className="buttons">
        <button onClick={() => handleMsg("สวัสดี!")}>สวัสดี!</button>
        <button onClick={() => handleMsg("Hi!")}>Hi!</button>
        <button onClick={() => handleMsg("你好!")}>你好!</button>
      </div>
    </div>
  );
}

export default App;
