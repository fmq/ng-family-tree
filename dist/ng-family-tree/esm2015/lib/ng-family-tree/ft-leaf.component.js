/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { Family } from '../models/ng-family.model';
export class FtLeafComponent {
    constructor() { }
}
FtLeafComponent.decorators = [
    { type: Component, args: [{
                selector: 'ft-leaf',
                template: `
    <a href="#">{{child.name}}</a>
    <ul *ngIf="child.children && child.children.length > 0">
      <li *ngFor="let row of child.children">
        <ft-leaf [child]="row"></ft-leaf>
      </li>
    </ul>
  `
            }] }
];
/** @nocollapse */
FtLeafComponent.ctorParameters = () => [];
FtLeafComponent.propDecorators = {
    child: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    FtLeafComponent.prototype.child;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnQtbGVhZi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1mYW1pbHktdHJlZS8iLCJzb3VyY2VzIjpbImxpYi9uZy1mYW1pbHktdHJlZS9mdC1sZWFmLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBYW5ELE1BQU0sT0FBTyxlQUFlO0lBSTFCLGdCQUFnQixDQUFDOzs7WUFmbEIsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxTQUFTO2dCQUNuQixRQUFRLEVBQUU7Ozs7Ozs7R0FPVDthQUNGOzs7OztvQkFHRSxLQUFLOzs7O0lBQU4sZ0NBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZhbWlseSB9IGZyb20gJy4uL21vZGVscy9uZy1mYW1pbHkubW9kZWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmdC1sZWFmJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8YSBocmVmPVwiI1wiPnt7Y2hpbGQubmFtZX19PC9hPlxuICAgIDx1bCAqbmdJZj1cImNoaWxkLmNoaWxkcmVuICYmIGNoaWxkLmNoaWxkcmVuLmxlbmd0aCA+IDBcIj5cbiAgICAgIDxsaSAqbmdGb3I9XCJsZXQgcm93IG9mIGNoaWxkLmNoaWxkcmVuXCI+XG4gICAgICAgIDxmdC1sZWFmIFtjaGlsZF09XCJyb3dcIj48L2Z0LWxlYWY+XG4gICAgICA8L2xpPlxuICAgIDwvdWw+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgRnRMZWFmQ29tcG9uZW50IHtcblxuICBASW5wdXQoKSBjaGlsZDogRmFtaWx5O1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbn1cblxuIl19