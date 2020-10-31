import { link } from 'fs';
import React from 'react';
import NewTodo from './NewTodo';

interface Props {
  items: {id: string, text: string}[];
}

const TodoList: React.FC<Props> = ({items}) => {
  
  return (
    <ul>
      <NewTodo />
      {items.map(({ id, text }) => (
        <li key={id}>{text}</li>
      ))}
    </ul>
  );
};

export default TodoList;
