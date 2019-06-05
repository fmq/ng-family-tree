/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Family } from '../models/family.model';
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
                    template: "\n    <div>\n      <span  *ngFor=\"let node of child.nodes\" class=\"node\"\n             [ngClass]=\"node.relationship ? node.relationship + '-leaf' : ''\"\n             (click)=\"_leafSelected(node)\" [class]=\"node.gender\">{{node.name}}</span>\n    </div>\n    <ul *ngIf=\"child.children && child.children.length > 0\">\n      <li *ngFor=\"let row of child.children\" [ngStyle]=\"{'width': child.children.length === 1 ? '100%' : 'auto'}\">\n        <ft-leaf (onLeafSelected)=\"_leafSelected($event)\" [child]=\"row\"></ft-leaf>\n      </li>\n    </ul>\n  "
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnQtbGVhZi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1mYW1pbHktdHJlZS8iLCJzb3VyY2VzIjpbImxpYi9uZy1mYW1pbHktdHJlZS9mdC1sZWFmLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN2RSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFaEQ7SUFvQkU7UUFGVSxtQkFBYyxHQUF5QixJQUFJLFlBQVksRUFBRSxDQUFDO0lBRXBELENBQUM7Ozs7O0lBRWpCLHVDQUFhOzs7O0lBQWIsVUFBYyxLQUFLO1FBQ2pCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2xDLENBQUM7O2dCQXhCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFNBQVM7b0JBQ25CLFFBQVEsRUFBRSxpakJBV1Q7aUJBQ0Y7Ozs7O3dCQUdFLEtBQUs7aUNBQ0wsTUFBTTs7SUFRVCxzQkFBQztDQUFBLEFBMUJELElBMEJDO1NBWFksZUFBZTs7O0lBRTFCLGdDQUF1Qjs7SUFDdkIseUNBQW9FIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRmFtaWx5IH0gZnJvbSAnLi4vbW9kZWxzL2ZhbWlseS5tb2RlbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Z0LWxlYWYnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXY+XG4gICAgICA8c3BhbiAgKm5nRm9yPVwibGV0IG5vZGUgb2YgY2hpbGQubm9kZXNcIiBjbGFzcz1cIm5vZGVcIlxuICAgICAgICAgICAgIFtuZ0NsYXNzXT1cIm5vZGUucmVsYXRpb25zaGlwID8gbm9kZS5yZWxhdGlvbnNoaXAgKyAnLWxlYWYnIDogJydcIlxuICAgICAgICAgICAgIChjbGljayk9XCJfbGVhZlNlbGVjdGVkKG5vZGUpXCIgW2NsYXNzXT1cIm5vZGUuZ2VuZGVyXCI+e3tub2RlLm5hbWV9fTwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgICA8dWwgKm5nSWY9XCJjaGlsZC5jaGlsZHJlbiAmJiBjaGlsZC5jaGlsZHJlbi5sZW5ndGggPiAwXCI+XG4gICAgICA8bGkgKm5nRm9yPVwibGV0IHJvdyBvZiBjaGlsZC5jaGlsZHJlblwiIFtuZ1N0eWxlXT1cInsnd2lkdGgnOiBjaGlsZC5jaGlsZHJlbi5sZW5ndGggPT09IDEgPyAnMTAwJScgOiAnYXV0byd9XCI+XG4gICAgICAgIDxmdC1sZWFmIChvbkxlYWZTZWxlY3RlZCk9XCJfbGVhZlNlbGVjdGVkKCRldmVudClcIiBbY2hpbGRdPVwicm93XCI+PC9mdC1sZWFmPlxuICAgICAgPC9saT5cbiAgICA8L3VsPlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIEZ0TGVhZkNvbXBvbmVudCB7XG5cbiAgQElucHV0KCkgY2hpbGQ6IEZhbWlseTtcbiAgQE91dHB1dCgpIG9uTGVhZlNlbGVjdGVkOiBFdmVudEVtaXR0ZXI8RmFtaWx5PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIF9sZWFmU2VsZWN0ZWQoX2xlYWYpIHtcbiAgICB0aGlzLm9uTGVhZlNlbGVjdGVkLmVtaXQoX2xlYWYpO1xuICB9XG5cbn1cblxuIl19