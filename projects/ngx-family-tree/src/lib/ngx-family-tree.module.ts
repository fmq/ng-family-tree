import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FtLeafComponent } from './ft-leaf.component';
import { NgxFamilyTreeComponent } from './ngx-family-tree.component';



@NgModule({
  declarations: [
    NgxFamilyTreeComponent,
    FtLeafComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NgxFamilyTreeComponent
  ]
})
export class NgxFamilyTreeModule { }
