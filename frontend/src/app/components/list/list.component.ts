import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Beer } from '../../beer.model';
import { BeersService} from '../../beers.service';
import {MatDialog} from '@angular/material';
import {DialogAddPriceComponent} from '../dialog-add-price/dialog-add-price.component';
import {DialogEditComponent} from '../dialog-edit/dialog-edit.component';
import { DialogDeleteComponent } from '../dialog-delete/dialog-delete.component';
import {DialogAddBeerComponent} from '../dialog-add-beer/dialog-add-beer.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  beers: Beer[];
  displayedColumns = ['name', 'brand', 'description', 'actions'];

  constructor(
    private beersService: BeersService, 
    private router: Router, 
    public dialogAddPrice: MatDialog, 
    public dialogEdit: MatDialog, 
    public dialogDelete: MatDialog,
    public dialogCreate: MatDialog
    ) { }

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

  openDialogEditBeer(id: number, beer: Beer) {
      const dialogRef = this.dialogEdit.open(DialogEditComponent, {
        width: '250px',
        data: beer
      });

      dialogRef.afterClosed().subscribe(async result => {
        console.log('The DialogEdit was closed');
        if (result) {
          console.log('Updated beer');
          this.editBeer(id, beer);
        }
      });
  }

  openDialogDelete(id: string, beer: Beer) {
    const dialogRef = this.dialogDelete.open(DialogDeleteComponent, {
      width: 'auto',
      data: beer
    });

    dialogRef.afterClosed().subscribe(async result => {
      console.log('The DialogDelete was closed');
        if (result) {
          console.log('Deleted beer');
          this.deleteBeers(id);
        
        }
    })
  }

  openDialogCreateBeer() {
    const dialogRef = this.dialogCreate.open(DialogAddBeerComponent, {
      width: 'auto'
    });

    dialogRef.afterClosed().subscribe(async result => {
      console.log('The dialogAddBeer was closed');
      if (result) {
        console.log("add beer");
        this.createBeer(result.beer, result.price);
      }
    })
  }

  createBeer(beer: Beer, price: number) {
    this.beersService.addBeer(beer.name, beer.brand, beer.description, price).subscribe(() => this.fetchBeers());
  }

  deleteBeers(id) {
    this.beersService.deleteIssue(id).subscribe(() => this.fetchBeers());
  }

  addPrice(id, newPrice) {
    this.beersService.addPriceOnBeer(id, newPrice).subscribe( () => {});
  }

  editBeer(id, beer) {
    this.beersService.editBeer(id, beer.name, beer.brand, beer.description).subscribe(() => this.fetchBeers());
  }

  openDialogAddPrice(id: number, beer: Beer): void {
      const dialogRef = this.dialogAddPrice.open(DialogAddPriceComponent, {
        width: '250px',
        data: beer
      });

      dialogRef.afterClosed().subscribe(async result => {
        console.log('The dialogAddPrice was closed');
        console.log(result);
        if (result) {
          console.log('There is a new price');
          this.addPrice(id, result);
        }
      });
  }
}
