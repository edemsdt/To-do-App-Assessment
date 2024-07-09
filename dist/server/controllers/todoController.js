"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodo = exports.newTodo = exports.homepage = void 0;
const index_marko_1 = __importDefault(require("../../../views/pages/home/index.marko"));
const Todo_js_1 = require("../../model/Todo.js");
const homepage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allTodos = yield Todo_js_1.Todo.find();
        res.marko(index_marko_1.default, { content: allTodos });
    }
    catch (err) {
        console.log(err);
    }
});
exports.homepage = homepage;
const newTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newTask = new Todo_js_1.Todo({
        task: req.body.task
    });
    try {
        yield Todo_js_1.Todo.create(newTask);
        res.redirect('/');
    }
    catch (err) {
        console.log(err);
    }
});
exports.newTodo = newTodo;
const deleteTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const todoId = req.params.id;
    try {
        const deleted = yield Todo_js_1.Todo.findByIdAndDelete(todoId);
        res.status(204).json(deleted);
    }
    catch (err) {
        console.log(err);
    }
});
exports.deleteTodo = deleteTodo;
