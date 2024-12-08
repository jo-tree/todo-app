import React from 'react';
import { Todo, useTodoContext } from '../../context/TodoContext';
import TodoItem from '../molecules/TodoItem';

const TodoList: React.FC = () => {
  const { todos, toggleTodo } = useTodoContext();

  return (
    <div className="mt-4">
      {todos.map((todo: Todo) => (
        <TodoItem key={todo.id} todo={todo} onToggle={toggleTodo} />
      ))}
    </div>
  );
};

export default TodoList;
