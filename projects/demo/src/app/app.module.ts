import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgFamilyTreeModule } from 'ng-family-tree';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgFamilyTreeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
