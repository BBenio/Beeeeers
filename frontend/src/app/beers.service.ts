import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BeersService {
  uri = 'http://localhost';

  constructor(private http: HttpClient) {

  }

  getBeers() {
    return this.http.get(`${this.uri}/beers`);
  }

  getBeerById(id) {
    return this.http.get(`${this.uri}/beers/${id}`);
  }

  addBeer(name, brand, description, price) {
    const beer = {
      name,
      brand,
      description,
      price
    };
    return this.http.post(`${this.uri}/beers`, beer);
  }

  deleteIssue(id) {
    return this.http.delete(`${this.uri}/beers/${id}`);
  }
}
