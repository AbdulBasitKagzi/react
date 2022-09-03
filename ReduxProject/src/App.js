import React from "react";
import Counter from "./components/Counter";
import Auth from "./components/Auth";
import Header from "./components/Header";
import { useSelector } from "react-redux";
function App() {
  const isAuth = useSelector((state) => state.auth.isAuth);

  return (
    <React.Fragment>
      {!isAuth && <Header />}
      {isAuth && <Header />}
      <Auth />
      <Counter />;
    </React.Fragment>
  );
}

export default App;
