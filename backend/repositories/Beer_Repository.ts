import {Model} from "mongoose";
import {BeerInterface, BeerModelInterface} from "../models/beer_interface";
import {Beer} from "../models/Beer";

class Beer_Repository {
    private readonly model: Model<BeerModelInterface>;

    constructor(model: Model<BeerModelInterface>) {
        this.model = model;
    }

    create(name: string) {
        const new_beer = {name, done: false};
        const beer = new this.model(new_beer);

        return beer.save();
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

    updateById(id: any, object: BeerInterface) {
        const query = {_id: id};
        return this.model.findOneAndUpdate(query, {$set: {id_beer: id, name: object.name, brand: object.brand} as BeerInterface});
    }
}

export = new Beer_Repository(Beer);
