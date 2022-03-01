import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { Family } from './models/family.model';

@Component({
  selector: 'ft-tree',
  template: `
    <div class="tree">
      <ul>
        <li>
          <div class="top">
            <span  *ngFor="let node of family.nodes" (click)="_leafSelected(node)"
                   class="{{node.gender}}"
                   [ngClass]="node.relationship ? node.relationship + '-leaf' : ''"
                   class="node">{{node.name}}</span>
          </div>
          <ul>
            <li *ngFor="let child of family.children" [ngStyle]="{'width': _setWidth(child) ? '100%' : 'auto'}" >
              <ft-leaf (onLeafSelected)="_leafSelected($event)" [child]="child"></ft-leaf>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  `,
  styleUrls: ['./ng-family-tree.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NgxFamilyTreeComponent implements OnInit {

  @Input() family: Family;
  @Output() onLeafSelected: EventEmitter<Family> = new EventEmitter();

  constructor() {
    this.family = new Family();
   }

  ngOnInit() {
  }

  _leafSelected(_leaf:any) {
    this.onLeafSelected.emit(_leaf);
  }

  _setWidth(child: Family) {
    return child.nodes && child.nodes[0].relationship === 'self' && child.children.length < 2;
  }

}
