import {Model, model, Schema} from "mongoose";

const todoshema = new Schema({
  name: {
    type: String,
  },
  done: {
    type: Boolean,
  }
});

export const Todo: Model<any> = model("Todo", todoshema);
