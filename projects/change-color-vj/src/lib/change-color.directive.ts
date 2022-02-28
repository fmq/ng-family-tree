import { Directive, ElementRef, EventEmitter, Input, Output } from '@angular/core';

@Directive({
  selector: 'libChangeColor',
  exportAs: 'colorchange'
})


export class ChangeColorDirective {
  element: ElementRef;
  @Input() interval = 1000;
  @Output() addHero = new EventEmitter();

  constructor(elementr: ElementRef) {
    this.element = elementr;
    this.applyDirective();
  }

  applyDirective() {
    setInterval(() => {
      const r = Math.round(Math.random() * 255);
      const g = Math.round(Math.random() * 255);
      const b = Math.round(Math.random() * 255);

      this.element.nativeElement.style.backgroundColor = `rgb("${r},${g},${b})`;
    }, 1000);
  }
}
