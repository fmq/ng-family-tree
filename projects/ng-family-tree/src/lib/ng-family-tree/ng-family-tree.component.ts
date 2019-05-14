import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Family } from '../models/ng-family.model';

@Component({
  selector: 'ft-tree',
  template: `
    <div class="ft-tree">
      <ul>
        <li>
          <a href="#">{{family.name}}</a>
          <ul>
            <li *ngFor="let child of family.children">
              <ft-leaf [ngClass]="child.relationship ? child.relationship + '-leaf' : ''" [child]="child"></ft-leaf>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  `,
  styleUrls: ['./ng-family-tree.component.scss'],
  styles: [],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class NgFamilyTreeComponent implements OnInit {

  @Input() family: Family;

  constructor() { }

  ngOnInit() {
  }

}
