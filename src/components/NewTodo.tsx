import React, { useState } from 'react';

interface Props {
  handleAddTodo: (text: string) => void;
}

const NewTodo: React.FC<Props> = ({ handleAddTodo }) => {
  const [todoText, setTodoText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleAddTodo(todoText);
    setTodoText('');
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
