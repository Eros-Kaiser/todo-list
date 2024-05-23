import fs from 'fs';
import { ITodo } from '../models/Todo';

const DATA_FILE = './data/todos.json';

export const readTodos = (): ITodo[] => {
    try {
        const data = fs.readFileSync(DATA_FILE, 'utf8');
        return JSON.parse(data) as ITodo[];
    } catch (error) {
        return [];
    }
};

export const writeTodos = (todos: ITodo[]): void => {
    fs.writeFileSync(DATA_FILE, JSON.stringify(todos, null, 2), 'utf8');
};
