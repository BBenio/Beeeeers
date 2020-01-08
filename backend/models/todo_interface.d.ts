import {Document} from "mongoose";

export interface TodoModelInterface extends Document {
    name: string;
    done: Boolean;
}

export interface TodoInterface {
    name: string;
    done: Boolean;
}
