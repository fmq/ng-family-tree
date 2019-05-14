
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Family } from '../models/ng-family.model';

@Component({
  selector: 'ft-leaf',
  template: `
    <a [ngClass]="child.relationship ? child.relationship + '-leaf' : ''" (click)="_leafSelected(child)">{{child.name}}</a>
    <ul *ngIf="child.children && child.children.length > 0">
      <li *ngFor="let row of child.children">
        <ft-leaf (onLeafSelected)="_leafSelected($event)" [child]="row"></ft-leaf>
      </li>
    </ul>
  `
})
export class FtLeafComponent {

  @Input() child: Family;
  @Output() onLeafSelected: EventEmitter<Family> = new EventEmitter();

  constructor() { }

  _leafSelected(_leaf) {
    this.onLeafSelected.emit(_leaf);
  }

}

