import { Component, OnInit, Inject } from '@angular/core';
import { Beer } from 'src/app/beer.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-dialog-edit',
  templateUrl: './dialog-edit.component.html',
  styleUrls: ['./dialog-edit.component.scss']
})
export class DialogEditComponent implements OnInit {

  beer: Beer;
  constructor(public dialogRef: MatDialogRef<DialogEditComponent>, @Inject(MAT_DIALOG_DATA) public data: Beer) { 
    this.beer = data;
  }

  ngOnInit() {
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onClick(): void {
    this.dialogRef.close(this.beer);
  }

}
