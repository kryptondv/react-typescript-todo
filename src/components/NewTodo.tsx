import React, { useState } from 'react';

const NewTodo: React.FC = () => {
  const [todoText, setTodoText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(todoText);
  };

  return (
    <form onSubmit={e => handleSubmit(e)}>
      <div>
        <label htmlFor="todo-text">Todo Text</label>
        <input
          type="text"
          id="todo-text"
          value={todoText}
          onChange={e => setTodoText(e.target.value)}
        />
      </div>
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default NewTodo;
