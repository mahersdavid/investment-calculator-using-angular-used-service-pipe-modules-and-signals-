import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { InvestmentResultsComponent } from './investment-results/investment-results.component';
import { HeaderComponent } from './header/header.component';
import { BrowserModule } from '@angular/platform-browser';

import { usewrModule } from './user-input/user-input.module';

@NgModule({
  declarations: [
    AppComponent,
    InvestmentResultsComponent,
    HeaderComponent,
  ],
  imports : [BrowserModule,usewrModule],
  bootstrap : [AppComponent]
})
export class appModule {}
