import React, { useState } from 'react';
import TodoTable from './TodoTable';
import './App.css';

const initialState = { description: '', date: '' };

function App() {
  const [todo, setTodo] = useState({ description: '', date: '' });
  const [todos, setTodos] = useState([initialState]);

  const inputChanged = (event) => {
    setTodo({ ...todo, [event.target.name]: event.target.value });
  };

  const addTodo = () => {
    setTodos([...todos, todo]);
    setTodo({ description: '', date: '' });
  };

  const deleteTodo = (row) => {
    setTodos(todos.filter((todo, index) => index !== row));
  };

  const clearTodo = () => {
    setTodos([initialState]);
  };

  return (
    <div className="App">
      <input
        placeholder="Description"
        name="description"
        value={todo.description}
        onChange={inputChanged}
      />
      <input
        placeholder="Date"
        name="date"
        value={todo.date}
        onChange={inputChanged}
      />
      <button onClick={addTodo}>Add</button>
      <button onClick={clearTodo}>Clear</button>
      <TodoTable todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
