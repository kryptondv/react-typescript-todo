import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import NewTodo from './components/NewTodo';
import TodoList from './components/TodoList';
import { Todo } from './todo.model';

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddTodo = (text: string) => {
    setTodos(prevTodos => [...prevTodos, { id: uuidv4(), text }]);
  };

  const handleDeleteTodo = (id: string) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  };

  return (
    <div className="App">
      <NewTodo handleAddTodo={handleAddTodo} />
      <TodoList items={todos} handleDeleteTodo={handleDeleteTodo} />
    </div>
  );
};

export default App;
