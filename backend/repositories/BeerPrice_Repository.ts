import {Model} from "mongoose";
import {BeerPriceInterface, BeerPriceModelInterface} from "../models/beer_interface";
import {BeerPrice} from "../models/BeerPrice";

class BeerPrice_Repository {
    private readonly model: Model<BeerPriceModelInterface>;

    constructor(model: Model<BeerPriceModelInterface>) {
        this.model = model;
    }

    create(id_beer: string, price: number) {
        const new_beer_price: BeerPriceInterface = {id_beer, price, date: new Date()};
        const beer = new this.model(new_beer_price);

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

    deleteByIdBeer(id: string) {
        return this.model.deleteMany({id_beer: id});
    }

    updateById(id: any, object: BeerPriceInterface) {
        const query = {_id: id};
        return this.model.findOneAndUpdate(query, {$set: {id_beer: object.id_beer, price: object.price, date: new Date()} as BeerPriceInterface});
    }
}

export = new BeerPrice_Repository(BeerPrice);
