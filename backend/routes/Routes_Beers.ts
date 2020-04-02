import express from "express";
import {BeerInterface} from "../models/beer_interface";

const repository = require("../repositories/Beer_Repository");
const app = express.Router();

app.get("/", (req, res) => {
    repository.findAll()
        .then((beers: BeerInterface[]) => {
            res.json(beers)
        })
        .catch((error: Error) => console.log(error));
});

app.get("/:id", (req, res) => {
    const {id} = req.params;
    repository.findById(id).then((beer: BeerInterface) => {
        res.json(beer);
    })
});

app.post("/", (req, res) => {
    const {name, description, price} = req.body;
    repository.create(name, description, price)
        .then((beer: BeerInterface) => {
            res.json(beer);
        }).catch((error: Error) => console.log(error));
});

app.delete("/:id", (req, res) => {
    const {id} = req.params;
    repository.deleteById(id).then((ok: any) => {
        console.log(ok);
        console.log("Delete record " + id + "done.");
        res.status(200).json([]);
    }).catch((error: any) => console.log(error));
});

app.put("/new_price/:id", (req, res) => {
    const {id} = req.params;
    const {new_price} = req.body;
    repository.addPrice(id, new_price)
        .then(res.status(200).json([]))
        .catch((error: any) => console.log(error))
});

app.put("/edit/:id", (req, res) => {
    const {id} = req.params;
    const beer: BeerInterface = {name: req.body.name, description: req.body.description};
    repository.updateById(id, beer)
        .then(res.status(200).json([]))
        .catch((error: any) => console.log(error))
});

export = app;
