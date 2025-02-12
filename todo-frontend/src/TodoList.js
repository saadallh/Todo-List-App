import React, { useState, useEffect } from 'react';
import './TodoList.css';

function TodoList() {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');

    useEffect(() => {
        fetchTodos();
    }, []);

    const fetchTodos = async () => {
        const response = await fetch('http://localhost:8080/api/todos');
        const data = await response.json();
        setTodos(data);
    };

    const addTodo = async () => {
        if (newTodo.trim()) {
            await fetch('http://localhost:8080/api/todos', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ title: newTodo, completed: false })
            });
            setNewTodo('');
            fetchTodos();
        }
    };

    const toggleTodo = async (id) => {
        await fetch(`http://localhost:8080/api/todos/${id}`, { method: 'PUT' });
        fetchTodos();
    };

    const deleteTodo = async (id) => {
        await fetch(`http://localhost:8080/api/todos/${id}`, { method: 'DELETE' });
        fetchTodos();
    };

    return (
        <div className="todo-container">
            <h1>Todo List</h1>
            <div className="todo-input-container">
                <input
                    type="text"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    placeholder="Enter a new task"
                    className="todo-input"
                />
                <button onClick={addTodo} className="add-btn">Add Todo</button>
            </div>

            <ul className="todo-list">
                {todos.map(todo => (
                    <li key={todo.id} className="todo-item">
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => toggleTodo(todo.id)}
                            className="todo-checkbox"
                        />
                        <span className={`todo-title ${todo.completed ? 'completed' : ''}`}>
                            {todo.title}
                        </span>
                        <button onClick={() => deleteTodo(todo.id)} className="delete-btn">Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
