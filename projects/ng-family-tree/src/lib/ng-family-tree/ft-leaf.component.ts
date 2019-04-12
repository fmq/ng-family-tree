
import { Component, Input, OnInit } from '@angular/core';
import { Family } from '../models/ng-family.model';

@Component({
  selector: 'ft-leaf',
  template: `
    <a href="#">{{child.name}}</a>
    <ul *ngIf="child.children && child.children.length > 0">
      <li *ngFor="let row of child.children">
        <ft-leaf [child]="row"></ft-leaf>
      </li>
    </ul>
  `
})
export class FtLeafComponent {

  @Input() child: Family;

  constructor() { }

}

