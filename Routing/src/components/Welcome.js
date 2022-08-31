import React from "react";
import { Route, Routes } from "react-router-dom";
function Welcome() {
  return (
    <div>
      <h2> Welcome AbdulBasit</h2>
      <Routes>
        <Route path="/welcome/new-user">console.log("hello new user")</Route>
      </Routes>
    </div>
  );
}

export default Welcome;
