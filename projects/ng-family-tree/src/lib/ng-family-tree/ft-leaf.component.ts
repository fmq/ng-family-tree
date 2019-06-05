
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Family } from '../models/family.model';

@Component({
  selector: 'ft-leaf',
  template: `
    <div>
      <span  *ngFor="let node of child.nodes" class="node"
             [ngClass]="node.relationship ? node.relationship + '-leaf' : ''"
             (click)="_leafSelected(node)" [class]="node.gender">{{node.name}}</span>
    </div>
    <ul *ngIf="child.children && child.children.length > 0">
      <li *ngFor="let row of child.children" [ngStyle]="{'width': child.children.length === 1 ? '100%' : 'auto'}">
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

