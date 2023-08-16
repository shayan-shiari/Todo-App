import React from "react";
import Main from "./components/Main/Main";
import TaskContextProvider from "./context/TaskContextProvider";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <TaskContextProvider>
      <div className="app-container">
        <Main />
        <Toaster position="top-center" />
      </div>
    </TaskContextProvider>
  );
};

export default App;
