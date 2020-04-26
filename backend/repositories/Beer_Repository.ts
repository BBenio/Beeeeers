import {Model, Types} from "mongoose";
import {BeerInterface, BeerModelInterface, BeerPriceModelInterface} from "../models/beer_interface";
import {Beer} from "../models/Beer";
import BeerPrice_Repository from './BeerPrice_Repository';

class Beer_Repository {
    private readonly model: Model<BeerModelInterface>;

    constructor(model: Model<BeerModelInterface>) {
        this.model = model;
    }

    async create(name: string, description: string, containt: string, price: number) {
        const new_beer: BeerInterface = {name, description, containt};
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

    addPrice(id: any, new_price: number | null) {
        if (new_price) {
            return BeerPrice_Repository.create(id, new_price);
        }

        throw new Error("No new price");
    }

    updateById(id: any, beer: BeerInterface) {
        const query = {_id: id};
        return this.model.findOneAndUpdate(query, {$set: {name: beer.name, description: beer.description, containt: beer.containt}})
    }
}

export = new Beer_Repository(Beer);
