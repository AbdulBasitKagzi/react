import React, { useState } from "react";
import Users from "./Components/AddUser/User";
import UserList from "./Components/userList/UserList";

function App() {
  // state to handle user list
  const [userList, setUserList] = useState([]);

  // function to handle userslist
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
