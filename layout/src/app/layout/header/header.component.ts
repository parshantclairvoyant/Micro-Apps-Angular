import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'layout-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private router: Router) {
    
  }

  logout() {
    localStorage.clear();
    this.router.navigateByUrl("/auth");
  }
}
