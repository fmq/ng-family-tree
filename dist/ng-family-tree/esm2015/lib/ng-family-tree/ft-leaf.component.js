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
    <a [ngClass]="child.relationship ? child.relationship + '-leaf' : ''" (click)="_leafSelected(child)"
        *ngIf="child.name">{{child.name}}</a>
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnQtbGVhZi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1mYW1pbHktdHJlZS8iLCJzb3VyY2VzIjpbImxpYi9uZy1mYW1pbHktdHJlZS9mdC1sZWFmLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN2RSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFjbkQsTUFBTSxPQUFPLGVBQWU7SUFLMUI7UUFGVSxtQkFBYyxHQUF5QixJQUFJLFlBQVksRUFBRSxDQUFDO0lBRXBELENBQUM7Ozs7O0lBRWpCLGFBQWEsQ0FBQyxLQUFLO1FBQ2pCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2xDLENBQUM7OztZQXJCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFNBQVM7Z0JBQ25CLFFBQVEsRUFBRTs7Ozs7Ozs7R0FRVDthQUNGOzs7OztvQkFHRSxLQUFLOzZCQUNMLE1BQU07Ozs7SUFEUCxnQ0FBdUI7O0lBQ3ZCLHlDQUFvRSIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZhbWlseSB9IGZyb20gJy4uL21vZGVscy9uZy1mYW1pbHkubW9kZWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmdC1sZWFmJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8YSBbbmdDbGFzc109XCJjaGlsZC5yZWxhdGlvbnNoaXAgPyBjaGlsZC5yZWxhdGlvbnNoaXAgKyAnLWxlYWYnIDogJydcIiAoY2xpY2spPVwiX2xlYWZTZWxlY3RlZChjaGlsZClcIlxuICAgICAgICAqbmdJZj1cImNoaWxkLm5hbWVcIj57e2NoaWxkLm5hbWV9fTwvYT5cbiAgICA8dWwgKm5nSWY9XCJjaGlsZC5jaGlsZHJlbiAmJiBjaGlsZC5jaGlsZHJlbi5sZW5ndGggPiAwXCI+XG4gICAgICA8bGkgKm5nRm9yPVwibGV0IHJvdyBvZiBjaGlsZC5jaGlsZHJlblwiPlxuICAgICAgICA8ZnQtbGVhZiAob25MZWFmU2VsZWN0ZWQpPVwiX2xlYWZTZWxlY3RlZCgkZXZlbnQpXCIgW2NoaWxkXT1cInJvd1wiPjwvZnQtbGVhZj5cbiAgICAgIDwvbGk+XG4gICAgPC91bD5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBGdExlYWZDb21wb25lbnQge1xuXG4gIEBJbnB1dCgpIGNoaWxkOiBGYW1pbHk7XG4gIEBPdXRwdXQoKSBvbkxlYWZTZWxlY3RlZDogRXZlbnRFbWl0dGVyPEZhbWlseT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBfbGVhZlNlbGVjdGVkKF9sZWFmKSB7XG4gICAgdGhpcy5vbkxlYWZTZWxlY3RlZC5lbWl0KF9sZWFmKTtcbiAgfVxuXG59XG5cbiJdfQ==