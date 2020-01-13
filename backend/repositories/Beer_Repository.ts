import {Model, Types} from "mongoose";
import {BeerInterface, BeerModelInterface, BeerPriceModelInterface} from "../models/beer_interface";
import {Beer} from "../models/Beer";
import BeerPrice_Repository from './BeerPrice_Repository';

class Beer_Repository {
    private readonly model: Model<BeerModelInterface>;

    constructor(model: Model<BeerModelInterface>) {
        this.model = model;
    }

    create(name: string, brand: string, description: string, price: number) {
        const id_beer = name+brand;
        const new_beer: BeerInterface = {id_beer, name, brand, description};
        const beer = new this.model(new_beer);
        return Promise.all([beer.save(), BeerPrice_Repository.create(beer.id_beer, price)]);
    }

    findAll() {
        return this.model.find();
    }

    findById(id: number) {
        return this.model.findById(id);
    }

    deleteById(id: any) {
        this.findById(id).then(async (beer: BeerInterface | null) => {
            if (beer) {
                await BeerPrice_Repository.deleteByIdBeer(beer.id_beer);
            }
        });

        return this.model.findByIdAndDelete(id);
    }

    updateById(id: any, beer: BeerInterface, new_price: number) {
        const query = {_id: id};

        return Promise.all([
            this.model.findOneAndUpdate(query, {$set: {name: beer.name, brand: beer.brand, description: beer.description}}),
            BeerPrice_Repository.create(beer.id_beer, new_price)
        ]);
    }
}

export = new Beer_Repository(Beer);
