import {Model, model, Schema} from "mongoose";

const beer_schema = new Schema({
    name: {
        type: String,
    },
    description: {
        type: String
    },
    containt: {
        type: String
    },
    note: {
      type: Number
    }
});

export const Beer: Model<any> = model("Beer", beer_schema);
