import { Component, OnInit } from '@angular/core';
import { Family } from '../../../ng-family-tree/src/lib/models/family.model';
import { TreeNode } from '../../../ng-family-tree/src/lib/models/node.model';

@Component({
  selector: 'app-root',
  template: `
    <ft-tree (onLeafSelected)="onLeafSelected($event)" [family]="family"></ft-tree>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'demo';

  onLeafSelected(data) {
    console.log(data);
  }

  family = {
    nodes: [
      { name: 'padre'},
      { name: 'madre'}
      ],
    children: [{
      nodes: [
        { name: 'Self', relationship: 'self' },
      ],
      children: [
        { nodes: [{ name: 'Grand Grand Child 2'}] },
        { nodes: [{ name: 'Grand Grand Child 3'}] },
        { nodes: [{ name: 'Grand Grand Child 4'}] }
        ]
    }]
  };

  ngOnInit() {
  }
}
