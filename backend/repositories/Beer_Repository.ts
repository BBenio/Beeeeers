import {Model, Types} from "mongoose";
import {BeerInterface, BeerModelInterface, BeerPriceModelInterface} from "../models/beer_interface";
import {Beer} from "../models/Beer";
import BeerPrice_Repository from './BeerPrice_Repository';

class Beer_Repository {
    private readonly model: Model<BeerModelInterface>;

    constructor(model: Model<BeerModelInterface>) {
        this.model = model;
    }

    async create(name: string, brand: string, description: string, price: number) {
        const new_beer: BeerInterface = {name, brand, description};
        const beer = new this.model(new_beer);
        const beer_created = await beer.save();
        await BeerPrice_Repository.create(beer_created.id, price);
        return;
    }

    findAll() {
        return this.model.find();
    }

    findById(id: number) {
        return this.model.findById(id);
    }

    deleteById(id: any) {
        return Promise.all([BeerPrice_Repository.deleteByIdBeer(id), this.model.findByIdAndDelete(id)]);
    }

    updateById(id: any, beer: BeerInterface, new_price: number) {
        const query = {_id: id};

        return Promise.all([
            this.model.findOneAndUpdate(query, {$set: {name: beer.name, brand: beer.brand, description: beer.description}}),
            BeerPrice_Repository.create(id, new_price)
        ]);
    }
}

export = new Beer_Repository(Beer);
