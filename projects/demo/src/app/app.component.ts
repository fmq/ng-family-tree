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
    name: 'parent',
    relationship: 'top',
    children:
      [{  name: 'child1',
          children: [
            {name: 'Grand Child 1'}
          ]},
        {  name: 'child2',
          relationship: 'self',
          children: [
            {name: 'Grand Child 2',
              children: [
                {name: 'Grand Grand Child 1'}
              ]
            },
            {name: 'Grand Child 3',
              children: [
                {name: 'Grand Grand Child 2'},
                {name: 'Grand Grand Child 3'},
                {name: 'Grand Grand Child 4'}
              ]
            },
            {name: 'Grand Child 3',
              children: [
                {name: 'Grand Grand Child 5'}
              ]
            },
          ]},
      ]
  };

}
