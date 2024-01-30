import { useState, useEffect } from 'react';
import { Todo } from '../schemas/TodoSchema';
import Cookies from 'js-cookie';

export const useTodosFromCookie = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isAllCompleted, setIsAllCompleted] = useState<boolean>(false);

  useEffect(() => {
    const savedTodos = Cookies.get('todos');
    if (savedTodos) {
      try {
        const parsedTodos = JSON.parse(savedTodos);
        if (Array.isArray(parsedTodos)) {
        const allCompleted = parsedTodos.filter((todo) => todo.completed);
          setTodos(parsedTodos);
          setIsAllCompleted(allCompleted ? true : false);
        }
      } catch (error) {
        console.error('Error parsing todos from cookie', error);
      }
    }
  }, []);

  return { todos, isAllCompleted, setTodos, setIsAllCompleted };
};