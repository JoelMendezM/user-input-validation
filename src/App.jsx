import { useState } from "react";
import "./App.css";
import AddUser from "./Components/Users/AddUser";
import UsersList from "./Components/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHander = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <main className="App">
      <AddUser onAddUser={addUserHander} />
      <UsersList users={usersList} />
    </main>
  );
}

export default App;
