import { NgModule } from '@angular/core';
import { NgFamilyTreeComponent } from './ng-family-tree/ng-family-tree.component';
import { FtLeafComponent } from './ng-family-tree/ft-leaf.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [NgFamilyTreeComponent, FtLeafComponent],
  imports: [
    CommonModule,
  ],
  exports: [NgFamilyTreeComponent]
})
export class NgFamilyTreeModule { }
