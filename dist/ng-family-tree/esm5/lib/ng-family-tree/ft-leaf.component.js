/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Family } from '../models/ng-family.model';
var FtLeafComponent = /** @class */ (function () {
    function FtLeafComponent() {
        this.onLeafSelected = new EventEmitter();
    }
    /**
     * @param {?} _leaf
     * @return {?}
     */
    FtLeafComponent.prototype._leafSelected = /**
     * @param {?} _leaf
     * @return {?}
     */
    function (_leaf) {
        this.onLeafSelected.emit(_leaf);
    };
    FtLeafComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ft-leaf',
                    template: "\n    <a [ngClass]=\"child.relationship ? child.relationship + '-leaf' : ''\" (click)=\"_leafSelected(child)\"\n        *ngIf=\"child.name\">{{child.name}}</a>\n    <ul *ngIf=\"child.children && child.children.length > 0\">\n      <li *ngFor=\"let row of child.children\">\n        <ft-leaf (onLeafSelected)=\"_leafSelected($event)\" [child]=\"row\"></ft-leaf>\n      </li>\n    </ul>\n  "
                }] }
    ];
    /** @nocollapse */
    FtLeafComponent.ctorParameters = function () { return []; };
    FtLeafComponent.propDecorators = {
        child: [{ type: Input }],
        onLeafSelected: [{ type: Output }]
    };
    return FtLeafComponent;
}());
export { FtLeafComponent };
if (false) {
    /** @type {?} */
    FtLeafComponent.prototype.child;
    /** @type {?} */
    FtLeafComponent.prototype.onLeafSelected;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnQtbGVhZi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1mYW1pbHktdHJlZS8iLCJzb3VyY2VzIjpbImxpYi9uZy1mYW1pbHktdHJlZS9mdC1sZWFmLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN2RSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFbkQ7SUFpQkU7UUFGVSxtQkFBYyxHQUF5QixJQUFJLFlBQVksRUFBRSxDQUFDO0lBRXBELENBQUM7Ozs7O0lBRWpCLHVDQUFhOzs7O0lBQWIsVUFBYyxLQUFLO1FBQ2pCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2xDLENBQUM7O2dCQXJCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFNBQVM7b0JBQ25CLFFBQVEsRUFBRSxzWUFRVDtpQkFDRjs7Ozs7d0JBR0UsS0FBSztpQ0FDTCxNQUFNOztJQVFULHNCQUFDO0NBQUEsQUF2QkQsSUF1QkM7U0FYWSxlQUFlOzs7SUFFMUIsZ0NBQXVCOztJQUN2Qix5Q0FBb0UiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGYW1pbHkgfSBmcm9tICcuLi9tb2RlbHMvbmctZmFtaWx5Lm1vZGVsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZnQtbGVhZicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGEgW25nQ2xhc3NdPVwiY2hpbGQucmVsYXRpb25zaGlwID8gY2hpbGQucmVsYXRpb25zaGlwICsgJy1sZWFmJyA6ICcnXCIgKGNsaWNrKT1cIl9sZWFmU2VsZWN0ZWQoY2hpbGQpXCJcbiAgICAgICAgKm5nSWY9XCJjaGlsZC5uYW1lXCI+e3tjaGlsZC5uYW1lfX08L2E+XG4gICAgPHVsICpuZ0lmPVwiY2hpbGQuY2hpbGRyZW4gJiYgY2hpbGQuY2hpbGRyZW4ubGVuZ3RoID4gMFwiPlxuICAgICAgPGxpICpuZ0Zvcj1cImxldCByb3cgb2YgY2hpbGQuY2hpbGRyZW5cIj5cbiAgICAgICAgPGZ0LWxlYWYgKG9uTGVhZlNlbGVjdGVkKT1cIl9sZWFmU2VsZWN0ZWQoJGV2ZW50KVwiIFtjaGlsZF09XCJyb3dcIj48L2Z0LWxlYWY+XG4gICAgICA8L2xpPlxuICAgIDwvdWw+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgRnRMZWFmQ29tcG9uZW50IHtcblxuICBASW5wdXQoKSBjaGlsZDogRmFtaWx5O1xuICBAT3V0cHV0KCkgb25MZWFmU2VsZWN0ZWQ6IEV2ZW50RW1pdHRlcjxGYW1pbHk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgX2xlYWZTZWxlY3RlZChfbGVhZikge1xuICAgIHRoaXMub25MZWFmU2VsZWN0ZWQuZW1pdChfbGVhZik7XG4gIH1cblxufVxuXG4iXX0=