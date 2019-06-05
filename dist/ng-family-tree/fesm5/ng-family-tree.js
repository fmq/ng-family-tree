import { Component, EventEmitter, Input, Output, ViewEncapsulation, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Family = /** @class */ (function () {
    function Family() {
        this.children = [];
        this.nodes = [];
    }
    return Family;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
    /**
     * @param {?} child
     * @return {?}
     */
    NgFamilyTreeComponent.prototype._setWidth = /**
     * @param {?} child
     * @return {?}
     */
    function (child) {
        return child.nodes && child.nodes[0].relationship === 'self' && child.children.length < 2;
    };
    NgFamilyTreeComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ft-tree',
                    template: "\n    <div class=\"tree\">\n      <ul>\n        <li>\n          <div class=\"top\">\n            <span  *ngFor=\"let node of family.nodes\" (click)=\"_leafSelected(node)\"\n                   class=\"{{node.gender}}\"\n                   [ngClass]=\"node.relationship ? node.relationship + '-leaf' : ''\"\n                   class=\"node\">{{node.name}}</span>\n          </div>\n          <ul>\n            <li *ngFor=\"let child of family.children\" [ngStyle]=\"{'width': _setWidth(child) ? '100%' : 'auto'}\" >\n              <ft-leaf (onLeafSelected)=\"_leafSelected($event)\" [child]=\"child\"></ft-leaf>\n            </li>\n          </ul>\n        </li>\n      </ul>\n    </div>\n  ",
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgFamilyTreeModule = /** @class */ (function () {
    function NgFamilyTreeModule() {
    }
    NgFamilyTreeModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [NgFamilyTreeComponent, FtLeafComponent],
                    imports: [
                        CommonModule,
                    ],
                    exports: [NgFamilyTreeComponent]
                },] }
    ];
    return NgFamilyTreeModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TreeNode = /** @class */ (function () {
    function TreeNode() {
    }
    return TreeNode;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NgFamilyTreeComponent, NgFamilyTreeModule, Family, TreeNode, FtLeafComponent as ɵa };

//# sourceMappingURL=ng-family-tree.js.map