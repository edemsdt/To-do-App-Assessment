"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todoController_js_1 = require("../controllers/todoController.js");
const todoRouter = (0, express_1.Router)();
todoRouter.get('/', todoController_js_1.homepage);
todoRouter.post('/newTodo', todoController_js_1.newTodo);
todoRouter.delete('/deleteTodo/:id', todoController_js_1.deleteTodo);
exports.default = todoRouter;
