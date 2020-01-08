"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var beer_schema = new mongoose_1.Schema({
    name: {
        type: String,
    },
    brand: {
        type: String,
    },
    id_beer: {
        type: Number,
    }
});
exports.Beer = mongoose_1.model("Beer", beer_schema);
