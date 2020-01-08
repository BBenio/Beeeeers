import {Model, model, Schema} from "mongoose";
import {TodoModelInterface} from "./todo_interface";

const todo_schema = new Schema({
  name: {
    type: String,
  },
  done: {
    type: Boolean,
  }
});

export const Todo: Model<TodoModelInterface> = model("Todo", todo_schema);
