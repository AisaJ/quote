import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote-votes',
  templateUrl: './quote-votes.component.html',
  styleUrls: ['./quote-votes.component.css']
})
export class QuoteVotesComponent implements OnInit {

  upVotes : number=0;
  downVotes : number=0;
  
  upVote(){
    this.upVotes++;
  }

  downVote(){
    this.downVotes++;
  }
  

  constructor() { }

  ngOnInit() {
  }

}
