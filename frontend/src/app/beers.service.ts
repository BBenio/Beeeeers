import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BeersService {
  uri = environment.apiUrl;

  constructor(private http: HttpClient) {

  }

  getBeers() {
    return this.http.get(`${this.uri}/beers`);
  }

  getBeerById(id) {
    return this.http.get(`${this.uri}/beers/${id}`);
  }

  addBeer(name, description, containt, price) {
    const beer = {
      name,
      description,
      containt,
      price
    };
    return this.http.post(`${this.uri}/beers`, beer);
  }

  deleteIssue(id) {
    return this.http.delete(`${this.uri}/beers/${id}`);
  }

  addPriceOnBeer(id, newPrice) {
    console.log("hfhfhf")
    console.log(id)
    console.log(newPrice)
    const price = {
      new_price: newPrice
    };
    console.log(`${this.uri}/beers/new_price/${id}`)
    return this.http.put(`${this.uri}/beers/new_price/${id}`, price);
  }

  editBeer(id, name, description, containt) {
    const beer = {
      name,
      description,
      containt
    };
    return this.http.put(`${this.uri}/beers/edit/${id}`, beer);
  }
}
