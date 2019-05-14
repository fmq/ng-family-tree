/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Family } from '../models/ng-family.model';
var NgFamilyTreeComponent = /** @class */ (function () {
    function NgFamilyTreeComponent() {
    }
    /**
     * @return {?}
     */
    NgFamilyTreeComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    NgFamilyTreeComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ft-tree',
                    template: "\n    <div class=\"ft-tree\">\n      <ul>\n        <li>\n          <a href=\"#\">{{family.name}}</a>\n          <ul>\n            <li *ngFor=\"let child of family.children\">\n              <ft-leaf [ngClass]=\"child.relationship ? child.relationship + '-leaf' : ''\" [child]=\"child\"></ft-leaf>\n            </li>\n          </ul>\n        </li>\n      </ul>\n    </div>\n  ",
                    encapsulation: ViewEncapsulation.ShadowDom,
                    styles: ["*{margin:0;padding:0}.ft-tree ul{padding-top:20px;position:relative;transition:.5s;-webkit-transition:.5s;-moz-transition:.5s}.ft-tree li{float:left;text-align:center;list-style-type:none;position:relative;padding:20px 5px 0;transition:.5s;-webkit-transition:.5s;-moz-transition:.5s}.ft-tree li::before{content:'';position:absolute;top:0;right:50%;border-top:1px solid #ccc;width:50%;height:20px}.ft-tree li::after{content:'';position:absolute;top:0;border-top:1px solid #ccc;width:50%;height:20px;right:auto;left:50%;border-left:1px solid #ccc}.ft-tree li:only-child{padding-top:0}.ft-tree li:only-child::after,.ft-tree li:only-child::before{display:none}.ft-tree li:first-child::before,.ft-tree li:last-child::after{border:0}.ft-tree li:last-child::before{border-right:1px solid #ccc;border-radius:0 5px 0 0;-webkit-border-radius:0 5px 0 0;-moz-border-radius:0 5px 0 0}.ft-tree li:first-child::after{border-radius:5px 0 0;-webkit-border-radius:5px 0 0 0;-moz-border-radius:5px 0 0}.ft-tree ul ul::before{content:'';position:absolute;top:0;left:50%;border-left:1px solid #ccc;width:0;height:20px}.ft-tree li a{border:1px solid #ccc;padding:5px 10px;text-decoration:none;color:#666;font-family:arial,verdana,tahoma;font-size:11px;display:inline-block;border-radius:5px;-webkit-border-radius:5px;-moz-border-radius:5px;transition:.5s;-webkit-transition:.5s;-moz-transition:.5s}.ft-tree li a:hover,.ft-tree li a:hover+ul li a{background:#c8e4f8;color:#000;border:1px solid #94a0b4}.ft-tree li a:hover+ul li::after,.ft-tree li a:hover+ul li::before,.ft-tree li a:hover+ul ul::before,.ft-tree li a:hover+ul::before{border-color:#94a0b4}"]
                }] }
    ];
    /** @nocollapse */
    NgFamilyTreeComponent.ctorParameters = function () { return []; };
    NgFamilyTreeComponent.propDecorators = {
        family: [{ type: Input }]
    };
    return NgFamilyTreeComponent;
}());
export { NgFamilyTreeComponent };
if (false) {
    /** @type {?} */
    NgFamilyTreeComponent.prototype.family;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctZmFtaWx5LXRyZWUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctZmFtaWx5LXRyZWUvIiwic291cmNlcyI6WyJsaWIvbmctZmFtaWx5LXRyZWUvbmctZmFtaWx5LXRyZWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM1RSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFbkQ7SUF3QkU7SUFBZ0IsQ0FBQzs7OztJQUVqQix3Q0FBUTs7O0lBQVI7SUFDQSxDQUFDOztnQkEzQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxTQUFTO29CQUNuQixRQUFRLEVBQUUsMFhBYVQ7b0JBR0QsYUFBYSxFQUFFLGlCQUFpQixDQUFDLFNBQVM7O2lCQUMzQzs7Ozs7eUJBR0UsS0FBSzs7SUFPUiw0QkFBQztDQUFBLEFBN0JELElBNkJDO1NBVFkscUJBQXFCOzs7SUFFaEMsdUNBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRmFtaWx5IH0gZnJvbSAnLi4vbW9kZWxzL25nLWZhbWlseS5tb2RlbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Z0LXRyZWUnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJmdC10cmVlXCI+XG4gICAgICA8dWw+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8YSBocmVmPVwiI1wiPnt7ZmFtaWx5Lm5hbWV9fTwvYT5cbiAgICAgICAgICA8dWw+XG4gICAgICAgICAgICA8bGkgKm5nRm9yPVwibGV0IGNoaWxkIG9mIGZhbWlseS5jaGlsZHJlblwiPlxuICAgICAgICAgICAgICA8ZnQtbGVhZiBbbmdDbGFzc109XCJjaGlsZC5yZWxhdGlvbnNoaXAgPyBjaGlsZC5yZWxhdGlvbnNoaXAgKyAnLWxlYWYnIDogJydcIiBbY2hpbGRdPVwiY2hpbGRcIj48L2Z0LWxlYWY+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvbGk+XG4gICAgICA8L3VsPlxuICAgIDwvZGl2PlxuICBgLFxuICBzdHlsZVVybHM6IFsnLi9uZy1mYW1pbHktdHJlZS5jb21wb25lbnQuc2NzcyddLFxuICBzdHlsZXM6IFtdLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5TaGFkb3dEb21cbn0pXG5leHBvcnQgY2xhc3MgTmdGYW1pbHlUcmVlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKSBmYW1pbHk6IEZhbWlseTtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiJdfQ==