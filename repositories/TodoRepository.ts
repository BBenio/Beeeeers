import {Todo} from "../models/Todo";
import {Model} from "mongoose";

class TodoRepository {
    private readonly model: Model<any>;

    constructor(model: Model<any>) {
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

    deleteById(id: number) {
        return this.model.findByIdAndDelete(id);
    }

    updateById(id: number, object: any) {
        const query = {_id: id};
        return this.model.findOneAndUpdate(query, {$set: {name: object.name, done: object.done}});
    }
}

module.exports = new TodoRepository(Todo);
