import { NgModule } from '@angular/core';
import { NgFamilyTreeComponent } from './ng-family-tree/ng-family-tree.component';
import { FtLeafComponent } from './ng-family-tree/ft-leaf.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [NgFamilyTreeComponent, FtLeafComponent],
  imports: [
    BrowserModule,
  ],
  exports: [NgFamilyTreeComponent]
})
export class NgFamilyTreeModule { }
