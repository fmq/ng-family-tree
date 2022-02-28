import { NgModule } from '@angular/core';
import { ChangeColorComponent } from './change-color.component';
import { ChangeColorDirective } from './change-color.directive';



@NgModule({
  declarations: [ChangeColorComponent, ChangeColorDirective],
  imports: [
  ],
  exports: [ChangeColorComponent]
})
export class ChangeColorModule { }
