import { ITodo } from '../models/Todo';
import { readTodos, writeTodos } from '../repositories/todoRepository';
import { v4 as uuidv4 } from 'uuid';

export const getAllTodos = (): ITodo[] => {
    return readTodos().filter(todo => todo.isActive);
};

export const createTodo = (title: string, description: string): ITodo => {
    const todos = readTodos();
    const newTodo: ITodo = {
        id: uuidv4(),
        title,
        description,
        completed: false,
        isActive: true,
        createdAt: new Date()
    };
    todos.push(newTodo);
    writeTodos(todos);
    return newTodo;
};

export const updateTodo = (id: string, updates: Partial<ITodo>): ITodo | null => {
    const todos = readTodos();
    const index = todos.findIndex(todo => todo.id === id);
    if (index === -1) {
        return null;
    }
    todos[index] = { ...todos[index], ...updates };
    writeTodos(todos);
    return todos[index];
};

export const deleteTodo = (id: string): boolean => {
    const todos = readTodos();
    const index = todos.findIndex(todo => todo.id === id);
    if (index === -1) {
        return false;
    }
    todos[index].isActive = false;
    writeTodos(todos);
    return true;
};
