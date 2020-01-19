import { Component, OnInit, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {Beer} from '../../beer.model';

@Component({
  selector: 'app-dialog-add-price',
  templateUrl: './dialog-add-price.component.html',
  styleUrls: ['./dialog-add-price.component.scss']
})
export class DialogAddPriceComponent implements OnInit {

  newPrice: number;

  constructor(public dialogRef: MatDialogRef<DialogAddPriceComponent>, @Inject(MAT_DIALOG_DATA) public data: Beer) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onClick(): void {
    this.dialogRef.close(this.newPrice);
  }
}
