import React, { useState } from "react";

function App() {
 let now = new Date().toLocaleTimeString();

  let [time,setTime]=useState(now)
setInterval(showTime,4000)

function showTime(){
 let newTime = new Date().toLocaleTimeString();
 setTime(newTime)
}

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={showTime}>Get Time</button>
    </div>
  );
}

export default App;
