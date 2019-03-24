import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quote-board',
  templateUrl: './quote-board.component.html',
  styleUrls: ['./quote-board.component.css']
})
export class QuoteBoardComponent implements OnInit {


  quotes = [
    new Quote(1," Mind over matter. ",'~Moritmer J.adler'),
    new Quote(2,'" Not all counted truly counts. Not all that counts, is counted. "','~Albert Einstein'),
    new Quote(3,'" Every moment is a fresh beginning. "','~T.S Eliot'),
    new Quote(4,' "Everything you’ve ever wanted is on the other side of fear. "','~George Addair'),
  ]

  toggleDetails(index){
    this.quotes[index].showDetails = !this.quotes[index].showDetails;
  }

  removeQuote(isRemove,index){
    if(isRemove){
      this.quotes.splice(index,1);
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
