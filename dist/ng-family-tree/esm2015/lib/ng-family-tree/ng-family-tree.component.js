/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Family } from '../models/ng-family.model';
export class NgFamilyTreeComponent {
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
          <a [ngClass]="family.relationship ? family.relationship + '-top' : ''" href="#">{{family.name}}</a>
          <ul>
            <li *ngFor="let child of family.children">
              <ft-leaf [ngClass]="child.relationship ? child.relationship + '-leaf' : ''" [child]="child"></ft-leaf>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  `,
                encapsulation: ViewEncapsulation.None,
                styles: ["*{margin:0;padding:0}.ft-tree ul{padding-top:20px;position:relative;transition:.5s;-webkit-transition:.5s;-moz-transition:.5s}.ft-tree li{float:left;text-align:center;list-style-type:none;position:relative;padding:20px 5px 0;transition:.5s;-webkit-transition:.5s;-moz-transition:.5s}.ft-tree li::before{content:'';position:absolute;top:0;right:50%;border-top:1px solid #ccc;width:50%;height:20px}.ft-tree li::after{content:'';position:absolute;top:0;border-top:1px solid #ccc;width:50%;height:20px;right:auto;left:50%;border-left:1px solid #ccc}.ft-tree li:only-child{padding-top:0}.ft-tree li:only-child::after,.ft-tree li:only-child::before{display:none}.ft-tree li:first-child::before,.ft-tree li:last-child::after{border:0}.ft-tree li:last-child::before{border-right:1px solid #ccc;border-radius:0 5px 0 0;-webkit-border-radius:0 5px 0 0;-moz-border-radius:0 5px 0 0}.ft-tree li:first-child::after{border-radius:5px 0 0;-webkit-border-radius:5px 0 0 0;-moz-border-radius:5px 0 0}.ft-tree ul ul::before{content:'';position:absolute;top:0;left:50%;border-left:1px solid #ccc;width:0;height:20px}.ft-tree li a{border:1px solid #ccc;padding:5px 10px;text-decoration:none;color:#666;font-family:arial,verdana,tahoma;font-size:11px;display:inline-block;border-radius:5px;-webkit-border-radius:5px;-moz-border-radius:5px;transition:.5s;-webkit-transition:.5s;-moz-transition:.5s}.ft-tree li a:hover,.ft-tree li a:hover+ul li a{background:#c8e4f8;color:#000;border:1px solid #94a0b4}.ft-tree li a:hover+ul li::after,.ft-tree li a:hover+ul li::before,.ft-tree li a:hover+ul ul::before,.ft-tree li a:hover+ul::before{border-color:#94a0b4}"]
            }] }
];
/** @nocollapse */
NgFamilyTreeComponent.ctorParameters = () => [];
NgFamilyTreeComponent.propDecorators = {
    family: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    NgFamilyTreeComponent.prototype.family;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctZmFtaWx5LXRyZWUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctZmFtaWx5LXRyZWUvIiwic291cmNlcyI6WyJsaWIvbmctZmFtaWx5LXRyZWUvbmctZmFtaWx5LXRyZWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM1RSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFzQm5ELE1BQU0sT0FBTyxxQkFBcUI7SUFJaEMsZ0JBQWdCLENBQUM7Ozs7SUFFakIsUUFBUTtJQUNSLENBQUM7OztZQTNCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFNBQVM7Z0JBQ25CLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7OztHQWFUO2dCQUdELGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOzthQUN0Qzs7Ozs7cUJBR0UsS0FBSzs7OztJQUFOLHVDQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZhbWlseSB9IGZyb20gJy4uL21vZGVscy9uZy1mYW1pbHkubW9kZWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmdC10cmVlJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwiZnQtdHJlZVwiPlxuICAgICAgPHVsPlxuICAgICAgICA8bGk+XG4gICAgICAgICAgPGEgW25nQ2xhc3NdPVwiZmFtaWx5LnJlbGF0aW9uc2hpcCA/IGZhbWlseS5yZWxhdGlvbnNoaXAgKyAnLXRvcCcgOiAnJ1wiIGhyZWY9XCIjXCI+e3tmYW1pbHkubmFtZX19PC9hPlxuICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgIDxsaSAqbmdGb3I9XCJsZXQgY2hpbGQgb2YgZmFtaWx5LmNoaWxkcmVuXCI+XG4gICAgICAgICAgICAgIDxmdC1sZWFmIFtuZ0NsYXNzXT1cImNoaWxkLnJlbGF0aW9uc2hpcCA/IGNoaWxkLnJlbGF0aW9uc2hpcCArICctbGVhZicgOiAnJ1wiIFtjaGlsZF09XCJjaGlsZFwiPjwvZnQtbGVhZj5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9saT5cbiAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG4gIGAsXG4gIHN0eWxlVXJsczogWycuL25nLWZhbWlseS10cmVlLmNvbXBvbmVudC5zY3NzJ10sXG4gIHN0eWxlczogW10sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgTmdGYW1pbHlUcmVlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKSBmYW1pbHk6IEZhbWlseTtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiJdfQ==