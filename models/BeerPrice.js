"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var beer_price_schema = new mongoose_1.Schema({
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
exports.BeerPrice = mongoose_1.model("BeerPrice", beer_price_schema);
