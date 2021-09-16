import React, {createContext, useContext, useState} from "react";

const AppTodoContext = createContext();

const AppTodoProvider = ({children}) => {
  const [taskList, setTaskList] = useState([]);
  const value = {
    taskList,
    setTaskList
  }

  return (
    <AppTodoContext.Provider value={value}>
      {
        children 
      }
    </AppTodoContext.Provider>
  )
}

const useAppTodo = () => {
  return useContext(AppTodoContext);
}

export {AppTodoProvider, useAppTodo};