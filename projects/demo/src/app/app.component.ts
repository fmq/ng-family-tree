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
    children:
      [ {  name: 'padre'},
        {  children: [
            {
              name: 'Grand Child 3',
              relationship: 'self',
              children: [
                {name: 'Grand Grand Child 2'},
                {name: 'Grand Grand Child 3'},
                {name: 'Grand Grand Child 4'}
              ]
            },
          ]},
        {  name: 'madre'},
      ]
  };

}
