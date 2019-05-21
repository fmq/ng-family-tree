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
                    template: "\n    <div>\n      <span  *ngFor=\"let node of child.nodes\" class=\"node\"\n             [ngClass]=\"node.relationship ? node.relationship + '-leaf' : ''\"\n             (click)=\"_leafSelected(node)\" [class]=\"node.gender\">{{node.name}}</span>\n    </div>\n    <ul *ngIf=\"child.children && child.children.length > 0\">\n      <li *ngFor=\"let row of child.children\">\n        <ft-leaf (onLeafSelected)=\"_leafSelected($event)\" [child]=\"row\"></ft-leaf>\n      </li>\n    </ul>\n  "
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnQtbGVhZi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1mYW1pbHktdHJlZS8iLCJzb3VyY2VzIjpbImxpYi9uZy1mYW1pbHktdHJlZS9mdC1sZWFmLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN2RSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFbkQ7SUFvQkU7UUFGVSxtQkFBYyxHQUF5QixJQUFJLFlBQVksRUFBRSxDQUFDO0lBRXBELENBQUM7Ozs7O0lBRWpCLHVDQUFhOzs7O0lBQWIsVUFBYyxLQUFLO1FBQ2pCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2xDLENBQUM7O2dCQXhCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFNBQVM7b0JBQ25CLFFBQVEsRUFBRSwwZUFXVDtpQkFDRjs7Ozs7d0JBR0UsS0FBSztpQ0FDTCxNQUFNOztJQVFULHNCQUFDO0NBQUEsQUExQkQsSUEwQkM7U0FYWSxlQUFlOzs7SUFFMUIsZ0NBQXVCOztJQUN2Qix5Q0FBb0UiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGYW1pbHkgfSBmcm9tICcuLi9tb2RlbHMvbmctZmFtaWx5Lm1vZGVsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZnQtbGVhZicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdj5cbiAgICAgIDxzcGFuICAqbmdGb3I9XCJsZXQgbm9kZSBvZiBjaGlsZC5ub2Rlc1wiIGNsYXNzPVwibm9kZVwiXG4gICAgICAgICAgICAgW25nQ2xhc3NdPVwibm9kZS5yZWxhdGlvbnNoaXAgPyBub2RlLnJlbGF0aW9uc2hpcCArICctbGVhZicgOiAnJ1wiXG4gICAgICAgICAgICAgKGNsaWNrKT1cIl9sZWFmU2VsZWN0ZWQobm9kZSlcIiBbY2xhc3NdPVwibm9kZS5nZW5kZXJcIj57e25vZGUubmFtZX19PC9zcGFuPlxuICAgIDwvZGl2PlxuICAgIDx1bCAqbmdJZj1cImNoaWxkLmNoaWxkcmVuICYmIGNoaWxkLmNoaWxkcmVuLmxlbmd0aCA+IDBcIj5cbiAgICAgIDxsaSAqbmdGb3I9XCJsZXQgcm93IG9mIGNoaWxkLmNoaWxkcmVuXCI+XG4gICAgICAgIDxmdC1sZWFmIChvbkxlYWZTZWxlY3RlZCk9XCJfbGVhZlNlbGVjdGVkKCRldmVudClcIiBbY2hpbGRdPVwicm93XCI+PC9mdC1sZWFmPlxuICAgICAgPC9saT5cbiAgICA8L3VsPlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIEZ0TGVhZkNvbXBvbmVudCB7XG5cbiAgQElucHV0KCkgY2hpbGQ6IEZhbWlseTtcbiAgQE91dHB1dCgpIG9uTGVhZlNlbGVjdGVkOiBFdmVudEVtaXR0ZXI8RmFtaWx5PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIF9sZWFmU2VsZWN0ZWQoX2xlYWYpIHtcbiAgICB0aGlzLm9uTGVhZlNlbGVjdGVkLmVtaXQoX2xlYWYpO1xuICB9XG5cbn1cblxuIl19