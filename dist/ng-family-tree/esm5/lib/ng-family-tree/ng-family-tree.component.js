/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { Family } from '../models/family.model';
var NgFamilyTreeComponent = /** @class */ (function () {
    function NgFamilyTreeComponent() {
        this.onLeafSelected = new EventEmitter();
    }
    /**
     * @return {?}
     */
    NgFamilyTreeComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} _leaf
     * @return {?}
     */
    NgFamilyTreeComponent.prototype._leafSelected = /**
     * @param {?} _leaf
     * @return {?}
     */
    function (_leaf) {
        this.onLeafSelected.emit(_leaf);
    };
    NgFamilyTreeComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ft-tree',
                    template: "\n    <div class=\"tree\">\n      <ul>\n        <li>\n          <div>\n            <span  *ngFor=\"let node of family.nodes\" (click)=\"_leafSelected(node)\" [ngClass]=\"node.gender\" class=\"node\">{{node.name}}</span>\n          </div>\n          <ul>\n            <li *ngFor=\"let child of family.children\">\n            <ft-leaf (onLeafSelected)=\"_leafSelected($event)\" [child]=\"child\"></ft-leaf>\n            </li>\n          </ul>\n        </li>\n      </ul>\n    </div>\n  ",
                    encapsulation: ViewEncapsulation.None,
                    styles: ["*{margin:0;padding:0;font-size:10pt}.tree{white-space:nowrap;min-width:800px;min-height:500px}.tree ul{padding-top:20px;position:relative;transition:.5s;-webkit-transition:.5s;-moz-transition:.5s}.tree ul ul::before{content:\"\";position:absolute;top:0;left:50%;border-left:1px solid #ccc;width:0;height:20px}.tree li{float:left;text-align:center;list-style-type:none;position:relative;padding:20px 5px 0;transition:.5s;-webkit-transition:.5s;-moz-transition:.5s}.tree li::before{content:\"\";position:absolute;top:0;right:50%;border-top:1px solid #ccc;width:50%;height:20px}.tree li::after{content:\"\";position:absolute;top:0;border-top:1px solid #ccc;width:50%;height:20px;right:auto;left:50%;border-left:1px solid #ccc}.tree li:only-child{padding-top:0}.tree li:only-child::after,.tree li:only-child::before{display:none}.tree li:first-child::before{border:0}.tree li:first-child::after{border-radius:5px 0 0;-webkit-border-radius:5px 0 0 0;-moz-border-radius:5px 0 0}.tree li:last-child::after{border:0}.tree li:last-child::before{border-right:1px solid #ccc;border-radius:0 5px 0 0;-webkit-border-radius:0 5px 0 0;-moz-border-radius:0 5px 0 0}.tree li div{border:1px solid #ccc;padding:5px 10px;text-decoration:none;color:#666;font-size:11px;display:inline-block;min-width:80px;min-height:30px;border-radius:5px;-webkit-border-radius:5px;-moz-border-radius:5px;transition:.5s;-webkit-transition:.5s;-moz-transition:.5s}.tree li div .node{display:inline-block;min-width:90px;padding:10px;border-radius:5px;-webkit-border-radius:5px;-moz-border-radius:5px;margin:0 2px}.tree li div .node.male{background-color:#add8e6}.tree li div .node.female{background-color:#ffb6c1}.tree li div:hover,.tree li div:hover+ul li div{background:#c8e4f8;color:#000;border:1px solid #94a0b4}.tree li div:hover+ul li::after,.tree li div:hover+ul li::before,.tree li div:hover+ul ul::before,.tree li div:hover+ul::before{border-color:#94a0b4}"]
                }] }
    ];
    /** @nocollapse */
    NgFamilyTreeComponent.ctorParameters = function () { return []; };
    NgFamilyTreeComponent.propDecorators = {
        family: [{ type: Input }],
        onLeafSelected: [{ type: Output }]
    };
    return NgFamilyTreeComponent;
}());
export { NgFamilyTreeComponent };
if (false) {
    /** @type {?} */
    NgFamilyTreeComponent.prototype.family;
    /** @type {?} */
    NgFamilyTreeComponent.prototype.onLeafSelected;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctZmFtaWx5LXRyZWUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctZmFtaWx5LXRyZWUvIiwic291cmNlcyI6WyJsaWIvbmctZmFtaWx5LXRyZWUvbmctZmFtaWx5LXRyZWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2xHLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUVoRDtJQTJCRTtRQUZVLG1CQUFjLEdBQXlCLElBQUksWUFBWSxFQUFFLENBQUM7SUFFcEQsQ0FBQzs7OztJQUVqQix3Q0FBUTs7O0lBQVI7SUFDQSxDQUFDOzs7OztJQUVELDZDQUFhOzs7O0lBQWIsVUFBYyxLQUFLO1FBQ2pCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2xDLENBQUM7O2dCQWxDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFNBQVM7b0JBQ25CLFFBQVEsRUFBRSx1ZUFlVDtvQkFHRCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7aUJBQ3RDOzs7Ozt5QkFHRSxLQUFLO2lDQUNMLE1BQU07O0lBV1QsNEJBQUM7Q0FBQSxBQXBDRCxJQW9DQztTQWRZLHFCQUFxQjs7O0lBRWhDLHVDQUF3Qjs7SUFDeEIsK0NBQW9FIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZhbWlseSB9IGZyb20gJy4uL21vZGVscy9mYW1pbHkubW9kZWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmdC10cmVlJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwidHJlZVwiPlxuICAgICAgPHVsPlxuICAgICAgICA8bGk+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxzcGFuICAqbmdGb3I9XCJsZXQgbm9kZSBvZiBmYW1pbHkubm9kZXNcIiAoY2xpY2spPVwiX2xlYWZTZWxlY3RlZChub2RlKVwiIFtuZ0NsYXNzXT1cIm5vZGUuZ2VuZGVyXCIgY2xhc3M9XCJub2RlXCI+e3tub2RlLm5hbWV9fTwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8dWw+XG4gICAgICAgICAgICA8bGkgKm5nRm9yPVwibGV0IGNoaWxkIG9mIGZhbWlseS5jaGlsZHJlblwiPlxuICAgICAgICAgICAgPGZ0LWxlYWYgKG9uTGVhZlNlbGVjdGVkKT1cIl9sZWFmU2VsZWN0ZWQoJGV2ZW50KVwiIFtjaGlsZF09XCJjaGlsZFwiPjwvZnQtbGVhZj5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9saT5cbiAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG4gIGAsXG4gIHN0eWxlVXJsczogWycuL25nLWZhbWlseS10cmVlLmNvbXBvbmVudC5zY3NzJ10sXG4gIHN0eWxlczogW10sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgTmdGYW1pbHlUcmVlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKSBmYW1pbHk6IEZhbWlseTtcbiAgQE91dHB1dCgpIG9uTGVhZlNlbGVjdGVkOiBFdmVudEVtaXR0ZXI8RmFtaWx5PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgX2xlYWZTZWxlY3RlZChfbGVhZikge1xuICAgIHRoaXMub25MZWFmU2VsZWN0ZWQuZW1pdChfbGVhZik7XG4gIH1cblxufVxuIl19