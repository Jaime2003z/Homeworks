import { useState } from "react";

export const TodoForm = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState('');

  const handleSubmit = (evt) => {
    evt.preventDefault();
    addTodo(newTodo);
    setNewTodo('');
  };
  
  return (
    <>
      <h3>Add ToDo</h3>
      <br />
      <form onSubmit={handleSubmit}>
        <input value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
        <button>Add</button>
      </form>
    </>
  );
};