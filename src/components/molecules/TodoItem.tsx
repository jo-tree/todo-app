import React from 'react';
import Checkbox from '../atoms/Checkbox';
import { Todo } from '../../context/TodoContext';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle }) => (
  <div className="flex items-center justify-between p-2 border-b">
    <Checkbox checked={todo.completed} onChange={() => onToggle(todo.id)} />
    <span className={todo.completed ? 'line-through text-gray-500' : ''}>
      {todo.text}
    </span>
  </div>
);

export default TodoItem;
