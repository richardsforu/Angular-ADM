import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { SummaryComponent } from './summary/summary.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    SummaryComponent,
    ButtonsComponent,
    DashBoardComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
