import mongoose, { Schema, model, Model } from 'mongoose';
import { MyTodo } from "../types/helperTypes"

const todoSchema: mongoose.Schema = new Schema({
    task: {
        type: String,
        required: true
    }
})

export const Todo: Model<MyTodo> = model<MyTodo>('Todo', todoSchema);