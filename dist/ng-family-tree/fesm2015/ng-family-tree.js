import { Component, Input, ViewEncapsulation, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgFamilyTreeComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
NgFamilyTreeComponent.decorators = [
    { type: Component, args: [{
                selector: 'ft-tree',
                template: `
    <div class="ft-tree">
      <ul>
        <li>
          <a href="#">{{family.name}}</a>
          <ul>
            <li *ngFor="let child of family.children">
              <ft-leaf [child]="child"></ft-leaf>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  `,
                encapsulation: ViewEncapsulation.ShadowDom,
                styles: ["*{margin:0;padding:0}.ft-tree ul{padding-top:20px;position:relative;transition:.5s;-webkit-transition:.5s;-moz-transition:.5s}.ft-tree li{float:left;text-align:center;list-style-type:none;position:relative;padding:20px 5px 0;transition:.5s;-webkit-transition:.5s;-moz-transition:.5s}.ft-tree li::before{content:'';position:absolute;top:0;right:50%;border-top:1px solid #ccc;width:50%;height:20px}.ft-tree li::after{content:'';position:absolute;top:0;border-top:1px solid #ccc;width:50%;height:20px;right:auto;left:50%;border-left:1px solid #ccc}.ft-tree li:only-child{padding-top:0}.ft-tree li:only-child::after,.ft-tree li:only-child::before{display:none}.ft-tree li:first-child::before,.ft-tree li:last-child::after{border:0}.ft-tree li:last-child::before{border-right:1px solid #ccc;border-radius:0 5px 0 0;-webkit-border-radius:0 5px 0 0;-moz-border-radius:0 5px 0 0}.ft-tree li:first-child::after{border-radius:5px 0 0;-webkit-border-radius:5px 0 0 0;-moz-border-radius:5px 0 0}.ft-tree ul ul::before{content:'';position:absolute;top:0;left:50%;border-left:1px solid #ccc;width:0;height:20px}.ft-tree li a{border:1px solid #ccc;padding:5px 10px;text-decoration:none;color:#666;font-family:arial,verdana,tahoma;font-size:11px;display:inline-block;border-radius:5px;-webkit-border-radius:5px;-moz-border-radius:5px;transition:.5s;-webkit-transition:.5s;-moz-transition:.5s}.ft-tree li a:hover,.ft-tree li a:hover+ul li a{background:#c8e4f8;color:#000;border:1px solid #94a0b4}.ft-tree li a:hover+ul li::after,.ft-tree li a:hover+ul li::before,.ft-tree li a:hover+ul ul::before,.ft-tree li a:hover+ul::before{border-color:#94a0b4}"]
            }] }
];
/** @nocollapse */
NgFamilyTreeComponent.ctorParameters = () => [];
NgFamilyTreeComponent.propDecorators = {
    family: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FtLeafComponent {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgFamilyTreeModule {
}
NgFamilyTreeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [NgFamilyTreeComponent, FtLeafComponent],
                imports: [
                    BrowserModule,
                ],
                exports: [NgFamilyTreeComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NgFamilyTreeComponent, NgFamilyTreeModule, FtLeafComponent as ɵa };

//# sourceMappingURL=ng-family-tree.js.map