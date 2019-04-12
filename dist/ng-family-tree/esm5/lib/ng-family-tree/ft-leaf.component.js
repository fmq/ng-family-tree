/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { Family } from '../models/ng-family.model';
var FtLeafComponent = /** @class */ (function () {
    function FtLeafComponent() {
    }
    FtLeafComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ft-leaf',
                    template: "\n    <a href=\"#\">{{child.name}}</a>\n    <ul *ngIf=\"child.children && child.children.length > 0\">\n      <li *ngFor=\"let row of child.children\">\n        <ft-leaf [child]=\"row\"></ft-leaf>\n      </li>\n    </ul>\n  "
                }] }
    ];
    /** @nocollapse */
    FtLeafComponent.ctorParameters = function () { return []; };
    FtLeafComponent.propDecorators = {
        child: [{ type: Input }]
    };
    return FtLeafComponent;
}());
export { FtLeafComponent };
if (false) {
    /** @type {?} */
    FtLeafComponent.prototype.child;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnQtbGVhZi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1mYW1pbHktdHJlZS8iLCJzb3VyY2VzIjpbImxpYi9uZy1mYW1pbHktdHJlZS9mdC1sZWFmLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRW5EO0lBZUU7SUFBZ0IsQ0FBQzs7Z0JBZmxCLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsU0FBUztvQkFDbkIsUUFBUSxFQUFFLGtPQU9UO2lCQUNGOzs7Ozt3QkFHRSxLQUFLOztJQUlSLHNCQUFDO0NBQUEsQUFqQkQsSUFpQkM7U0FOWSxlQUFlOzs7SUFFMUIsZ0NBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZhbWlseSB9IGZyb20gJy4uL21vZGVscy9uZy1mYW1pbHkubW9kZWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmdC1sZWFmJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8YSBocmVmPVwiI1wiPnt7Y2hpbGQubmFtZX19PC9hPlxuICAgIDx1bCAqbmdJZj1cImNoaWxkLmNoaWxkcmVuICYmIGNoaWxkLmNoaWxkcmVuLmxlbmd0aCA+IDBcIj5cbiAgICAgIDxsaSAqbmdGb3I9XCJsZXQgcm93IG9mIGNoaWxkLmNoaWxkcmVuXCI+XG4gICAgICAgIDxmdC1sZWFmIFtjaGlsZF09XCJyb3dcIj48L2Z0LWxlYWY+XG4gICAgICA8L2xpPlxuICAgIDwvdWw+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgRnRMZWFmQ29tcG9uZW50IHtcblxuICBASW5wdXQoKSBjaGlsZDogRmFtaWx5O1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbn1cblxuIl19