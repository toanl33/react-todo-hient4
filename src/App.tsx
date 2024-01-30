import React, { useEffect, useState } from 'react';
import TodoBoxContainer from './components/TodoBoxContainer';
import TodoListContainer from './components/TodoListContainer';
import TodoFooter from './components/TodoFooter';
import { TodoAppContainer } from './styles/TodoAppStyles';
import { Todo } from './schemas/TodoSchema';
import { useTodosFromCookie } from './hooks/useTodosFromCookie';
import Cookies from 'js-cookie';
import { BrowserRouter as Router } from 'react-router-dom';
import { TodoWrapper } from './styles/TodoWrapperStyles';

const TodoApp: React.FC = () => {
  const { todos, isAllCompleted, setTodos } = useTodosFromCookie();
  const [newTodo, setNewTodo] = useState('');

  // Save todos to cookie whenever todos change
  useEffect(() => {
    if (todos.length < 1)
    return;
    Cookies.set('todos', JSON.stringify(todos), { expires: 7 }); // Expires in 7 days
  }, [todos]);

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      const todo: Todo = {
        id: Math.random().toString(),
        text: newTodo.trim(),
        completed: false,
      };
      setTodos((prevTodos) => [...prevTodos, todo]);
      setNewTodo('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // Handle when type and enter
    if (e.key === 'Enter') {
      handleAddTodo();
    }
  };

  const handleToggleTodo = (id: string) => {
    // Toggle checked/unchecked item
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleRemoveTodo = (id: string) => {
    // Create a new array without the item to be deleted
    setTodos((prevTodos) =>
      prevTodos.filter((todo) =>
        todo.id !== id
      )
    );
  };

  const handleRemoveCompletedTodos = () => {
    // Create a new array without the items to be deleted
    setTodos((prevTodos) =>
      prevTodos.filter((todo) =>
        todo.completed !== true
      )
    );
  };

  const handleEditTodo = (id: string, newText: string) => {
    setTodos((prevTodos) => prevTodos.map((todo) =>
      todo.id === id ? { ...todo, text: newText } : todo
    ));
  };

  return (
    <TodoAppContainer>
        <Router>
          <h1>todos</h1>
          <TodoWrapper>
            <TodoBoxContainer todos={todos} newTodo={newTodo} isAllCompletedFromCookie={isAllCompleted} setTodos={setTodos} setNewTodo={setNewTodo} handleKeyDown={handleKeyDown} />
            <TodoListContainer todos={todos} handleRemoveTodo={handleRemoveTodo} handleToggleTodo={handleToggleTodo} handleEditTodo={handleEditTodo} />
            { todos.length > 0 && <TodoFooter todos={todos} handleRemoveCompletedTodos={handleRemoveCompletedTodos}/> }
          </TodoWrapper>
        </Router>
    </TodoAppContainer>
  );
};

export default TodoApp;