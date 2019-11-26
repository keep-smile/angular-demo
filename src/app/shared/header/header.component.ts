import {Component, Input, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() showBack: boolean;
  @Input() showDivider: boolean;
  @Input() backHome: boolean;
  @Input() headerTitle: boolean;


  constructor(
    private router: Router,
    private location: Location,
  ) { }

  ngOnInit() {
  }

  onBack(){
    if(this.backHome){
      this.router.navigate(['/']);
    } else {
      this.location.back()
    }
  }

}
