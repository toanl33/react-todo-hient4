import React from 'react';
import { TodoFooterStyled, FilterBox } from '../styles/TodoFooterStyles';
import { Todo } from '../schemas/TodoSchema';
import { Link, useLocation } from 'react-router-dom';

interface TodoFooterProps {
  todos: Todo[];
  handleRemoveCompletedTodos: () => void;
}

const TodoFooter: React.FC<TodoFooterProps> = ({ todos, handleRemoveCompletedTodos }) => {
  const completedTodoCount = todos.filter(todo => !todo.completed).length;
  const location = useLocation();
    return (
      <TodoFooterStyled>
        <span>{completedTodoCount} item{completedTodoCount > 1 && 's'} left!</span>
        <FilterBox>
          <div>
            <nav>
              <ul>
                <li className={location.pathname === '/' ? 'active' : ''}>
                  <Link to="/">All</Link>
                </li>
                <li className={location.pathname === '/active' ? 'active' : ''}>
                  <Link to="/active">Active</Link>
                </li>
                <li className={location.pathname === '/completed' ? 'active' : ''}>
                  <Link to="/completed">Completed</Link>
                </li>
              </ul>
            </nav>
          </div>
        </FilterBox>
        <span className='asLink' onClick={() => handleRemoveCompletedTodos()}>Clear completed</span>
      </TodoFooterStyled>
    );
  };
  
  export default TodoFooter;