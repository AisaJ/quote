import { Component } from '@angular/core';
import { Quote  } from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Quotes';
    
    quotes = [
      new Quote(1,"Mind over matter"),
      new Quote(2,"Not all counted truly counts"),
      new Quote(3,"Not all that counts is counted"),
    ]
   
}
