import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxFamilyTreeComponent } from './ngx-family-tree.component';

describe('NgxFamilyTreeComponent', () => {
  let component: NgxFamilyTreeComponent;
  let fixture: ComponentFixture<NgxFamilyTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxFamilyTreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxFamilyTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
