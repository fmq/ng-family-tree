(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/platform-browser')) :
    typeof define === 'function' && define.amd ? define('ng-family-tree', ['exports', '@angular/core', '@angular/platform-browser'], factory) :
    (factory((global['ng-family-tree'] = {}),global.ng.core,global.ng.platformBrowser));
}(this, (function (exports,core,platformBrowser) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
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
            { type: core.Component, args: [{
                        selector: 'ft-tree',
                        template: "\n    <div class=\"ft-tree\">\n      <ul>\n        <li>\n          <a href=\"#\">{{family.name}}</a>\n          <ul>\n            <li *ngFor=\"let child of family.children\">\n              <ft-leaf [child]=\"child\"></ft-leaf>\n            </li>\n          </ul>\n        </li>\n      </ul>\n    </div>\n  ",
                        encapsulation: core.ViewEncapsulation.ShadowDom,
                        styles: ["*{margin:0;padding:0}.ft-tree ul{padding-top:20px;position:relative;transition:.5s;-webkit-transition:.5s;-moz-transition:.5s}.ft-tree li{float:left;text-align:center;list-style-type:none;position:relative;padding:20px 5px 0;transition:.5s;-webkit-transition:.5s;-moz-transition:.5s}.ft-tree li::before{content:'';position:absolute;top:0;right:50%;border-top:1px solid #ccc;width:50%;height:20px}.ft-tree li::after{content:'';position:absolute;top:0;border-top:1px solid #ccc;width:50%;height:20px;right:auto;left:50%;border-left:1px solid #ccc}.ft-tree li:only-child{padding-top:0}.ft-tree li:only-child::after,.ft-tree li:only-child::before{display:none}.ft-tree li:first-child::before,.ft-tree li:last-child::after{border:0}.ft-tree li:last-child::before{border-right:1px solid #ccc;border-radius:0 5px 0 0;-webkit-border-radius:0 5px 0 0;-moz-border-radius:0 5px 0 0}.ft-tree li:first-child::after{border-radius:5px 0 0;-webkit-border-radius:5px 0 0 0;-moz-border-radius:5px 0 0}.ft-tree ul ul::before{content:'';position:absolute;top:0;left:50%;border-left:1px solid #ccc;width:0;height:20px}.ft-tree li a{border:1px solid #ccc;padding:5px 10px;text-decoration:none;color:#666;font-family:arial,verdana,tahoma;font-size:11px;display:inline-block;border-radius:5px;-webkit-border-radius:5px;-moz-border-radius:5px;transition:.5s;-webkit-transition:.5s;-moz-transition:.5s}.ft-tree li a:hover,.ft-tree li a:hover+ul li a{background:#c8e4f8;color:#000;border:1px solid #94a0b4}.ft-tree li a:hover+ul li::after,.ft-tree li a:hover+ul li::before,.ft-tree li a:hover+ul ul::before,.ft-tree li a:hover+ul::before{border-color:#94a0b4}"]
                    }] }
        ];
        /** @nocollapse */
        NgFamilyTreeComponent.ctorParameters = function () { return []; };
        NgFamilyTreeComponent.propDecorators = {
            family: [{ type: core.Input }]
        };
        return NgFamilyTreeComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FtLeafComponent = /** @class */ (function () {
        function FtLeafComponent() {
        }
        FtLeafComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'ft-leaf',
                        template: "\n    <a href=\"#\">{{child.name}}</a>\n    <ul *ngIf=\"child.children && child.children.length > 0\">\n      <li *ngFor=\"let row of child.children\">\n        <ft-leaf [child]=\"row\"></ft-leaf>\n      </li>\n    </ul>\n  "
                    }] }
        ];
        /** @nocollapse */
        FtLeafComponent.ctorParameters = function () { return []; };
        FtLeafComponent.propDecorators = {
            child: [{ type: core.Input }]
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
            { type: core.NgModule, args: [{
                        declarations: [NgFamilyTreeComponent, FtLeafComponent],
                        imports: [
                            platformBrowser.BrowserModule,
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

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.NgFamilyTreeComponent = NgFamilyTreeComponent;
    exports.NgFamilyTreeModule = NgFamilyTreeModule;
    exports.ɵa = FtLeafComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=ng-family-tree.umd.js.map