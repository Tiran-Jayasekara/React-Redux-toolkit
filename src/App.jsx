import { useState } from "react";
import "./App.css";
import UserView from "./features/user/UserView";
import CakeView from "./features/cake/cakeView";
import IceCreamView from "./features/iceCream/IceCreamView";

function App() {
  return (
    <>
      <CakeView />
      <IceCreamView />
      <UserView />
    </>
  );
}

export default App;
