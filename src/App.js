import React from "react";
import './App.css';

function App() {
 let input = document.getElementById("Input").value;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] == input) {
      console.log(arr[i]);
      return;
    }
  }
  console.log('value not found');
  return (
    <>
    <div className="App">
      <button onclick="beginhere()">click</button>
      <input id='Input'>
    </div>
    </>
  );
}

export default App;
