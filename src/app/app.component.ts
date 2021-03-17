import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @Input() public alerts: Array<string> = [];
  title = 'listof-courses';
  constructor() {
    
  }
 
}

