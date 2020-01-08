import express from "express";
import {TodoInterface} from "../models/todo_interface";

const repository = require("../repositories/Todo_Repository");
const app = express.Router();

app.get("/", (req, res) => {
    repository.findAll()
        .then((todos: TodoInterface[]) => {
            res.json(todos)
        })
        .catch((error: Error) => console.log(error));
});

app.post("/", (req, res) => {
    const {name} = req.body;
    repository.create(name)
        .then((todo: TodoInterface) => {
            res.json(todo);
        }).catch((error: Error) => console.log(error));
});

app.delete("/:id", (req, res) => {
    const id = req.params;
    repository.deleteById(id).then((ok: any) => {
        console.log(ok);
        console.log("Delete record " + id + "done.");
        res.status(200).json([]);
    }).catch((error: any) => console.log(error));
});

app.put("/:id", (req, res) => {
    const id = req.params;
    const todo: TodoInterface = {name: req.body.name, done: req.body.done};
    repository.updateById(id, todo)
        .then(res.status(200).json([]))
        .catch((error: any) => console.log(error))
});

export = app;
