import { useState, useEffect } from 'react';
import './App.css';

interface Todo {
  description: string;
  completed: boolean;
  createdAt: string;
  completedAt?: string;
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
      description: todoDescription,
      completed: false,
      createdAt: new Date().toLocaleString(),
      completedAt: undefined
    };
    setTodoList(prevList => [...prevList, newTodo]);
    setTodoDescription('');
  };

  const toggleComplete = (index: number) => {
    setTodoList(prevList => {
      const updatedList = [...prevList];
      const item = { ...updatedList[index] };
      item.completed = !item.completed;
      item.completedAt = item.completed ? new Date().toLocaleString() : undefined;
      updatedList.splice(index, 1);
      return item.completed ? [...updatedList, item] : [item, ...updatedList];
    });
  };

  const resetList = () => {
    setTodoList([]);
    localStorage.removeItem('todos');
  };

  return (
    <div style={{ border: '2px solid gray', padding: 10 }}>
      <div>
        <h1>Add ToDo</h1>
        <input
          type='text'
          value={todoDescription}
          onChange={handleChange}
          style={{ marginRight: 10 }}
        />
        <button onClick={handleClick}>Add Item</button>
        <button onClick={resetList} style={{ marginLeft: 10, backgroundColor: 'red', color: 'white' }}>Reset List</button>
      </div>

      <div><h1>ToDos Here:</h1></div>
      <ul>
        {todoList.map((todo, index) => (
          <li key={index} style={{ color: todo.completed ? 'red' : 'white' }}>
            <input
              type='checkbox'
              checked={todo.completed}
              onChange={() => toggleComplete(index)}
            />
            {todo.description} (Created: {todo.createdAt})
            {todo.completed && <span> (Completed: {todo.completedAt})</span>}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;