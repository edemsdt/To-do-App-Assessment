import { Request, Response } from 'express';
import indexTemplate from '../../../views/pages/home/index.marko';
import { Todo } from '../../model/Todo.js';
import { MyTodo, NewTask } from '../../types/helperTypes'


export const homepage = async (req: Request, res: Response) => {
    try {
        const allTodos: MyTodo[] = await Todo.find();
        res.marko(indexTemplate, { content: allTodos})
    } catch (err) {
        console.log(err)
    }
}


export const newTodo = async(req: Request, res: Response) => {
    const newTask: NewTask = new Todo({
        task: req.body.task
    })
    try {
        await Todo.create(newTask);
        res.redirect('/');
    } catch (err) {
        console.log(err);
    }
}


export const deleteTodo = async (req: Request, res: Response) => {
    const todoId: string = req.params.id;

    try {
        const deleted = await Todo.findByIdAndDelete(todoId);
        res.status(204).json(deleted);
    } catch (err) {
        console.log(err)
    }
}