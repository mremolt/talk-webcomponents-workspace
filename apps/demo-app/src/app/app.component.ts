import { Component, OnInit } from '@angular/core';

import '@clear/ui-component-library';

@Component({
  selector: 'clear-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title = 'demo-app';
  public name: string = 'World';


  public ngOnInit(): void {

    setTimeout(() => {
      this.name = 'Arthur';
    },3000)
  }

}
