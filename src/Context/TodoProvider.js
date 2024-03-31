import React, { createContext, useEffect, useReducer } from "react";

export const TodoContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case "DELETE":
      return {
        ...state,
        todos: state.todos.filter((todos, index) => index !== action.payload.index),
      };
    default:
      return state;
  }
};

const TodoProvider = (props) => {
 //we first attempt to retrieve todos from local storage...
  const storedTodos = JSON.parse(localStorage.getItem("todos"));

 //thenn we initialize the state with these todos if they exist otherwise we set the state to an empty array...
  const [state, dispatch] = useReducer(reducer, { todos: storedTodos || [] });

 //useEffect hook is used to update local storage whenever the state.todos change....this will ensure that the listing data is not removed from the page when the page is refreshed.
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(state.todos));
  }, [state.todos]);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
