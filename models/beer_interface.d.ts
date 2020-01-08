import {Document} from "mongoose";

export interface BeerModelInterface extends Document {
    id_beer: number;
    name: string;
    brand: string;
}

export interface BeerInterface {
    id_beer: any;
    name: string;
    brand: string;
}
