import { useState } from "react";
import "./App.css";
import AddUser from "./Components/Users/AddUser"

function App() {
  const onSaveUserInputData = (enteredData) => {
    const userData = {
      id: Math.random().toString(),
      ...enteredData
    }

    console.log(userData, 'userData')
  }

  return (
    <main className="App">
      <AddUser onSaveUserInput={onSaveUserInputData}/>
    </main>
  );
}

export default App;
