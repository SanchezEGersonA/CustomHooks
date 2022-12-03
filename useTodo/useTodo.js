import { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodo = (initialState = []) => {

    const [todos, dispatch] = useReducer(todoReducer, initialState, init);

    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);
    
    const handleNewTodo = (todo) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        };
        dispatch(action);
    }

    const handleRemoveTodo = (id) => {
        dispatch({
            type: '[TODO] Remove Todo',
            payload: id
        });
    }

    const handleToggleTodo = (id) => {
        dispatch({
            type: '[TODO] Toggle Todo',
            payload: id
        });
    }

    const todoCount = () => {
        return todos.length;
    }

    const pendingTodoCount = () => {
        return todos.filter(todo => !todo.done).length;
    }

    return { todos, handleNewTodo, handleRemoveTodo, handleToggleTodo, todoCount, pendingTodoCount };

}