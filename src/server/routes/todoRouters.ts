import express from 'express';
import { Router } from 'express';
import { homepage, newTodo, deleteTodo } from '../controllers/todoController.js'

const todoRouter: express.Router = Router();

todoRouter.get('/', homepage);
todoRouter.post('/newTodo', newTodo);
todoRouter.delete('/deleteTodo/:id', deleteTodo)


export default todoRouter;