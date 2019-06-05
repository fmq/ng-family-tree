/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Family } from '../models/family.model';
export class FtLeafComponent {
    constructor() {
        this.onLeafSelected = new EventEmitter();
    }
    /**
     * @param {?} _leaf
     * @return {?}
     */
    _leafSelected(_leaf) {
        this.onLeafSelected.emit(_leaf);
    }
}
FtLeafComponent.decorators = [
    { type: Component, args: [{
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
            }] }
];
/** @nocollapse */
FtLeafComponent.ctorParameters = () => [];
FtLeafComponent.propDecorators = {
    child: [{ type: Input }],
    onLeafSelected: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    FtLeafComponent.prototype.child;
    /** @type {?} */
    FtLeafComponent.prototype.onLeafSelected;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnQtbGVhZi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1mYW1pbHktdHJlZS8iLCJzb3VyY2VzIjpbImxpYi9uZy1mYW1pbHktdHJlZS9mdC1sZWFmLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN2RSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFpQmhELE1BQU0sT0FBTyxlQUFlO0lBSzFCO1FBRlUsbUJBQWMsR0FBeUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUVwRCxDQUFDOzs7OztJQUVqQixhQUFhLENBQUMsS0FBSztRQUNqQixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNsQyxDQUFDOzs7WUF4QkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxTQUFTO2dCQUNuQixRQUFRLEVBQUU7Ozs7Ozs7Ozs7O0dBV1Q7YUFDRjs7Ozs7b0JBR0UsS0FBSzs2QkFDTCxNQUFNOzs7O0lBRFAsZ0NBQXVCOztJQUN2Qix5Q0FBb0UiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGYW1pbHkgfSBmcm9tICcuLi9tb2RlbHMvZmFtaWx5Lm1vZGVsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZnQtbGVhZicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdj5cbiAgICAgIDxzcGFuICAqbmdGb3I9XCJsZXQgbm9kZSBvZiBjaGlsZC5ub2Rlc1wiIGNsYXNzPVwibm9kZVwiXG4gICAgICAgICAgICAgW25nQ2xhc3NdPVwibm9kZS5yZWxhdGlvbnNoaXAgPyBub2RlLnJlbGF0aW9uc2hpcCArICctbGVhZicgOiAnJ1wiXG4gICAgICAgICAgICAgKGNsaWNrKT1cIl9sZWFmU2VsZWN0ZWQobm9kZSlcIiBbY2xhc3NdPVwibm9kZS5nZW5kZXJcIj57e25vZGUubmFtZX19PC9zcGFuPlxuICAgIDwvZGl2PlxuICAgIDx1bCAqbmdJZj1cImNoaWxkLmNoaWxkcmVuICYmIGNoaWxkLmNoaWxkcmVuLmxlbmd0aCA+IDBcIj5cbiAgICAgIDxsaSAqbmdGb3I9XCJsZXQgcm93IG9mIGNoaWxkLmNoaWxkcmVuXCIgW25nU3R5bGVdPVwieyd3aWR0aCc6IGNoaWxkLmNoaWxkcmVuLmxlbmd0aCA9PT0gMSA/ICcxMDAlJyA6ICdhdXRvJ31cIj5cbiAgICAgICAgPGZ0LWxlYWYgKG9uTGVhZlNlbGVjdGVkKT1cIl9sZWFmU2VsZWN0ZWQoJGV2ZW50KVwiIFtjaGlsZF09XCJyb3dcIj48L2Z0LWxlYWY+XG4gICAgICA8L2xpPlxuICAgIDwvdWw+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgRnRMZWFmQ29tcG9uZW50IHtcblxuICBASW5wdXQoKSBjaGlsZDogRmFtaWx5O1xuICBAT3V0cHV0KCkgb25MZWFmU2VsZWN0ZWQ6IEV2ZW50RW1pdHRlcjxGYW1pbHk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgX2xlYWZTZWxlY3RlZChfbGVhZikge1xuICAgIHRoaXMub25MZWFmU2VsZWN0ZWQuZW1pdChfbGVhZik7XG4gIH1cblxufVxuXG4iXX0=