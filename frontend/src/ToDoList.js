import React, { useState } from 'react';
import './ToDoList.css'; // Import the CSS file

// Assuming you have an API service to fetch/add/delete todos
// import api from './api'; 

const TodoList = () => {
  const [todos, setTodos] = useState([
      // Example initial data
      { _id: 1, text: 'Learn FARM Stack', completed: false },
      { _id: 2, text: 'Build a responsive Todo App', completed: true },
      { _id: 3, text: 'Deploy the app', completed: false },
  ]);
  const [inputValue, setInputValue] = useState('');

  // You would typically fetch todos from your API here
  // useEffect(() => {
  //   api.getTodos().then(response => setTodos(response.data));
  // }, []);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (inputValue.trim() === '') return;
    // This is where you would call your API to add a new todo
    const newTodo = { _id: Date.now(), text: inputValue, completed: false };
    setTodos([...todos, newTodo]);
    setInputValue('');
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo._id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    // This is where you would call your API to delete a todo
    setTodos(todos.filter((todo) => todo._id !== id));
  };

  return (
    <div className="todo-app-container">
      <header>
        <h1>My Todo List</h1>
      </header>
      <form className="todo-form" onSubmit={handleAddTodo}>
        <input type="text" className="todo-input" value={inputValue} onChange={handleInputChange} placeholder="Add a new task..." />
        <button type="submit" className="todo-button">Add</button>
      </form>
      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo._id} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
            <span className="todo-text" onClick={() => toggleTodo(todo._id)}>{todo.text}</span>
            <button className="delete-button" onClick={() => deleteTodo(todo._id)}>×</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;