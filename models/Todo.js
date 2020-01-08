"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var todo_schema = new mongoose_1.Schema({
    name: {
        type: String,
    },
    done: {
        type: Boolean,
    }
});
exports.Todo = mongoose_1.model("Todo", todo_schema);
