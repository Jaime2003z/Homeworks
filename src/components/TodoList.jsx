import styles from '../styles/TodoList.module.css'

export const TodoList = ({ todos, deleteTodo, toggleTodo }) => {
  return (
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              className={`${todo.done ? styles.done : ""}`}
              onClick={() => toggleTodo(todo.id)}
            >
              {todo.description}
            </span>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};