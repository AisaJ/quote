import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteBoardComponent } from './quote-board/quote-board.component';
import { QuoteDetailsComponent } from './quote-details/quote-details.component';
import { CardColorChangeDirective } from './card-color-change.directive';

@NgModule({
  declarations: [
    AppComponent,
    QuoteBoardComponent,
    QuoteDetailsComponent,
    CardColorChangeDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
