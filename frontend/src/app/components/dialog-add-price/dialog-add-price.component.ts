import { Component, OnInit, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {Beer} from '../../beer.model';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-dialog-add-price',
  templateUrl: './dialog-add-price.component.html',
  styleUrls: ['./dialog-add-price.component.scss']
})
export class DialogAddPriceComponent implements OnInit {

  newPrice = new FormControl('');

  constructor(public dialogRef: MatDialogRef<DialogAddPriceComponent>, @Inject(MAT_DIALOG_DATA) public data: Beer) { }

  ngOnInit() {
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onClick(): void {
    if (this.newPrice.value !== "") {
      this.dialogRef.close(this.newPrice);
    }
  }
}
