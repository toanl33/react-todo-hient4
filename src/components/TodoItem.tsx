import React, { useState } from 'react';
import { TodoItemStyled } from '../styles/TodoItemStyles';
import { Todo } from '../schemas/TodoSchema';
import { LiaTimesSolid } from 'react-icons/lia';

interface TodoItemProps {
  todo: Todo;
  handleToggleTodo: (id: string) => void;
  handleRemoveTodo: (id: string) => void;
  handleEditTodo: (id: string, newText: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, handleToggleTodo, handleRemoveTodo, handleEditTodo }) => {
  const [isDoubleClickToEdit, setIsDoubleClickToEdit] = useState<boolean>(false);
  const handleBlur = () => {
    // When losing focus, save the edited text and exit edit mode
    setIsDoubleClickToEdit(false);
  };

  const handleKeyDownToEdit = (e: React.KeyboardEvent<HTMLInputElement>, todoId: string) => {
    // Handle when type and enter
    if (e.key === 'Enter') {
      handleEditTodo(todoId, (e.target as HTMLInputElement).value);
    }
  };

  return (
    <TodoItemStyled completed={todo.completed} isEditing={isDoubleClickToEdit}>
      {
        !isDoubleClickToEdit ? 
          <div className='itemsWrapper'>
            <div className="radioCheckDone">
              <div className='labelWrapper'>
                <input type="checkbox" name={`checkDone_${todo.id}`} id={`checkDone_${todo.id}`} onClick={() => handleToggleTodo(todo.id)} defaultChecked={todo.completed ? true : false} />
                <label htmlFor={`checkDone_${todo.id}`} className='labelForCheckbox'></label>
              </div>
            </div>
            <div className="itemText">
              <div className='showText' onDoubleClick={() => setIsDoubleClickToEdit(true)}>{todo.text}</div>
              <div className="removeButton" onClick={() => handleRemoveTodo(todo.id)}>
                <LiaTimesSolid size={15} />
              </div>
            </div>
          </div> :
          <div className='itemsEditWrapper'>
            <input
              type="text"
              defaultValue={todo.text}
              // onChange={handleChange}
              onKeyDown={(e) => handleKeyDownToEdit(e, todo.id)}
              onBlur={handleBlur}
              autoFocus
            />
          </div>
      }
    </TodoItemStyled>
  );
};

export default TodoItem;
