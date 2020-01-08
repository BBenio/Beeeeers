import {Model, model, Schema} from "mongoose";

const beer_schema = new Schema({
    id_beer: {
        type: Number,
    },
    name: {
        type: String,
    },
    brand: {
        type: String,
    }
});

export const Beer: Model<any> = model("Beer", beer_schema);
