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
    const {name, brand, description, price} = req.body;
    repository.create(name, brand, description, price)
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

app.put("/:id", (req, res) => {
    const {id} = req.params;
    const beer: BeerInterface = {id_beer: req.body.id_beer, name: req.body.name, brand: req.body.brand, description: req.body.description};
    const {new_price} = req.body;
    repository.updateById(id, beer, new_price)
        .then(res.status(200).json([]))
        .catch((error: any) => console.log(error))
});

export = app;
