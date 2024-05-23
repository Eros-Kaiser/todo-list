import { Router } from 'express';
import { getTodos, createTodoHandler, updateTodoHandler, deleteTodoHandler } from '../controllers/todoController';

const router = Router();

router.get('/todos', getTodos);
router.post('/todos', createTodoHandler);
router.put('/todos/:id', updateTodoHandler);
router.delete('/todos/:id', deleteTodoHandler);

export default router;
