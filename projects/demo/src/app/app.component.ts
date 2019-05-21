import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <ft-tree (onLeafSelected)="onLeafSelected($event)" [family]="family"></ft-tree>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';

  onLeafSelected(data) {
    console.log(data);
  }

  family = {
    nodes: [
      {name: 'padre', gender: 'male'},
      {name: 'madre', gender: 'female'}
      ],
    children: [{
      nodes: [
        {name: 'Self', gender: 'male', relationship: 'self'},
      ],
      children: [
        {nodes: [{name: 'Grand Grand Child 2', gender: 'male'}] },
        {nodes: [{name: 'Grand Grand Child 3', gender: 'male'}] },
        {nodes: [{name: 'Grand Grand Child 4', gender: 'female'}] }
        ]
    }]
  };

}
