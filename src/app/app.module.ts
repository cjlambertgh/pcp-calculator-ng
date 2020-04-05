import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PcpQuoteEntryComponent } from './components/pcp-quote-entry/pcp-quote-entry.component';
import { PcpQuoteResultComponent } from './components/pcp-quote-result/pcp-quote-result.component';

@NgModule({
  declarations: [
    AppComponent,
    PcpQuoteEntryComponent,
    PcpQuoteResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
