import React from 'react';
import TodoItem from './TodoItem';
import { TodoListContainerStyled } from '../styles/TodoListContainerStyles';
import { Todo } from '../schemas/TodoSchema';
import { Route, Routes } from 'react-router-dom';

interface TodoListContainerProps {
  todos: Todo[];
  handleToggleTodo: (id: string) => void;
  handleRemoveTodo: (id: string) => void;
  handleEditTodo: (id: string, newText: string) => void;
}

const TodoListContainer: React.FC<TodoListContainerProps> = ({ todos, handleToggleTodo, handleRemoveTodo, handleEditTodo }) => {
  const AllComponent = () => {
    return <>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} handleToggleTodo={handleToggleTodo} handleRemoveTodo={handleRemoveTodo} handleEditTodo={handleEditTodo}/>
      ))}
    </>;
  };
  const ActiveComponent = () => {
    return <>
      {todos.filter((todo) => todo.completed === false).map((todo) => (
        <TodoItem key={todo.id} todo={todo} handleToggleTodo={handleToggleTodo} handleRemoveTodo={handleRemoveTodo} handleEditTodo={handleEditTodo}/>
      ))}
    </>;
  };
  const CompletedComponent = () => {
    return <>
      {todos.filter((todo) => todo.completed === true).map((todo) => (
        <TodoItem key={todo.id} todo={todo} handleToggleTodo={handleToggleTodo} handleRemoveTodo={handleRemoveTodo} handleEditTodo={handleEditTodo}/>
      ))}
    </>;
  };
  return (
    <TodoListContainerStyled>
      <Routes>
        <Route path="/" Component={AllComponent} />
        <Route path="/active" Component={ActiveComponent} />
        <Route path="/completed" Component={CompletedComponent} />
      </Routes>
    </TodoListContainerStyled>
  );
};

export default TodoListContainer;