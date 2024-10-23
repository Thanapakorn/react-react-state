import "./App.css";
import { useState } from "react";


function App() {
  const [message,setHelloMessage] = useState("Greeting Message");

  const Sayhello = (text) => {
  return setHelloMessage(text);
  }

  return (
    <div className="App">
      <div className="greeting-container">{message}</div>
      <div className="buttons">
        <button onClick={()=>Sayhello("สวัสดี!")}> สวัสดี!</button>
        <button onClick={()=>Sayhello("Hi!")}> Hi!</button>
        <button onClick={()=>Sayhello("你好!")}> 你好!</button>
      </div>
    </div>
  );
}

export default App;
