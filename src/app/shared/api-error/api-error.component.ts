import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-api-error',
  templateUrl: './api-error.component.html',
  styleUrls: ['./api-error.component.scss']
})
export class ApiErrorComponent implements OnInit {

  constructor(
    private router: Router
  ) {
  }

  ngOnInit() {
  }


  onRefreshClick() {
    this.router.navigated = false;
    this.router.navigate([this.router.url]);
  }
}
