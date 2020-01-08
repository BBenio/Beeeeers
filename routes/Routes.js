"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var express_1 = __importDefault(require("express"));
var repository = require("../repositories/TodoRepository");
var app = express_1.default.Router();
app.get("/", function (req, res) {
    repository.findAll()
        .then(function (todos) {
        res.json(todos);
    })
        .catch(function (error) { return console.log(error); });
});
app.post("/", function (req, res) {
    var name = req.body.name;
    repository.create(name)
        .then(function (todo) {
        res.json(todo);
    }).catch(function (error) { return console.log(error); });
});
app.delete("/:id", function (req, res) {
    var id = req.params;
    repository.deleteById(id).then(function (ok) {
        console.log(ok);
        console.log("Delete record " + id + "done.");
        res.status(200).json([]);
    }).catch(function (error) { return console.log(error); });
});
app.put("/:id", function (req, res) {
    var id = req.params;
    var todo = { name: req.body.name, done: req.body.done };
    repository.updateById(id, todo)
        .then(res.status(200).json([]))
        .catch(function (error) { return console.log(error); });
});
module.exports = app;
