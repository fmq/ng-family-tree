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
                    template: "\n    <div class=\"ft-tree\">\n      <ul>\n        <li>\n          <a [ngClass]=\"family.relationship ? family.relationship + '-top' : ''\" href=\"#\">{{family.name}}</a>\n          <ul>\n            <li *ngFor=\"let child of family.children\">\n              <ft-leaf [ngClass]=\"child.relationship ? child.relationship + '-leaf' : ''\" [child]=\"child\"></ft-leaf>\n            </li>\n          </ul>\n        </li>\n      </ul>\n    </div>\n  ",
                    encapsulation: ViewEncapsulation.None,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctZmFtaWx5LXRyZWUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctZmFtaWx5LXRyZWUvIiwic291cmNlcyI6WyJsaWIvbmctZmFtaWx5LXRyZWUvbmctZmFtaWx5LXRyZWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM1RSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFbkQ7SUF3QkU7SUFBZ0IsQ0FBQzs7OztJQUVqQix3Q0FBUTs7O0lBQVI7SUFDQSxDQUFDOztnQkEzQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxTQUFTO29CQUNuQixRQUFRLEVBQUUsZ2NBYVQ7b0JBR0QsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O2lCQUN0Qzs7Ozs7eUJBR0UsS0FBSzs7SUFPUiw0QkFBQztDQUFBLEFBN0JELElBNkJDO1NBVFkscUJBQXFCOzs7SUFFaEMsdUNBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRmFtaWx5IH0gZnJvbSAnLi4vbW9kZWxzL25nLWZhbWlseS5tb2RlbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Z0LXRyZWUnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJmdC10cmVlXCI+XG4gICAgICA8dWw+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8YSBbbmdDbGFzc109XCJmYW1pbHkucmVsYXRpb25zaGlwID8gZmFtaWx5LnJlbGF0aW9uc2hpcCArICctdG9wJyA6ICcnXCIgaHJlZj1cIiNcIj57e2ZhbWlseS5uYW1lfX08L2E+XG4gICAgICAgICAgPHVsPlxuICAgICAgICAgICAgPGxpICpuZ0Zvcj1cImxldCBjaGlsZCBvZiBmYW1pbHkuY2hpbGRyZW5cIj5cbiAgICAgICAgICAgICAgPGZ0LWxlYWYgW25nQ2xhc3NdPVwiY2hpbGQucmVsYXRpb25zaGlwID8gY2hpbGQucmVsYXRpb25zaGlwICsgJy1sZWFmJyA6ICcnXCIgW2NoaWxkXT1cImNoaWxkXCI+PC9mdC1sZWFmPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2xpPlxuICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbiAgYCxcbiAgc3R5bGVVcmxzOiBbJy4vbmctZmFtaWx5LXRyZWUuY29tcG9uZW50LnNjc3MnXSxcbiAgc3R5bGVzOiBbXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBOZ0ZhbWlseVRyZWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIGZhbWlseTogRmFtaWx5O1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIl19