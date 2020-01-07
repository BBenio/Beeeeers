import {Todo} from "../models/Todo";
import {Model} from "mongoose";
import {TodoInterface, TodoModelInterface} from "../models/todo_interface";

class TodoRepository {
    private readonly model: Model<TodoModelInterface>;

    constructor(model: Model<TodoModelInterface>) {
        this.model = model;
    }

    create(name: string) {
        const newTodo = {name, done: false};
        const todo = new this.model(newTodo);

        return todo.save();
    }

    findAll() {
        return this.model.find();
    }

    findById(id: number) {
        return this.model.findById(id);
    }

    deleteById(id: any) {
        return this.model.findByIdAndDelete(id);
    }

    updateById(id: any, object: TodoInterface) {
        const query = {_id: id};
        return this.model.findOneAndUpdate(query, {$set: {name: object.name, done: object.done}});
    }
}

export = new TodoRepository(Todo);
