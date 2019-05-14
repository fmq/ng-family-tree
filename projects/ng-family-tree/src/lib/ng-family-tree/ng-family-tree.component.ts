import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { Family } from '../models/ng-family.model';

@Component({
  selector: 'ft-tree',
  template: `
    <div class="ft-tree">
      <ul>
        <li>
          <a *ngIf="family.name" [ngClass]="family.relationship ? family.relationship + '-leaf' : ''"
             (click)="_leafSelected(family)">{{family.name}}</a>
          <ul class="top" [ngClass]="{'no-border': !family.name}" >
            <li *ngFor="let child of family.children">
            <ft-leaf (onLeafSelected)="_leafSelected($event)" [child]="child"></ft-leaf>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  `,
  styleUrls: ['./ng-family-tree.component.scss'],
  styles: [],
  encapsulation: ViewEncapsulation.None
})
export class NgFamilyTreeComponent implements OnInit {

  @Input() family: Family;
  @Output() onLeafSelected: EventEmitter<Family> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  _leafSelected(_leaf) {
    this.onLeafSelected.emit(_leaf);
  }

}
