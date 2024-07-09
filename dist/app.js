"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('@marko/compiler/register');
const express_1 = __importDefault(require("express"));
const express_2 = __importDefault(require("@marko/express"));
const path_1 = __importDefault(require("path"));
const dotenv_1 = require("dotenv");
const morgan_1 = __importDefault(require("morgan"));
const mongoose_1 = __importDefault(require("mongoose"));
const db_js_1 = require("./database/db.js");
const todoRouters_js_1 = __importDefault(require("./server/routes/todoRouters.js"));
// Set up .env
(0, dotenv_1.config)();
const isProduction = process.env.NODE_ENV === 'production';
const app = (0, express_1.default)();
const PORT = Number(process.env.PORT) || 4040;
// Connect to DB
(0, db_js_1.dbConnect)();
// Enabling Marko
app.use((0, express_2.default)());
// Express middlewares
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// Static files
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
// Logger
app.use((0, morgan_1.default)('tiny'));
// Set views directory
app.set('views', '../views');
// Routes
app.get('/', todoRouters_js_1.default);
app.post('/newTodo', todoRouters_js_1.default);
app.delete('/deleteTodo/:id', todoRouters_js_1.default);
// Start server
mongoose_1.default.connection.once('open', () => {
    app.listen(PORT, () => {
        console.log(`Server is listening on http://localhost:${PORT}`);
    });
});
