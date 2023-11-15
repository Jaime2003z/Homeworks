import React, { useReducer } from "react";
import { TodoAdd } from "../todoAdd/TodoAdd";
import { TodoList } from "../todoList/TodoList";
import { TodoReducer } from "../todoReducer/TodoReducer";

const initialState = [
    {
        id: new Date().getTime(),
        description: "Hacer los challenges",
        done: false
    }
]

export const TodoApp = () => {
    const [todos, dispatch] = useReducer(TodoReducer, initialState);

    const handleNewTodo = (todo) => {
        const action = {
            type: "[TODO] ADD TODO",
            payload: todo
        }
        dispatch(action);
    }

    return (
        <>
            <h3>TodoApp: 10 Pendientes: 2</h3>
            <hr />

            <div className="row">
                <div className="col-7">
                    <TodoList todos={todos} />
                </div>
                <div className="col-5">
                    <TodoAdd onNewTodo={handleNewTodo} />
                </div>
            </div>
        </>
    )
}