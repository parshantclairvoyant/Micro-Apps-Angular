import { Component } from '@angular/core';

@Component({
  selector: 'scholarship-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: any = '';
  
  constructor() {
  }

  ngOnInit(): void {
    this.title = localStorage.getItem('token');
  }
}
