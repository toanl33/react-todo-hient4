import React from 'react';
import { TodoBoxContainerStyled } from '../styles/TodoBoxContainerStyles';
import { BsChevronDown } from 'react-icons/bs';
import { Todo } from '../schemas/TodoSchema';

interface TodoBoxContainerProps {
    todos: Todo[];
    newTodo: string;
    isAllCompletedFromCookie: boolean;
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
    setNewTodo: React.Dispatch<React.SetStateAction<string>>;
    handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const TodoBoxContainer: React.FC<TodoBoxContainerProps> = ({ todos, newTodo, isAllCompletedFromCookie, setTodos, setNewTodo, handleKeyDown }) => {
  const handleToggleAll = () => {
    const allCompleted = todos.every((todo) => todo.completed);
    const updatedTodos = todos.map((todo) => ({
      ...todo,
      completed: !allCompleted,
    }));
    setTodos(updatedTodos);
  };

  return (
    <TodoBoxContainerStyled>
        { todos.length > 0 &&<div className="iconCheckAll" onClick={handleToggleAll}>
          <BsChevronDown size={25} color={ isAllCompletedFromCookie ? '#000' : '#ccc'}/>
        </div> }
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="What needs to be done?"
      />
    </TodoBoxContainerStyled>
  );
};

export default TodoBoxContainer;