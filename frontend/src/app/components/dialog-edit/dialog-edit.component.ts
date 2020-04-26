import { Component, OnInit, Inject } from '@angular/core';
import { Beer } from 'src/app/beer.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-dialog-edit',
  templateUrl: './dialog-edit.component.html',
  styleUrls: ['./dialog-edit.component.scss']
})
export class DialogEditComponent implements OnInit {

  beer: Beer;
  name = new FormControl('');
  description = new FormControl('');
  containt = new FormControl('');
  
  class_ng_invalid: boolean = false;
  constructor(public dialogRef: MatDialogRef<DialogEditComponent>, @Inject(MAT_DIALOG_DATA) public data: Beer) { 

    this.beer = data;
    this.name.setValue(data.name);
    this.description.setValue(data.description);
    this.containt.setValue(data.containt);
  }

  ngOnInit() {
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onClick(): void {
    if (this.name.value !== "") {
      this.beer.name = this.name.value;
      this.beer.description = this.description.value;
      this.beer.containt = this.containt.value;

      this.dialogRef.close(this.beer);
    }
  }
}
