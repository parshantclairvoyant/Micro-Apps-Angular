import { Component } from '@angular/core';

@Component({
  selector: 'layout-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'layout';
  constructor() {
    localStorage.setItem("token", "feerf-erferf234-df345-dfg345-dfg345dfg-345-dfg-345-df-345345dfg");
  }
}
