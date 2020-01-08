"use strict";
var Todo_1 = require("../models/Todo");
var TodoRepository = /** @class */ (function () {
    function TodoRepository(model) {
        this.model = model;
    }
    TodoRepository.prototype.create = function (name) {
        var newTodo = { name: name, done: false };
        var todo = new this.model(newTodo);
        return todo.save();
    };
    TodoRepository.prototype.findAll = function () {
        return this.model.find();
    };
    TodoRepository.prototype.findById = function (id) {
        return this.model.findById(id);
    };
    TodoRepository.prototype.deleteById = function (id) {
        return this.model.findByIdAndDelete(id);
    };
    TodoRepository.prototype.updateById = function (id, object) {
        var query = { _id: id };
        return this.model.findOneAndUpdate(query, { $set: { name: object.name, done: object.done } });
    };
    return TodoRepository;
}());
module.exports = new TodoRepository(Todo_1.Todo);
