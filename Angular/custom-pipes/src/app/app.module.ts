import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmployeeFilterPipe } from './employee-filter.pipe';
import { FormsModule } from '@angular/forms';
import { DataFilterPipe } from './data-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeFilterPipe,
    DataFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
