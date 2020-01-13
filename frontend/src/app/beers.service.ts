import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BeersService {
  uri = 'http://localhost:4200';

  constructor(private http: HttpClient) {

  }

  getBeers() {
    return this.http.get(`${this.uri}/beers`);
  }

  getBeerById(id) {
    return this.http.get(`${this.uri}/beers/${id}`);
  }

  addBeer() {

  }
}
