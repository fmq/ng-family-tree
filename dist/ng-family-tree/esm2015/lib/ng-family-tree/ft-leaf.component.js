/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Family } from '../models/ng-family.model';
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
    <a [ngClass]="child.relationship ? child.relationship + '-leaf' : ''" (click)="_leafSelected(child)">{{child.name}}</a>
    <ul *ngIf="child.children && child.children.length > 0">
      <li *ngFor="let row of child.children">
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnQtbGVhZi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1mYW1pbHktdHJlZS8iLCJzb3VyY2VzIjpbImxpYi9uZy1mYW1pbHktdHJlZS9mdC1sZWFmLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN2RSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFhbkQsTUFBTSxPQUFPLGVBQWU7SUFLMUI7UUFGVSxtQkFBYyxHQUF5QixJQUFJLFlBQVksRUFBRSxDQUFDO0lBRXBELENBQUM7Ozs7O0lBRWpCLGFBQWEsQ0FBQyxLQUFLO1FBQ2pCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2xDLENBQUM7OztZQXBCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFNBQVM7Z0JBQ25CLFFBQVEsRUFBRTs7Ozs7OztHQU9UO2FBQ0Y7Ozs7O29CQUdFLEtBQUs7NkJBQ0wsTUFBTTs7OztJQURQLGdDQUF1Qjs7SUFDdkIseUNBQW9FIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRmFtaWx5IH0gZnJvbSAnLi4vbW9kZWxzL25nLWZhbWlseS5tb2RlbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Z0LWxlYWYnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxhIFtuZ0NsYXNzXT1cImNoaWxkLnJlbGF0aW9uc2hpcCA/IGNoaWxkLnJlbGF0aW9uc2hpcCArICctbGVhZicgOiAnJ1wiIChjbGljayk9XCJfbGVhZlNlbGVjdGVkKGNoaWxkKVwiPnt7Y2hpbGQubmFtZX19PC9hPlxuICAgIDx1bCAqbmdJZj1cImNoaWxkLmNoaWxkcmVuICYmIGNoaWxkLmNoaWxkcmVuLmxlbmd0aCA+IDBcIj5cbiAgICAgIDxsaSAqbmdGb3I9XCJsZXQgcm93IG9mIGNoaWxkLmNoaWxkcmVuXCI+XG4gICAgICAgIDxmdC1sZWFmIChvbkxlYWZTZWxlY3RlZCk9XCJfbGVhZlNlbGVjdGVkKCRldmVudClcIiBbY2hpbGRdPVwicm93XCI+PC9mdC1sZWFmPlxuICAgICAgPC9saT5cbiAgICA8L3VsPlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIEZ0TGVhZkNvbXBvbmVudCB7XG5cbiAgQElucHV0KCkgY2hpbGQ6IEZhbWlseTtcbiAgQE91dHB1dCgpIG9uTGVhZlNlbGVjdGVkOiBFdmVudEVtaXR0ZXI8RmFtaWx5PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIF9sZWFmU2VsZWN0ZWQoX2xlYWYpIHtcbiAgICB0aGlzLm9uTGVhZlNlbGVjdGVkLmVtaXQoX2xlYWYpO1xuICB9XG5cbn1cblxuIl19