import { Component, OnInit, Inject } from '@angular/core';
import { Beer } from 'src/app/beer.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-dialog-delete',
  templateUrl: './dialog-delete.component.html',
  styleUrls: ['./dialog-delete.component.scss']
})
export class DialogDeleteComponent implements OnInit {

  beer: Beer;
  constructor(public dialogRef: MatDialogRef<DialogDeleteComponent>, @Inject(MAT_DIALOG_DATA) public data: Beer) { 
    this.beer = data;
  }

  ngOnInit() {
  }

  onCancel(): void {
    this.dialogRef.close(false);
  }

  onClick(): void {
    this.dialogRef.close(true);
  }

}
