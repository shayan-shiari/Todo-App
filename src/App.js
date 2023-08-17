import React from "react";
import Main from "./components/Main/Main";
import TaskContextProvider from "./context/TaskContextProvider";
import { Toaster } from "react-hot-toast";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const App = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <TaskContextProvider>
        <div className="app-container">
          <Main />
          <Toaster position="top-center" />
        </div>
      </TaskContextProvider>
    </DndProvider>
  );
};

export default App;
