/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { Family } from '../models/ng-family.model';
export class NgFamilyTreeComponent {
    constructor() {
        this.onLeafSelected = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} _leaf
     * @return {?}
     */
    _leafSelected(_leaf) {
        this.onLeafSelected.emit(_leaf);
    }
}
NgFamilyTreeComponent.decorators = [
    { type: Component, args: [{
                selector: 'ft-tree',
                template: `
    <div class="tree">
      <ul>
        <li>
          <div>
            <span  *ngFor="let node of family.nodes" (click)="_leafSelected(node)" [ngClass]="node.gender" class="node">{{node.name}}</span>
          </div>
          <ul class="top" [ngClass]="{'no-border': !family.name}" >
            <li *ngFor="let child of family.children">
            <ft-leaf (onLeafSelected)="_leafSelected($event)" [child]="child"></ft-leaf>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    
  `,
                encapsulation: ViewEncapsulation.None,
                styles: ["*{margin:0;padding:0;font-size:10pt}.tree{white-space:nowrap;min-width:800px;min-height:500px}.tree ul{padding-top:20px;position:relative;transition:.5s;-webkit-transition:.5s;-moz-transition:.5s}.tree ul ul::before{content:\"\";position:absolute;top:0;left:50%;border-left:1px solid #ccc;width:0;height:20px}.tree li{float:left;text-align:center;list-style-type:none;position:relative;padding:20px 5px 0;transition:.5s;-webkit-transition:.5s;-moz-transition:.5s}.tree li::before{content:\"\";position:absolute;top:0;right:50%;border-top:1px solid #ccc;width:50%;height:20px}.tree li::after{content:\"\";position:absolute;top:0;border-top:1px solid #ccc;width:50%;height:20px;right:auto;left:50%;border-left:1px solid #ccc}.tree li:only-child{padding-top:0}.tree li:only-child::after,.tree li:only-child::before{display:none}.tree li:first-child::before{border:0}.tree li:first-child::after{border-radius:5px 0 0;-webkit-border-radius:5px 0 0 0;-moz-border-radius:5px 0 0}.tree li:last-child::after{border:0}.tree li:last-child::before{border-right:1px solid #ccc;border-radius:0 5px 0 0;-webkit-border-radius:0 5px 0 0;-moz-border-radius:0 5px 0 0}.tree li div{border:1px solid #ccc;padding:5px 10px;text-decoration:none;color:#666;font-size:11px;display:inline-block;min-width:80px;min-height:30px;border-radius:5px;-webkit-border-radius:5px;-moz-border-radius:5px;transition:.5s;-webkit-transition:.5s;-moz-transition:.5s}.tree li div .male{background-color:#add8e6;display:inline-block;min-width:90px;padding:10px;border-radius:5px;-webkit-border-radius:5px;-moz-border-radius:5px;margin:0 2px}.tree li div .female{background-color:#ffb6c1;display:inline-block;min-width:90px;padding:10px;border-radius:5px;-webkit-border-radius:5px;-moz-border-radius:5px;margin:0 2px}.tree li div:hover,.tree li div:hover+ul li div{background:#c8e4f8;color:#000;border:1px solid #94a0b4}.tree li div:hover+ul li::after,.tree li div:hover+ul li::before,.tree li div:hover+ul ul::before,.tree li div:hover+ul::before{border-color:#94a0b4}"]
            }] }
];
/** @nocollapse */
NgFamilyTreeComponent.ctorParameters = () => [];
NgFamilyTreeComponent.propDecorators = {
    family: [{ type: Input }],
    onLeafSelected: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    NgFamilyTreeComponent.prototype.family;
    /** @type {?} */
    NgFamilyTreeComponent.prototype.onLeafSelected;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctZmFtaWx5LXRyZWUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctZmFtaWx5LXRyZWUvIiwic291cmNlcyI6WyJsaWIvbmctZmFtaWx5LXRyZWUvbmctZmFtaWx5LXRyZWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2xHLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQXlCbkQsTUFBTSxPQUFPLHFCQUFxQjtJQUtoQztRQUZVLG1CQUFjLEdBQXlCLElBQUksWUFBWSxFQUFFLENBQUM7SUFFcEQsQ0FBQzs7OztJQUVqQixRQUFRO0lBQ1IsQ0FBQzs7Ozs7SUFFRCxhQUFhLENBQUMsS0FBSztRQUNqQixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNsQyxDQUFDOzs7WUFuQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxTQUFTO2dCQUNuQixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7R0FnQlQ7Z0JBR0QsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O2FBQ3RDOzs7OztxQkFHRSxLQUFLOzZCQUNMLE1BQU07Ozs7SUFEUCx1Q0FBd0I7O0lBQ3hCLCtDQUFvRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGYW1pbHkgfSBmcm9tICcuLi9tb2RlbHMvbmctZmFtaWx5Lm1vZGVsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZnQtdHJlZScsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cInRyZWVcIj5cbiAgICAgIDx1bD5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8c3BhbiAgKm5nRm9yPVwibGV0IG5vZGUgb2YgZmFtaWx5Lm5vZGVzXCIgKGNsaWNrKT1cIl9sZWFmU2VsZWN0ZWQobm9kZSlcIiBbbmdDbGFzc109XCJub2RlLmdlbmRlclwiIGNsYXNzPVwibm9kZVwiPnt7bm9kZS5uYW1lfX08L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHVsIGNsYXNzPVwidG9wXCIgW25nQ2xhc3NdPVwieyduby1ib3JkZXInOiAhZmFtaWx5Lm5hbWV9XCIgPlxuICAgICAgICAgICAgPGxpICpuZ0Zvcj1cImxldCBjaGlsZCBvZiBmYW1pbHkuY2hpbGRyZW5cIj5cbiAgICAgICAgICAgIDxmdC1sZWFmIChvbkxlYWZTZWxlY3RlZCk9XCJfbGVhZlNlbGVjdGVkKCRldmVudClcIiBbY2hpbGRdPVwiY2hpbGRcIj48L2Z0LWxlYWY+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvbGk+XG4gICAgICA8L3VsPlxuICAgIDwvZGl2PlxuICAgIFxuICBgLFxuICBzdHlsZVVybHM6IFsnLi9uZy1mYW1pbHktdHJlZS5jb21wb25lbnQuc2NzcyddLFxuICBzdHlsZXM6IFtdLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIE5nRmFtaWx5VHJlZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgZmFtaWx5OiBGYW1pbHk7XG4gIEBPdXRwdXQoKSBvbkxlYWZTZWxlY3RlZDogRXZlbnRFbWl0dGVyPEZhbWlseT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIF9sZWFmU2VsZWN0ZWQoX2xlYWYpIHtcbiAgICB0aGlzLm9uTGVhZlNlbGVjdGVkLmVtaXQoX2xlYWYpO1xuICB9XG5cbn1cbiJdfQ==