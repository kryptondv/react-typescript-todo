import { link } from 'fs';
import React from 'react';

interface Props {
  items: {id: string, text: string}[];
}

const TodoList: React.FC<Props> = ({items}) => {
  
  return (
    <ul>
      {items.map(({ id, text }) => (
        <li key={id}>{text}</li>
      ))}
    </ul>
  );
};

export default TodoList;
