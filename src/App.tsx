import { useState, useEffect } from 'react';
import './App.css';

interface Todo {
  description: string;
}

function App() {
  const [todoDescription, setTodoDescription] = useState('');
  const [todoList, setTodoList] = useState<Todo[]>(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todoList));
  }, [todoList]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoDescription(e.target.value);
  };

  const handleClick = () => {
    if (!todoDescription.trim()) return;
    const newTodo: Todo = {
      description: todoDescription
    };
    setTodoList(prevList => [...prevList, newTodo]);
    setTodoDescription('');
  };

  return (
    <div style={{ border: '1px solid red', padding: 10 }}>
      <div>
        <input
          type='text'
          value={todoDescription}
          onChange={handleChange}
          style={{ marginRight: 10 }}
        />
        <button onClick={handleClick}>Add Item</button>
      </div>

      <div>TODOs Here:</div>
      <ul>
        {todoList.map((todo, index) => (
          <li key={index} style={{ color: 'white' }}>
            {todo.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;