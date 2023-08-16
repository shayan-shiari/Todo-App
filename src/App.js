import React from "react";
import Main from "./components/Main/Main";
import TaskContextProvider from "./context/TaskContextProvider";

const App = () => {
  return (
    <TaskContextProvider>
      <div className="app-container">
        <Main />
      </div>
    </TaskContextProvider>
  );
};

export default App;
