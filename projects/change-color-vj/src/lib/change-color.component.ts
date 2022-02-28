import { Component, OnInit, Output, EventEmitter, Input, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'lib-change-color',
  template: './change-color-component.html',
  styles: [
  ]
})
export class ChangeColorComponent implements OnInit {
  @Input() interval = 1000;
  @Output() colorChanged = new EventEmitter();
  @ViewChild('divElement') element: any;
  
  constructor() {

  }

  ngOnInit(): void {

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
