import React from 'react';

interface Props {
  items: { id: string; text: string }[];
  handleDeleteTodo: (id: string) => void;
}

const TodoList: React.FC<Props> = ({ items, handleDeleteTodo }) => {
  return (
    <ul>
      {items.map(({ id, text }) => (
        <li key={id}>
          <span>{text}</span>
          <button onClick={() => handleDeleteTodo(id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
