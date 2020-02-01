import { Component, OnInit, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {Beer} from '../../beer.model';
import {FormBuilder, FormGroup, FormControl} from '@angular/forms';


@Component({
  selector: 'app-dialog-add-beer',
  templateUrl: './dialog-add-beer.component.html',
  styleUrls: ['./dialog-add-beer.component.scss']
})
export class DialogAddBeerComponent implements OnInit {

  name = new FormControl('');
  description = new FormControl('');
  brand = new FormControl('');
  price = new FormControl('');
  options: FormGroup;

  constructor(public dialogRef: MatDialogRef<DialogAddBeerComponent>, fb: FormBuilder) {
    this.options = fb.group({
      hideRequired: false,
      floatLabel: 'auto',
    });
   }

  ngOnInit() {
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onClick(): void {
    if (this.name.value !== "" && this.brand.value !== "" && this.price.value !== "") {
      let beer = {
        name: this.name.value,
        description: this.description.value,
        brand: this.brand.value
      };
  
      this.dialogRef.close({beer, price: this.price.value});
    }
  }

}
