import {Model, model, Schema} from "mongoose";

const beer_price_schema = new Schema({
    id_beer: {
        type: Number,
    },
    price: {
        type: Number,
    },
    date: {
        type: Date,
    }
});

export const BeerPrice: Model<any> = model("BeerPrice", beer_price_schema);
