import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {
  MatToolbarModule,
  MatFormFieldModule,
  MatInputModule,
  MatOptionModule,
  MatSelectModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatTableModule,
  MatDividerModule,
  MatSnackBarModule,
  MatPaginatorModule,
  MatDialogModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListComponent } from './components/list/list.component';
import { BeersService } from './beers.service';
import {HttpClientModule} from '@angular/common/http';
import { DialogAddPriceComponent } from './components/dialog-add-price/dialog-add-price.component';
import {FormsModule} from '@angular/forms';
import { DialogEditComponent } from './components/dialog-edit/dialog-edit.component';
import { DialogDeleteComponent } from './components/dialog-delete/dialog-delete.component';

const routes: Routes = [
  {path: 'list', component: ListComponent},
  {path: '', redirectTo: '/list', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    DialogAddPriceComponent,
    DialogEditComponent,
    DialogDeleteComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatDividerModule,
    MatSnackBarModule,
    MatPaginatorModule,
    MatDialogModule,
    FormsModule
  ],
  providers: [BeersService],
  bootstrap: [AppComponent],
  entryComponents: [DialogAddPriceComponent, DialogEditComponent, DialogDeleteComponent]
})
export class AppModule { }
