import React, { useState } from "react";
import Users from "./Components/AddUser/User";
import UserList from "./Components/userList/UserList";

function App() {
  const [userList, setUserList] = useState([]);
  const handleUserList = (uName, uAge) => {
    setUserList((perviousValue) => {
      return [
        ...perviousValue,
        { Name: uName, Age: uAge, id: Math.random().toString() },
      ];
    });
  };
  return (
    <div>
      <Users onAddUser={handleUserList} />
      <UserList users={userList} />
    </div>
  );
}

export default App;
