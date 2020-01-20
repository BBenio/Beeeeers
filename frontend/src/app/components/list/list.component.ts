import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Beer } from '../../beer.model';
import { BeersService} from '../../beers.service';
import {MatDialog} from '@angular/material';
import {DialogAddPriceComponent} from '../dialog-add-price/dialog-add-price.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  beers: Beer[];
  displayedColumns = ['name', 'brand', 'description', 'actions'];

  constructor(private beersService: BeersService, private router: Router, public dialogAddPrice: MatDialog) { }

  ngOnInit() {
    this.fetchBeers();
  }

  fetchBeers() {
    this.beersService.getBeers().subscribe((data: Beer[]) => {
      this.beers = data;
      console.log('Beers requested ...');
      console.log(this.beers);
    });
  }

  editBeers(id) {
    this.router.navigate([`/edit/${id}`]);
  }

  deleteBeers(id) {
    this.beersService.deleteIssue(id).subscribe(() => this.fetchBeers());
  }

  addPrice(id, newPrice) {
    this.beersService.addPriceOnBeer(id, newPrice).subscribe( () => {});
  }

  openDialogAddPrice(id): void {
    if (id) {
      this.beersService.getBeerById(id).subscribe((beer: Beer) => {
        const dialogRef = this.dialogAddPrice.open(DialogAddPriceComponent, {
          width: '250px',
          data: beer
        });

        dialogRef.afterClosed().subscribe(async result => {
          console.log('The dialogAddPrice was closed');
          console.log(result);
          if (result) {
            console.log("There is a new price");
            this.addPrice(id, result);
          }
        });
      });
    } else {
      throw new Error('Can\'t open dialogAddPrice because no id');
    }
  }
}
