import { Outlet } from "react-router-dom";
import React from "react";
function App() {
  return (
    <>
      <div>This is App Component</div>
      <Outlet></Outlet>
    </>
  );
}

export default App;
