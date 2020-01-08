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

app.post("/", (req, res) => {
    const {name} = req.body;
    repository.create(name)
        .then((beer: BeerInterface) => {
            res.json(beer);
        }).catch((error: Error) => console.log(error));
});

app.delete("/:id", (req, res) => {
    const id = req.params;
    repository.deleteById(id).then((ok: any) => {
        console.log(ok);
        console.log("Delete record " + id + "done.");
        res.status(200).json([]);
    }).catch((error: any) => console.log(error));
});

app.put("/:id", (req, res) => {
    const id = req.params;
    const beer: BeerInterface = {id_beer: id, name: req.body.name, brand: req.body.brand};
    repository.updateById(id, beer)
        .then(res.status(200).json([]))
        .catch((error: any) => console.log(error))
});

export = app;
