import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteBoardComponent } from './quote-board/quote-board.component';
import { QuoteDetailsComponent } from './quote-details/quote-details.component';
import { CardColorChangeDirective } from './card-color-change.directive';
import { DateCountPipe } from './date-count.pipe';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { QuoteVotesComponent } from './quote-votes/quote-votes.component';
import { HighlightQuoteDirective } from './highlight-quote.directive';

@NgModule({
  declarations: [
    AppComponent,
    QuoteBoardComponent,
    QuoteDetailsComponent,
    CardColorChangeDirective,
    DateCountPipe,
    QuoteFormComponent,
    QuoteVotesComponent,
    HighlightQuoteDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
