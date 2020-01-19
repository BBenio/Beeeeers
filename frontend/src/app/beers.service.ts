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
