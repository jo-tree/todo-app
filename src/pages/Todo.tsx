import { useState } from 'react';
import { Todo, useTodoContext } from '../context/TodoContext';
import Input from '../components/atoms/Input';
import Button from '../components/atoms/Button';
import TodoList from '../components/organisms/TodoList';
import { v4 as uuidv4 } from 'uuid';

export default function TodoPage() {
  const { addTodo } = useTodoContext();

  const [input, setInput] = useState('');

  const handleAddTodo = () => {
    if (input.trim() === '') return;
    const newTodo: Todo = {
      id: uuidv4(),
      text: input.trim(),
      completed: false,
    };
    addTodo(newTodo);
    setInput('');
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      <div className="flex">
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a new todo"
        />
        <Button onClick={handleAddTodo} className="ml-2">
          Add
        </Button>
      </div>
      <TodoList />
    </div>
  );
}
