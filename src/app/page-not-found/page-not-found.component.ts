import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';


@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {

  sectionTitle = 'No such page. Go home'

  constructor(private location: Location) { }

  ngOnInit() {
  }

  locationBack(){
    this.location.back();
  }

}
