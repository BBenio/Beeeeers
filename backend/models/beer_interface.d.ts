import {Document} from "mongoose";

export interface BeerModelInterface extends Document {
    name: string;
    description: string;
}

export interface BeerInterface {
    name: string;
    description: string;
}

export interface BeerPriceModelInterface extends Document {
    id_beer: string;
    price: number;
    date: Date;
}

export interface BeerPriceInterface {
    id_beer: string;
    price: number;
    date: Date;
}
