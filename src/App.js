import React from "react";
import { TodoList } from "./components/TodoList";
import { TodoForm } from "./components/TodoForm";
import { useTodo } from "./hooks/useTodo";
import "./App.css";

function App() {
  const {
    todos,
    addTodo,
    deleteTodo,
    toggleTodo,
    countTodos,
    countPendingTodos,
  } = useTodo();

  return (
    <div className="App-header">
      <h2>List of Todo Application</h2>
      <div>
        <TodoList todos={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
        <TodoForm addTodo={addTodo} />
        <p>Count: {countTodos()}</p>
        <p>Pending: {countPendingTodos()}</p>
      </div>
    </div>
  );
}

export default App;

