import { TestBed } from '@angular/core/testing';

import { NgxFamilyTreeService } from './ngx-family-tree.service';

describe('NgxFamilyTreeService', () => {
  let service: NgxFamilyTreeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxFamilyTreeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
