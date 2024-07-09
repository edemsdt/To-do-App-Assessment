require('@marko/compiler/register')

import express from 'express';
import markoMiddleware from '@marko/express';
import path from 'path';
import { config } from 'dotenv';
import morgan from 'morgan';
import mongoose from 'mongoose';
import { dbConnect } from './database/db.js';
import todoRouter from './server/routes/todoRouters.js'

// Set up .env
config();

const isProduction: boolean = process.env.NODE_ENV === 'production';
const app: express.Express = express();
const PORT: number = Number(process.env.PORT) || 4040;

// Connect to DB
dbConnect();

// Enabling Marko
app.use(markoMiddleware());

// Express middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static files
app.use(express.static(path.join(__dirname, 'public')))

// Logger
app.use(morgan('tiny'));

// Set views directory
app.set('views', '../views');


// Routes
app.get('/', todoRouter)
app.post('/newTodo', todoRouter)
app.delete('/deleteTodo/:id', todoRouter)

// Start server
mongoose.connection.once('open', () => {
    app.listen(PORT, () => {
        console.log(`Server is listening on http://localhost:${PORT}`);
    })
})
