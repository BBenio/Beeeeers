import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Beer } from '../../beer.model';
import { BeersService} from '../../beers.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  beers: Beer[];
  displayedColumns = ['name', 'brand', 'description', 'actions'];

  constructor(private beersService: BeersService, private router: Router) { }

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
}
