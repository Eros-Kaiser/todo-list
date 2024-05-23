import { Request, Response } from 'express';
import { getAllTodos, createTodo, updateTodo, deleteTodo } from '../services/todoService';

export const getTodos = (req: Request, res: Response) => {
    const todos = getAllTodos();
    res.status(200).json(todos);
};

export const createTodoHandler = (req: Request, res: Response) => {
    const { title, description } = req.body;
    const newTodo = createTodo(title, description);
    res.status(201).json(newTodo);
};

export const updateTodoHandler = (req: Request, res: Response) => {
    const { id } = req.params;
    const updatedTodo = updateTodo(id, req.body);
    if (!updatedTodo) {
        return res.status(404).json({ error: 'Todo not found' });
    }
    res.status(200).json(updatedTodo);
};

export const deleteTodoHandler = (req: Request, res: Response) => {
    const { id } = req.params;
    const success = deleteTodo(id);
    if (!success) {
        return res.status(404).json({ error: 'Todo not found' });
    }
    res.status(200).json({ message: 'Todo marked as inactive' });
};
