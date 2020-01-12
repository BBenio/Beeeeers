import {Model, model, Schema} from "mongoose";

const beer_schema = new Schema({
    id_beer: {
        type: String,
    },
    name: {
        type: String,
    },
    brand: {
        type: String,
    },
    description: {
        type: String
    }
});

export const Beer: Model<any> = model("Beer", beer_schema);
