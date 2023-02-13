# Credit Goes To

https://github.com/fmq
https://github.com/fmq/ng-family-tree

# NgxFamilyTree

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.12.

# Installation
```
npm i ngx-family-tree --save
```

# Import in module
```
import { NgxFamilyTreeModule } from 'ngx-family-tree';
```

# Add Below HTML
```
 <ft-tree (onLeafSelected)="onLeafSelected($event)" [family]="family"></ft-tree>
```

# TS File
```
  family = {
    nodes: [
      { name: 'Father'},
      { name: 'Mother'}
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

  ```